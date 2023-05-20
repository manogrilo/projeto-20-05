const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'recursos')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contatos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.get('/produtos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'produto.html'));
});

app.get('/catalogos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'catalogo.html'));
});

app.get('/abertura/:tipo', (req, res) => {
  const tipo = req.params.tipo;
  let arquivo;
  switch (tipo) {
    case 'tipoDocx':
      arquivo = 'arquivo.docx';
      break;
    case 'tipoJpeg':
      arquivo = 'arquivo.jpeg';
      break;
    case 'tipoMp3':
      arquivo = 'arquivo.mp3';
      break;
    case 'tipoMp4':
      arquivo = 'arquivo.mp4';
      break;
    case 'tipoJson':
      arquivo = 'arquivo.json';
      break;
    case 'tipoMd':
      arquivo = 'arquivo.md';
      break;
    default:
      return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  }
  res.sendFile(path.join(__dirname, 'recursos', arquivo));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});