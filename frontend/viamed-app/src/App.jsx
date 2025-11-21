import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Modal, Button, Table } from "react-bootstrap";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [detalle, setDetalle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error("Error al cargar usuarios:", err));
  }, []);

  const seeUserDetail = (usuario) => {
    setDetalle(usuario);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Usuarios</h1>

      {/* Tabla de usuarios */}
      <Table striped bordered hover responsive>
        <thead>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr key={u.id}>
              <td>{u.nombre}</td>
              <td>{u.edad}</td>
              <td>{u.email}</td>
              <td className="text-center">
                <span
                  className="eyeButton"
                  onClick={() => seeUserDetail(u)}
                  tabIndex={0}  
                  role="button"
                >
                  <FaEye className="eyeIcon" />
                </span>
            </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal detalles usuarios */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles del usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {detalle && (
            <div>
              <p><strong>Nombre:</strong> {detalle.nombre}</p>
              <p><strong>Email:</strong> {detalle.email}</p>
              <p><strong>Teléfono:</strong> {detalle.telefono}</p>
              <p><strong>Ciudad:</strong> {detalle.ciudad}</p>
              <p><strong>Edad:</strong> {detalle.edad}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
