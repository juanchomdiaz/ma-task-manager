import { Table } from 'react-bootstrap';

import PropTypes from 'prop-types';

const UsersTable = ({ users }) => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Teléfono</th>
          <th>Correo Electrónico</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.names + ' ' + user.surnames}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.state ? 'Online' : 'Offline'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersTable;
