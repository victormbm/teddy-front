# Etapa 1 - Build da aplicação
FROM node:18 AS builder

WORKDIR /app
COPY ../../ ./


# Instala dependências e faz build
RUN npm install
RUN npm run build

# Etapa 2 - NGINX para servir a aplicação
FROM nginx:alpine

# Copia os arquivos da build para o NGINX
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia o config default do nginx (opcional, mas pode customizar)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
