![Node.js](https://img.shields.io/badge/Node.js-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![React](https://img.shields.io/badge/React-blue?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-purple?logo=bootstrap)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)

# Proyecto: API REST de Usuarios con Frontend en React

Este proyecto consiste en una pequeña **API REST** desarrollada con **Node.js y Express** y un **frontend en React** que muestra los datos obtenidos desde la API de forma visual usando **Bootstrap** y **React Icons**.

## 🗂 Estructura del proyecto

```
viamed/
├─ backend/
│ ├─ index.js
│ └─ usuarios.json
├─ frontend/
│ ├─ package.json
│ ├─ src/
│ │ ├─ App.jsx
│ │ ├─ main.jsx
│ │ └─ index.css
│ └─ vite.config.js
```

## 📸 Visualización de la Aplicación

A continuación se muestran algunas capturas de pantalla de la aplicación:

### 1. **Tabla de Usuarios**

Este es el **componente de tabla** que muestra la lista de usuarios obtenida desde la API REST. Puedes ver el nombre, la edad, el email y un ícono para ver los detalles del usuario.

![Tabla de Usuarios](frontend/viamed-app/public/images/userTable.png)

### 2. **Modal de Detalles de Usuario**

Este es el **modal** que se abre al hacer clic en el ícono de detalles de un usuario. En el modal puedes ver más información, como el teléfono, la ciudad, el email y la edad del usuario seleccionado.

![Modal de Usuario](frontend/viamed-app/public/images/userModal.png)

## ⚙️ Backend

### 📌 Tecnologías

- Node.js
- Express
- CORS

### 🔹 Instalación de dependencias

```bash
cd backend
npm install
```

### 🔹 Levantar el servidor

```bash
node index.js
```

El backend quedará escuchando en:

http://localhost:3000


| Método | Ruta          | Descripción                                             |
| ------ | ------------- | ------------------------------------------------------- |
| GET    | /usuarios     | Devuelve la lista completa de usuarios                  |
| GET    | /usuarios/:id | Devuelve los datos de un usuario específico por su `id` |

Los datos de los usuarios están almacenados en usuarios.json.

## ⚙️ Frontend

### 📌 Tecnologías

React
Vite
Bootstrap
React Icons

### 🔹 Instalación de dependencias

```bash
cd frontend/viamed-app
npm install
```

### 🔹 Levantar el frontend

```bash
npm run dev
```

Por defecto se abrirá en:

http://localhost:5173
