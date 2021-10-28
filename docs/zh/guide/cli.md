# 命令行接口

<NpmBadge package="@zeronejs/cli" />

Zerone 命令行接口是由 [@zeronejs/cli](https://www.npmjs.com/package/@zeronejs/cli) 包提供的。
```bash
npm i -g @zeronejs/cli
```

执行 `zerone --help` 来获取下列帮助信息：

```bash
Usage: zerone <command> [options]

Options:
  -v, --version   Output the current version.
  -h, --help      Output usage information.

Commands:
  new|n [name]    Generate New Zerone application.
  build           ts代码打包为js
  info|i          Display Zerone project details.
  generate|g      Generate a Zerone CRUD element
  help [command]  display help for command
```
## info

输出当前系统和依赖相关的信息。

在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。
```bash
zerone info
```
## new

新建一个Zerone项目。

```bash
Usage: zerone new|n [options] [name]

Generate New Zerone application.

Options:
  -h, --help  Output usage information.
```

## generate

读取当前命令行目录下所有*.entity.ts文件，并生成与之相关的 CRUD
::: tip
生成的 Module类 需要导入到根模块。
:::

```bash
Usage: zerone generate|g [options]

Generate a Zerone CRUD element

Options:
  -h, --help  Output usage information.
```

## build

会编译打包项目中的ts文件，它与tsc的区别在于 可以复制其他文件 如：package.json等
::: tip
如果您是库开发者，这将很有帮助。

但在实际开发过程中，您可能不需要它，请使用`npm run build`。
:::

```bash
Usage: zerone build [options]

ts代码打包为js

Options:
  -h, --help  Output usage information.
```

