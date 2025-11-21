# TreeSitter Artifacts

Wasm build package for [https://github.com/unit-mesh/auto-dev-vscode](https://github.com/unit-mesh/auto-dev-vscode)

Online Testings

## REQUIREMENTS

Follow https://tree-sitter.github.io/tree-sitter/contributing#building

To make changes to Tree-sitter, you should have:

1.  A C compiler, for compiling the core library and the generated parsers.
2.  A [Rust toolchain](https://rustup.rs/), for compiling the Rust bindings, the highlighting library, and the CLI.
3.  Node.js and NPM, for generating parsers from `grammar.js` files.
4.  Either [Emscripten](https://emscripten.org/), [Docker](https://www.docker.com/), or [podman](https://podman.io/) for compiling the library to WASM.

### macOS

1. install emcc

```bash
brew install emscripten
```

2. run build

```
pnpm build
```

## HOW TO BUILD

```console
pnpm i
pnpm build
```

## LISENSE

Build script based on: [tree-sitter-wasms](https://github.com/Gregoor/tree-sitter-wasms) with MIT LICENSE.

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
