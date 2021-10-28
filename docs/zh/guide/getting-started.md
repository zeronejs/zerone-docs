# 快速上手

## 依赖环境

- [Node.js v12+](https://nodejs.org/)
<!-- - [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选） -->

<!-- ::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，你需要在 [`.npmrc`](https://pnpm.io/zh/npmrc#shamefully-hoist) 文件中设置 `shamefully-hoist=true` 。
- 使用 [yarn 2](https://yarnpkg.com/) 时，你需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker) 文件中设置 `nodeLinker: 'node-modules'` 。
::: -->

## 手动安装

这一章节会帮助你从头搭建一个简单的 Zerone 基础服务。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

- **步骤1**: 安装Zerone cli工具并新建项目

```bash
npm i -g @zeronejs/cli
zerone new project-name
cd project-name
```

- **步骤2**: 初始化并安装依赖

```bash
git init
yarn
```

- **步骤3**: 安装完成后运行

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn start
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run start
```

  </CodeGroupItem>
</CodeGroup>


  Zerone 会在 [http://localhost:5000](http://localhost:5000) 启动一个开发服务器。[http://localhost:5000/api](http://localhost:5000/api) 启动一个 Swagger 开放api。

现在，你应该已经有了一个简单可用的 Zerone 服务器。接下来，了解一下 Zerone [目录](./dir-structure.md) 相关的内容。