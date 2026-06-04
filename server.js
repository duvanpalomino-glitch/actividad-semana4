const express = require('express');
const app = express();
const puerto = 3005;

app.use(express.text());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

app.listen(puerto, () => {
  console.log(`Servidor Express funcionando en http://localhost:${puerto}`)
  console.log(`Abre http://localhost:${puerto} en el navegador.`)
})
