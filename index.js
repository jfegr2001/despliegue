const http = require('http');

const server = http.createServer((req, res) => {
  res.end('¡Hola desde el servidor remoto!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
