import PropTypes from 'prop-types';

const UsersMain = ({users}) => {
    return (
        <UsersTable />
    );
}

UsersMain.propTypes = {
    users: PropTypes.object.isRequired,
};
 
export default UsersMain;