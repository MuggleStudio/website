# AGENTS 指南

本文件是网站仓库贡献说明的入口。

## 项目定位

- MuggleStudio 的独立工作室官网，使用 Astro 静态构建。
- 官网仅提供英文，包含工作室介绍和联系入口。
- 生产域名为 `https://muggle.studio`。部署方式见 [Cloudflare Pages 部署说明](docs/cloudflare-pages.md)。

## 全局规则

- 默认使用简体中文与用户沟通，除非用户明确要求英文。
- 技术标识保持英文，包括代码注释、API 名、命令、路径、配置键、日志名和代码块内容。
- 说明文字用常见、容易看懂的说法。
- 新增实现前，先搜索仓库中是否已有相同或相近做法。
- 改动聚焦当前任务。行为、部署或贡献流程变化时，同步更新对应文档。
- 新增规范前，先判断应放在本文件、[贡献规则](docs/agents/README.md)还是已有专题文档。
- 不手工提交构建产物，除非任务明确要求。

## 验证与发布

- 修改代码、页面、样式或构建配置后，运行 `npm run build:verified`。
- 纯文档改动运行 `git diff --check`，并复核链接与内容。
- 涉及提交、分支、PR 或校验时，阅读[工作流](docs/agents/WORKFLOW.md)。
- 涉及 Cloudflare Pages 部署、预览、域名或回滚时，阅读 [Cloudflare Pages 部署说明](docs/cloudflare-pages.md)。
