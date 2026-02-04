# 🚀 SaaS StarteX - Boilerplate Open Source

<div align="center">
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)

  **Boilerplate SaaS pronto para produção com autenticação, banco de dados e UI moderna.**
  
  *Construído para desenvolvedores que querem lançar rápido sem comprometer a qualidade do código.*

  [Demo](#) • [Documentação](#) • [Reportar Bug](#) • [Solicitar Feature](#)

</div>

---

## 📖 Sobre o Projeto

<div align="center">
  <h2 style="font-size: 2rem; margin: 30px 0 20px 0;">🏗️ Arquitetura Enterprise Completa</h2>
</div>

**SaaS StarteX** é um **boilerplate completo e pronto para produção** desenvolvido por Guilherme Costa, um desenvolvedor full-stack especializado em React e TypeScript. Este projeto representa o ápice das melhores práticas modernas de desenvolvimento web.

### 🎯 O que torna este projeto especial?

- **🏆 Arquitetura Enterprise**: Services, repositories, hooks customizados
- **🔐 Multi-Tenant Seguro**: Row-Level Security (RLS) implementado
- **🎨 UI/UX Premium**: Design system completo com Shadcn/UI
- **⚡ Performance Otimizada**: Vite, React 18, TypeScript
- **🔒 Segurança em Primeiro Lugar**: Autenticação robusta com Supabase
- **📱 Totalmente Responsivo**: Mobile-first design
- **🌙 Modo Dark/Light**: Com detecção automática de preferência
- **🚀 Deploy Pronto**: Configurado para Vercel, Netlify e outras plataformas

### 💼 Casos de Uso Ideais

Este boilerplate é perfeito para construir:

- 🏢 **Plataformas B2B SaaS** - CRM, ERP, ferramentas colaborativas
- 📊 **Dashboards Administrativos** - Painéis de controle e analytics
- 🛠️ **Ferramentas Internas** - Sistemas para equipes e empresas
- 💻 **DevTools** - Plataformas para desenvolvedores
- 🚀 **Produtos MicroSaaS** - MVPs rápidos e escaláveis
- 📈 **Aplicações Data-Driven** - Com dashboards de analytics

### 🏆 Destaques Técnicos

| Aspecto | Implementação |
|---------|---------------|
| **Frontend** | React 18 + TypeScript + Vite |
| **Backend** | Supabase (PostgreSQL + Auth + Storage) |
| **UI/UX** | Tailwind CSS v4 + Shadcn/UI + Radix UI |
| **Estado** | React Hooks + Context API |
| **Autenticação** | Supabase Auth (JWT + Sessions) |
| **Banco** | PostgreSQL com RLS |
| **Deploy** | Edge Functions (Hono) |
| **Performance** | Code Splitting + Lazy Loading |

---

## ✨ Funcionalidades

### 🔐 Autenticação (Supabase Auth)
- Autenticação com email/senha
- Cadastro e login de usuários
- Fluxo de reset de senha
- Gerenciamento de sessões
- Rotas protegidas
- Sessões persistentes

### 🎨 UI Moderna
- Biblioteca de componentes **Shadcn/UI**
- **Modo Dark/Light** com detecção de preferência do sistema
- Design totalmente responsivo
- Layout profissional de dashboard
- Navegação com sidebar + header
- Estados de loading e tratamento de erros

### 🏗️ Arquitetura Enterprise
- **Camada de Serviços** - Abstração da lógica de negócio
- **Hooks Customizados** - Lógica React reutilizável (`useAuth`, `useTheme`)
- **TypeScript** - Segurança total de tipos
- **Código Limpo** - Sem gambiarras, sem atalhos

### 🔒 Segurança em Primeiro Lugar
- Row-Level Security (RLS) pronto
- Endpoints de API seguros
- Variáveis de ambiente
- Autenticação baseada em tokens
- Rotas de backend protegidas

### 📊 Dashboard
- Estatísticas em tempo real
- Feed de atividades
- Gerenciamento de usuários
- Página de configurações
- Seção de cobrança (pronta para Stripe)

---

## 🛠️ Stack Tecnológica

<div align="center">

### 🏗️ Arquitetura Técnica

| Componente | Tecnologia | Versão | Propósito |
|------------|------------|--------|-----------|
| **Frontend Core** | React | 18.3.1 | Framework UI |
| **Linguagem** | TypeScript | 5.x | Type Safety |
| **Build Tool** | Vite | 6.3.5 | Fast Development |
| **Estilização** | Tailwind CSS | v4.1.12 | Utility-First CSS |
| **UI Components** | Shadcn/UI | Latest | Design System |
| **Icons** | Lucide React | 0.487.0 | Beautiful Icons |
| **Backend** | Supabase | 2.93.3 | BaaS Platform |
| **Database** | PostgreSQL | Latest | Primary Database |
| **Auth** | Supabase Auth | Built-in | User Management |
| **API** | Hono | Latest | Edge Functions |
| **State** | React Hooks | Native | State Management |
| **Notifications** | Sonner | 2.0.3 | Toast System |

### 🎨 Design System

- **Colors**: Blue/Purple gradient theme
- **Typography**: Modern font stack with Inter
- **Components**: 40+ reusable UI components
- **Dark Mode**: System preference detection
- **Responsive**: Mobile-first approach
- **Animations**: Smooth transitions and micro-interactions

</div>

---

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+ e pnpm (ou npm)
- Conta no Supabase ([tier gratuito disponível](https://supabase.com))

### 1. Clone o Repositório

```bash
git clone https://github.com/seunome/saas-starter.git
cd saas-starter
```

### 2. Instale as Dependências

```bash
pnpm install
# ou
npm install
```

### 3. Configure o Supabase

#### 3.1 Crie um Projeto Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Aguarde a inicialização do banco de dados

#### 3.2 Obtenha suas Credenciais

Do painel do seu projeto Supabase:
- Vá em **Settings** → **API**
- Copie sua **Project URL** e **Anon/Public Key**
- Copie sua **Service Role Key** (mantenha em segredo!)

#### 3.3 Configure as Variáveis de Ambiente

As credenciais do Supabase já estão configuradas neste ambiente via:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 4. Configure o Banco de Dados

1. No painel do Supabase, vá em **SQL Editor**
2. Copie o conteúdo de `/supabase/migrations/001_initial_schema.sql`
3. Cole no editor e clique em **Run**

### 5. Execute a Aplicação

```bash
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

---

## 📁 Estrutura do Projeto

```
saas-starter/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── layout/          # Componentes de layout (Sidebar, Header)
│   │   │   ├── auth/            # Formulários de auth (Login, Signup)
│   │   │   ├── dashboard/       # Views do dashboard
│   │   │   ├── settings/        # Páginas de configurações
│   │   │   └── ui/              # Componentes Shadcn UI
│   │   └── App.tsx              # Componente principal
│   ├── hooks/                   # Hooks React customizados
│   │   ├── useAuth.ts           # Hook de autenticação
│   │   └── useTheme.ts          # Hook de gerenciamento de tema
│   ├── services/                # Camada de lógica de negócio
│   │   ├── auth.service.ts      # Operações de auth
│   │   └── user.service.ts      # Operações de usuário
│   ├── lib/                     # Utilitários
│   │   └── supabase.ts          # Cliente Supabase
│   ├── types/                   # Tipos TypeScript
│   │   └── index.ts             # Definições de tipos compartilhados
│   └── styles/                  # Estilos globais
│       ├── theme.css            # Tokens do design system
│       └── tailwind.css         # Configuração Tailwind
├── supabase/
│   └── functions/
│       └── server/              # Backend API (Hono)
│           └── index.tsx        # Rotas da API
└── README.md
```

### Diretórios Explicados

- **`/components`** - Todos os componentes React, organizados por funcionalidade
- **`/hooks`** - Hooks React customizados para lógica reutilizável
- **`/services`** - Abstração da lógica de negócio (auth, chamadas de API)
- **`/lib`** - Funções utilitárias e configurações
- **`/types`** - Definições de tipos TypeScript
- **`/supabase/functions`** - Endpoints da API backend

---

## 🔐 Fluxo de Autenticação

### Fluxo de Cadastro
1. Usuário preenche formulário de cadastro
2. Frontend → Backend endpoint `/signup`
3. Backend cria usuário via Supabase Admin API
4. Email auto-confirmado (já que servidor de email não está configurado)
5. Usuário redirecionado para login

### Fluxo de Login
1. Usuário insere credenciais
2. Frontend chama Supabase Auth
3. Supabase retorna sessão + access token
4. Token armazenado no cliente Supabase (auto-gerenciado)
5. Usuário redirecionado para dashboard

### Rotas Protegidas
- Rotas verificam estado de auth via hook `useAuth()`
- Usuários não autorizados → redirecionados para login
- Usuários autorizados → acesso concedido

---

## 🗄️ Configuração do Banco de Dados (Multi-Tenant)

### Tabela Key-Value

Por padrão, este projeto usa uma **tabela key-value** simples (`kv_store_9caf4902`) fornecida pelo Supabase.

**Nota:** Para uso em produção, você deve criar tabelas de banco de dados adequadas com Row-Level Security (RLS).

### Schema Multi-Tenant de Exemplo

Veja o arquivo completo em `/supabase/migrations/001_initial_schema.sql` com:
- Tabela de workspaces
- Tabela de membros do workspace
- Políticas RLS completas
- Triggers automáticos

---

## 🎨 Personalização

### Mudar a Marca

1. **Logo** - Atualize o logo em `Sidebar.tsx` e `Header.tsx`
2. **Cores** - Modifique `src/styles/theme.css`
3. **Nome do App** - Busque e substitua "SaaS Starter"

### Adicionar Novas Páginas

1. Crie componente em `/app/components/`
2. Adicione rota em `App.tsx`
3. Adicione link de navegação em `Sidebar.tsx`

### Estender Autenticação

- **OAuth** - Supabase suporta Google, GitHub, etc.
- **MFA** - Pode ser ativado no painel do Supabase
- **Verificação de email** - Configure templates de email no Supabase

---

## 🚢 Deploy

### Deploy no Vercel

```bash
vercel deploy
```

### Deploy no Netlify

```bash
netlify deploy
```

### Variáveis de Ambiente (Produção)

Certifique-se de que estão configuradas na sua plataforma de hospedagem:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Para guia completo de deploy, veja [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🗺️ Roadmap

- [ ] Integração com Stripe para pagamentos
- [ ] Gerenciamento de equipes/workspaces
- [ ] Notificações por email
- [ ] Dashboard avançado de analytics
- [ ] Limitação de taxa de API
- [ ] Logs de auditoria
- [ ] Autenticação de dois fatores (2FA)
- [ ] Login social (Google, GitHub)
- [ ] App mobile (React Native)
- [ ] Painel de admin

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estes passos:

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

---

## 💬 Suporte

- 📧 Email: guilhermethynk299@gmail.com
---

## ⭐ Mostre seu Apoio

Se este projeto te ajudou, considere dar uma ⭐ no GitHub!
