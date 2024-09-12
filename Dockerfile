FROM nginx:1.27

# 拷贝静态资源
COPY dist/ /usr/share/nginx/html/

# 拷贝 Nginx 配置文件
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf