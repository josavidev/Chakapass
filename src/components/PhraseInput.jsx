import { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const PhraseInput = ({ setPhrase, setDict }) => {
	const phraseRef = useRef();
	const dictRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		setPhrase(phraseRef.current.value);
		setDict(dictRef.current.value);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col>
					<FloatingLabel
						label='Write your phrase here'
					>
						<Form.Control
							type='text'
							placeholder='phrase'
							ref={phraseRef} />
					</FloatingLabel>
				</Col>
				<Col>
					<Form.Group as={Row}>
						<Form.Label htmlFor='dict' column sm='2'>Dictionary:</Form.Label>
						<Col sm='10'>
							<Form.Select id='dict' ref={dictRef}>
								<option value="simple">Simple</option>
								<option value="chaka">Chaka</option>
							</Form.Select>
						</Col>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Button type='submit'>Transform it!</Button>
			</Row>
		</Form>
	);
};

PhraseInput.propTypes = {
	setPhrase: PropTypes.func.isRequired,
	setDict: PropTypes.func.isRequired
};

export default PhraseInput;