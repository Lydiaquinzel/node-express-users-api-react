const express = require("express");
const cors = require("cors");
const usuarios = require("./data/users.json");

const app = express();
app.use(cors());

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = usuarios.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Servidor backend en http://localhost:3000");
});
