# Cloudflare Pages 部署

MuggleStudio 官网的生产域名为 `https://muggle.studio`。

## 构建与发布

工作室官网使用 Cloudflare Pages 项目 `mugglestudio`，生产分支为 `main`，采用 Direct Upload。GitHub Actions 在 PR 和 `main` 推送时运行 `npm run build:verified`。`MuggleStudio/website` 的 `main` 通过验证后，工作流确认构建对应的提交仍是 `main` 的最新提交，再用 Wrangler 上传本次构建的 `dist/`。`main` 的运行按并发规则串行执行，等待中的运行可被新的推送替换。[GitHub Actions `Verify` 工作流](https://github.com/MuggleStudio/website/actions/workflows/verify.yml)。

也可以在 `Verify` 的 **Run workflow** 中选择 `main`，手动验证并发布当前提交。

在 `MuggleStudio/website` 的 **Settings → Secrets and variables → Actions** 配置以下项目。

- 仓库 Secret `MUGGLESTUDIO_PAGES_API_TOKEN` 使用为此工作流创建的 Cloudflare API Token，授予 `Account → Cloudflare Pages → Edit` 权限，并限定到 `mugglestudio` 所属账号。
- 仓库 Variable `MUGGLESTUDIO_CLOUDFLARE_ACCOUNT_ID` 填写该项目所属账号的 Account ID。

部署结果可在 `Verify` 工作流日志和 Cloudflare 项目的 **Deployments** 中查看。参考 [Cloudflare Pages Direct Upload 持续集成文档](https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/)。

## 首次绑定域名

1. 记录 `muggle.studio` 和 `www.muggle.studio` 当前的域名绑定、DNS 和重定向规则，以便回滚。
2. 将 `muggle.studio` 关联到工作室官网的 Pages 项目。如域名仍关联旧 Pages 项目，先解除冲突绑定，再在新项目登记该域名。保留邮件使用的 MX 与 TXT 记录。
3. 配置 `www.muggle.studio` 跳转到 `https://muggle.studio`，并保留路径和查询参数。
4. 验证生产域名正常响应后，再检查以下项目。绑定步骤参考 [Cloudflare 自定义域名文档](https://developers.cloudflare.com/pages/configuration/custom-domains/)。

## 验证

- `https://muggle.studio/` 直接返回 `200` 并显示英文首页，桌面与手机端均可访问。
- `www.muggle.studio` 只跳转到 `https://muggle.studio`，保留路径和查询参数。
- 首页的 canonical 为 `https://muggle.studio/`。`/robots.txt` 标明 sitemap 地址，sitemap 仅列出首页。
- 页脚的联系邮箱和 GitHub 组织链接指向 `mailto:fb@muggle.studio` 和 `https://github.com/MuggleStudio`。

## 回滚

需要立即恢复时，在 `mugglestudio` 的 **Deployments** 中找到上一个成功的生产部署，在操作菜单选择 **Rollback to this deployment**。随后修复或撤销 `main` 上的问题提交，让下一次自动部署包含修复。参考 [Cloudflare Pages 回滚文档](https://developers.cloudflare.com/pages/configuration/rollbacks/)。

若域名配置变更失败，恢复最近一次验证通过的域名绑定和重定向规则，再复核生产域名及 `www` 跳转。
