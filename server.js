// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors()); // Habilita CORS para permitir solicitudes desde tu frontend
app.use(express.json()); // Permite el parsing de JSON en las solicitudes

// Conectar a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'r1234',
  database: 'pruebaConexion'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos.');
});

// Endpoint para registrar usuarios
app.post('/api/registrar-usuario', (req, res) => {
  const { email, contrasena, nombres } = req.body;
  const query = `CALL registrarUsuario(?, ?, ?)`;

  connection.query(query, [email, contrasena, nombres], (err, results) => {
    if (err) {
      console.error('Error ejecutando la consulta:', err);
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
