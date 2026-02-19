FROM nginx:alpine
# Copy local HTML file into the container's web directory
COPY index.html /usr/share/nginx/html/index.html