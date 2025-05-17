# frontend/Dockerfile

# Dockerfile en frontend/
FROM nginx:alpine

# Copiar tu configuración personalizada
COPY default.conf /etc/nginx/conf.d/default.conf

# Copiar el frontend
COPY . /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]