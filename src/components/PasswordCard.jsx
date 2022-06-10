import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const PasswordCard = ({ phrasePass, setShow }) => {
	const handleCopyClipboard = () => {
		const copied = window.navigator.clipboard.writeText(phrasePass);
		copied.then(() => setShow(true));
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>The phrase password would be:</Card.Title>
				<InputGroup>
					<Form.Control type='text' readOnly value={phrasePass} />
					<Button onClick={handleCopyClipboard}>
						<FontAwesomeIcon icon={faCopy} />
					</Button>
				</InputGroup>
			</Card.Body>
		</Card>
	);
};

PasswordCard.propTypes = {
	phrasePass: PropTypes.string.isRequired,
	setShow: PropTypes.func.isRequired
};

export default PasswordCard;