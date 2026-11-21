# 工作流

## 开发与校验

- 非平凡改动前先确认方案。新增实现前，搜索仓库中是否已有相近做法。
- 页面、内容或流程有变化时，同步更新已有专题文档。
- 使用 `npm ci` 安装依赖，使用 `npm run dev` 启动本地开发服务。
- 修改页面、布局、样式、数据或构建配置后，运行 `npm run build:verified`。GitHub CI 使用同一命令执行 Astro 类型检查和生产构建。
- 可见页面修改后，检查首页 `/` 的桌面与移动端布局及联系入口。
- 修改 SEO 元数据或路由后，核对构建产物的 canonical 和 sitemap。
- 纯文档改动运行 `git diff --check`，并检查链接、命令与文件路径。

## 提交与 PR

- 提交前确认只暂存当前任务相关文件，运行与改动匹配的校验。提交信息使用英文 Conventional Commits 1.0.0。
- PR 分支需要同步 `main` 时，先执行 `git fetch origin`，再执行 `git rebase origin/main`。仅在用户明确要求保留 merge commit，或特殊历史无法安全 rebase 且已说明原因时，使用 merge。
- rebase 后更新已推送分支时，使用 `git push --force-with-lease origin <branch>`。
- PR 标题使用简洁英文，并且不加工具前缀。描述使用中文，覆盖 [PR 模板](../../.github/pull_request_template.md)中的各节。
- PR 运行 `Verify` 工作流。推送到 `MuggleStudio/website` 的 `main` 后，同一工作流验证并将构建产物部署到工作室官网的 Cloudflare Pages 项目。

部署、域名切换与回滚见 [Cloudflare Pages 部署说明](../cloudflare-pages.md)。
