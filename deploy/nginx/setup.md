# Nginx 部署步骤（Linux 服务器）

1. 上传网站文件到服务器目录：`/var/www/wedding-invite`
2. 复制配置文件到：`/etc/nginx/sites-available/wedding-invite.conf`
3. 修改 `server_name` 为你的域名
4. 创建软链接：
   - `ln -s /etc/nginx/sites-available/wedding-invite.conf /etc/nginx/sites-enabled/`
5. 测试并重载：
   - `nginx -t`
   - `systemctl reload nginx`
6. 申请 HTTPS 证书（推荐）：
   - `apt install certbot python3-certbot-nginx -y`
   - `certbot --nginx -d invite.example.com`

完成后可通过 `https://你的域名` 在微信直接打开。
