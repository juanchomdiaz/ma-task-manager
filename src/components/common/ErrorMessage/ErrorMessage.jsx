import { Alert } from "react-bootstrap";

import styles from './ErrorMessage.module.scss';

import PropTypes from 'prop-types';

const ErrorMessage = ({message=''}) => {
    if (message === '' ) message="Ooops! Ha ocurrido un error. Por favor, intenta de nuevo.";

    return ( 
        <Alert variant="danger" className={styles.errorMessage}>{message}</Alert>
     );
}
 
ErrorMessage.propTypes = {
    message: PropTypes.string,
};


export default ErrorMessage;