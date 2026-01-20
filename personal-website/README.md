# Personal Website - Astro

Portfolio pessoal construído com Astro.js para facilitar a adição e gerenciamento de projetos.

## 🚀 Como usar

### Instalação

```sh
cd personal-website
npm install
```

### Desenvolvimento

```sh
npm run dev
```

O site estará disponível em `http://localhost:4321`

### Build para produção

```sh
npm run build
```

### Preview do build

```sh
npm run preview
```

## 📁 Estrutura do Projeto

```
personal-website/
├── public/              # Arquivos estáticos (imagens, CSS, JS)
│   ├── projects/       # Imagens dos projetos
│   ├── style.css       # Estilos globais
│   └── scripts.js      # Scripts JavaScript
├── src/
│   ├── components/     # Componentes Astro reutilizáveis
│   │   └── LiteVimeo.astro  # Componente para vídeos Vimeo com lazy loading
│   ├── data/
│   │   └── projects.json    # Dados de todos os projetos
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base do site
│   └── pages/
│       ├── index.astro      # Página inicial
│       ├── about.astro      # Página sobre
│       └── [slug].astro     # Página dinâmica de projetos
└── package.json
```

## ✨ Adicionar um novo projeto

Para adicionar um novo projeto, edite o arquivo `src/data/projects.json`:

1. Adicione um novo objeto ao array com a seguinte estrutura:

```json
{
  "slug": "nome-do-projeto",
  "title": "Título do Projeto",
  "year": "2025",
  "category": "Visual Identity, Digital",
  "coverImage": "/projects/nome-do-projeto/imagem-capa.jpg",
  "description": [
    "Primeiro parágrafo da descrição.",
    "Segundo parágrafo da descrição."
  ],
  "collaboration": [
    {
      "name": "Nome do Colaborador",
      "url": "https://link.com",
      "role": "Função (opcional)"
    }
  ],
  "media": [
    {
      "type": "image",
      "url": "/projects/nome-do-projeto/imagem1.jpg"
    },
    {
      "type": "vimeo",
      "videoId": "123456789"
    }
  ]
}
```

2. Adicione as imagens do projeto na pasta `public/projects/nome-do-projeto/`

3. O projeto aparecerá automaticamente na página inicial e terá sua própria página em `/nome-do-projeto`

## 🎥 Tipos de Mídia

### Imagem
```json
{
  "type": "image",
  "url": "/projects/nome-do-projeto/imagem.jpg"
}
```

### Vídeo Vimeo
```json
{
  "type": "vimeo",
  "videoId": "123456789"
}
```

O componente `LiteVimeo` automaticamente:
- Carrega apenas quando o vídeo está próximo da viewport (lazy loading)
- Mostra um thumbnail antes de carregar
- Suporta autoplay em background

## 🔧 Funcionalidades

- ✅ Lazy loading de vídeos Vimeo
- ✅ Navegação entre projetos (Previous/Next)
- ✅ Cursor customizado
- ✅ Animações de emoji na página inicial
- ✅ SEO otimizado com meta tags
- ✅ Preconnect para Vimeo (performance)

## 📝 Notas

- Os projetos são ordenados pela ordem no array `projects.json`
- A navegação entre projetos funciona automaticamente
- Os vídeos do Vimeo só carregam quando estão próximos da viewport (300px antes)
- O site está configurado para deploy em `https://www.gerberworks.xyz`
