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
			<Row className='d-flex align-items-center'>
				<Col sm={8}>
					<FloatingLabel label='Write your phrase here'>
						<Form.Control
							type='text'
							placeholder='phrase'
							ref={phraseRef} />
					</FloatingLabel>
				</Col>
				<Col sm={4}>
					<Form.Group as={Row}>
						<Form.Label htmlFor='dict' column sm={4}>Dictionary:</Form.Label>
						<Col sm={8}>
							<Form.Select id='dict' ref={dictRef}>
								<option value="simple">Simple</option>
								<option value="chaka">Chaka</option>
							</Form.Select>
						</Col>
					</Form.Group>
				</Col>
			</Row>
			<Row className='w-50 mt-5 mx-auto'>
				<Button size='lg' type='submit'>Transform it!</Button>
			</Row>
		</Form>
	);
};

PhraseInput.propTypes = {
	setPhrase: PropTypes.func.isRequired,
	setDict: PropTypes.func.isRequired
};

export default PhraseInput;