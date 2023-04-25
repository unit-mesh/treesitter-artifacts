// @ts-check

import fetch from "node-fetch";
import fs from "node:fs";

/** @type {any} */
const meta = await fetch("https://api.github.com/repos/tree-sitter/tree-sitter/releases/latest").then(it => it.json());

const assets = meta?.assets;
if (Array.isArray(assets)) {
    const js = assets.find(it => it.name === "tree-sitter.js");
    const wasm = assets.find(it => it.name === "tree-sitter.wasm");
    if (!js) {
        throw new Error("tree-sitter.js not found");
    }

    if (!wasm) {
        throw new Error("tree-sitter.wasm not found");
    }

    try { fs.mkdirSync("./main"); } catch {/* NOOP */};

    let jsURL  = js.browser_download_url;
    const jsPromise = fetch(jsURL).then(it => it.arrayBuffer()).then(it => {
        fs.writeFileSync("./main/treesitter.js", Buffer.from(it));
    });

    const wasmURL = wasm.browser_download_url;
    const wasmPromise = fetch(wasmURL).then(it => it.arrayBuffer()).then(it => {
        fs.writeFileSync("./main/treesitter.wasm", Buffer.from(it));
    });

    await Promise.all([jsPromise, wasmPromise]);
}