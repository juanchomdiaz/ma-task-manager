import PropTypes from 'prop-types';
import UsersTable from '../UsersTable';

const UsersMain = ({users}) => {
    let orderedUsers = users.sort((a, b) => a.names.localeCompare(b.names));
 
    return (
        <UsersTable users={orderedUsers} />
    );
}

UsersMain.propTypes = {
    users: PropTypes.array.isRequired,
};
 
export default UsersMain;