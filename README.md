# 婚礼电子请柬（移动端）

这是一个原生 HTML/CSS/JavaScript 的婚礼请柬网页，优先适配手机浏览。

## 功能
- 封面与新人信息展示
- 婚礼时间、地点、流程
- 一键地图导航
- RSVP 回执弹窗（本地保存）
- 背景音乐开关

## 使用方式
直接在浏览器打开 `index.html` 即可预览。

## 通过链接在微信打开（已配置）

### 方案 A：GitHub Pages（推荐，最省事）
项目已包含自动部署工作流：[.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

你只需：
1. 把本项目推送到 GitHub 仓库 `main` 分支
2. 在仓库设置中启用 Pages（Source 选 GitHub Actions）
3. 等待 Actions 跑完，拿到 `https://...github.io/.../` 链接
4. 把该链接发到微信即可直接打开

### 方案 B：自有服务器 Nginx
已提供配置模板：[deploy/nginx/wedding-invite.conf](deploy/nginx/wedding-invite.conf)
部署步骤见：[deploy/nginx/setup.md](deploy/nginx/setup.md)

建议务必开启 HTTPS（微信内打开更稳定）。

## 自定义建议
- 在 `index.html` 中替换新人姓名、日期和地址
- 在 `styles.css` 中调整主色和字体
- 在 `script.js` 中对接你的回执接口（当前为 localStorage 示例）
