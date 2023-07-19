import React from 'react';
import { Button } from 'react-bootstrap';

const ItemUsuario = () => {

  return (
    <tr>
      <td>Juan Perez</td>
      <td>juanperez@gmail.com</td>
      <td className="d-flex justify-content-evenly">
        <Button variant="warning" className="m-1">
          Editar
        </Button>
        <Button variant="danger" className="m-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
