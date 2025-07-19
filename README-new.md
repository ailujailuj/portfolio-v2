# 🚀 Portfolio V2

Um portfólio moderno e responsivo construído com React, TypeScript e Vite.

## ✨ Características

- ⚡ **Vite** - Build tool super rápido
- ⚛️ **React 19** - Biblioteca moderna para UI
- 🔷 **TypeScript** - Tipagem estática
- 🎨 **CSS Moderno** - Variáveis CSS, Grid, Flexbox
- 📱 **Totalmente Responsivo** - Funciona em todos os dispositivos
- 🚀 **GitHub Pages** - Deploy automático
- 🔄 **CI/CD** - Deploy automático via GitHub Actions

## 🛠️ Tecnologias Utilizadas

- React 19
- TypeScript 
- Vite (com SWC)
- CSS3 (variáveis, grid, flexbox)
- GitHub Pages
- GitHub Actions

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ailujailuj/portfolio-v2.git

# Entre na pasta do projeto
cd portfolio-v2

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:5173/portfolio-v2/`

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint

# Deploy para GitHub Pages
npm run deploy
```

## 🌐 Deploy

O projeto é automaticamente deployado no GitHub Pages sempre que há um push na branch `main`.

**URL do site:** https://ailujailuj.github.io/portfolio-v2/

### Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run deploy
```

## 📁 Estrutura do Projeto

```
portfolio-v2/
├── public/           # Arquivos públicos
├── src/
│   ├── assets/       # Imagens, ícones, etc.
│   ├── App.tsx       # Componente principal
│   ├── App.css       # Estilos do App
│   ├── index.css     # Estilos globais
│   └── main.tsx      # Ponto de entrada
├── .github/
│   └── workflows/
│       └── deploy.yml # GitHub Actions
├── vite.config.ts    # Configuração do Vite
└── tsconfig.json     # Configuração do TypeScript
```

## ⚙️ Configuração para GitHub Pages

O projeto já está configurado para GitHub Pages:

1. **Base URL**: Configurada no `vite.config.ts`
2. **GitHub Actions**: Workflow automático em `.github/workflows/deploy.yml`
3. **Build**: Otimizado para produção

### Configurando no seu repositório

1. Vá em `Settings > Pages` no seu repositório
2. Selecione **GitHub Actions** como source
3. O deploy acontecerá automaticamente no próximo push

## 🎨 Personalização

Para personalizar o portfólio:

1. **Cores**: Modifique as variáveis CSS em `src/App.css`
2. **Conteúdo**: Edite os textos em `src/App.tsx`
3. **Seções**: Adicione ou remova seções no componente App
4. **Estilos**: Customize o CSS conforme necessário

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Dê uma estrela se este projeto te ajudou!**
