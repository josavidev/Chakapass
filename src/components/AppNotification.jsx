import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

const AppNotification = ({ content, show, setShow }) => {
	return (
		<Container>
			<ToastContainer position='bottom-end'>
				<Toast
					delay={3000}
					autohide
					show={show}
					onClose={() => setShow(false)}
				>
					<Toast.Body>
						<p>{content}</p>
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</Container>
	);
};

AppNotification.propTypes = {
	content: PropTypes.string.isRequired,
	show: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired
};

export default AppNotification;