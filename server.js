const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Posts do blog (fácil de editar aqui!)
const posts = [
  {
    id: 1,
    title: "🎉 Bem-vindo ao Meu Blog!",
    content: "Seu blog está no ar! Feito com Node.js + EJS + Railway. Totalmente grátis e deploy automático do GitHub. Edite os posts aqui no `server.js` e faça push!",
    date: "2026-02-16",
    author: "Você",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "🚀 Como criei este blog em 5 minutos",
    content: "1. Criei repo no GitHub\n2. Copiei códigos\n3. Conectei Railway\n4. 🎊 Publicado!\n\nRailway detecta automaticamente e faz deploy grátis.",
    date: "2026-02-16",
    author: "Você",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "✨ Próximos passos",
    content: "Adicionar:\n• Banco PostgreSQL (grátis no Railway)\n• Formulário de contato\n• Admin para posts\n• SEO otimizado\n\nFica ainda mais fácil!",
    date: "2026-02-16",
    author: "Você",
    image: "https://images.unsplash.com/photo-1516321310764-9f7f68c7d7d8?w=400&h=250&fit=crop"
  }
];

// Rotas
app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render('post', { post });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// 404
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(port, () => {
  console.log(`🌐 Blog online: http://localhost:${port}`);
});
