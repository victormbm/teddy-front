# Teddy Front-End Challenge
Sistema de gerenciamento de clientes desenvolvido como teste técnico para Front-End Pleno.
## 🌐 Demo
Deploy: https://teddy-front-app-shell-svuo.vercel.app/
## 📋 Sobre o Projeto
Aplicação completa com autenticação, CRUD de clientes, sistema de favoritos e interface responsiva.
### Funcionalidades
- Autenticação com nome personalizado
- Listagem paginada de clientes  
- Criar, editar e excluir clientes
- Sistema de seleção de clientes
- Interface responsiva
## 🚀 Tecnologias
- Frontend: React 18 + TypeScript
- Build: Vite
- Styling: Tailwind CSS
- Estado: Zustand + TanStack Query
- Deploy: Vercel
- Testes: Vitest
## ⚡ Instalação
### Pré-requisitos
- Node.js 18+
- npm
### Executar localmente
```bash
# Clone o repositório
git clone https://github.com/victormbm/teddy-front.git
cd teddy-front
# Instale dependências
npm install
# App principal
cd apps/app-shell
npm install
# Microfrontends  
cd ../../packages/clientes
npm install
cd ../design-system
npm install
# Voltar para raiz e executar
cd ../../
npm run dev

## 🧪 Testes

### Executar testes

```bash
# Navegar para o app principal
cd apps/app-shell
npx vitest


Acesse: http://localhost:5173
📞 Contato
Desenvolvedor: Victor Bandeira
GitHub: @victormbm