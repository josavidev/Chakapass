import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhraseInput from './components/PhraseInput';
import PasswordCard from './components/PasswordCard';
import AppNotification from './components/AppNotification';

const App = () => {
	const [phrase, setPhrase] = useState('a');
	const [dict, setDict] = useState('');
	const [phrasePass, setPhrasePass] = useState('jkn');
	const [show, setShow] = useState(false);

	return (
		<Container>
			<Row className='mt-5 mb-5'>
				<h1 as={Col} className='text-center display-1'>Chakapass</h1>
			</Row>
			<Row>
				<p as={Col} className='text-center h5'>Create strong passwords writing a phrase that you would remember and transform it in a password
					changing his content with other symbols. To start, write your favorite phrase, select and dictionary
					for convert your phrase in a password!
				</p>
			</Row>
			<Row className='mt-5 mb-5'>
				<Col>
					<PhraseInput setPhrase={setPhrase} setDict={setDict} />
				</Col>
			</Row>
			<Row>
				<Col>
					{phrase.length > 0 && <PasswordCard phrasePass={phrasePass} setShow={setShow} />}
				</Col>
			</Row>
			<Row>
				<Col>
					<AppNotification content='Copied to clipboard!' show={show} setShow={setShow} />
				</Col>
			</Row>
		</Container>
	);
};

export default App;