import { useState } from 'react';
import Container from 'react-bootstrap/Container';
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
			<h1>Chakapass</h1>
			<p>Create strong passwords writing a phrase that you would remember and transform it in a password
				changing his content with other symbols. To start write your favorite phrase, select and dictionary
				for convert your phrase in a password!
			</p>
			<PhraseInput setPhrase={setPhrase} setDict={setDict} />
			<br />
			{phrase.length > 0 && <PasswordCard phrasePass={phrasePass} setShow={setShow} />}
			<AppNotification content='Copied to clipboard!' show={show} setShow={setShow} />
		</Container>
	);
};

export default App;