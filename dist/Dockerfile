FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.svg /usr/share/nginx/html/
COPY _astro /usr/share/nginx/html/_astro
COPY about /usr/share/nginx/html/about
COPY contact /usr/share/nginx/html/contact
COPY projects /usr/share/nginx/html/projects

EXPOSE 80
