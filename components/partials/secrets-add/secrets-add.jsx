'use client';

// IMPORTS
import './secrets-add.scss';
import moment from 'moment';
import axios from 'axios';
import { Plus } from 'react-feather';
import { useRef, useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { SecretsContext } from '#/app/contexts/secrets-context';

// SECRETS-ADD
const SecretsAdd = ({ project }) => {

	// SETUP REFS
	const secretsAddRef = useRef();

	// BRING IN CONTEXT
	const { environment, layer } = useContext(SecretsContext);

	// SETUP STATE
	const [ name, setName ] = useState('');
	const [ value, setValue ] = useState('');
	const [ error, setError ] = useState(null);

	// BRING IN ROUTER
	const router = useRouter();

	// HANDLE ANIMATIONS
	useEffect(() => {
		if (error) {
			secretsAddRef.current?.classList.add('secrets-add--error');
		} else {
			secretsAddRef.current?.classList.remove('secrets-add--error');
		}
	}, [ error ]);

	// HANDLE SUBMIT
	const handleSubmit = async () => {

		// VALIDATE
		if (name.includes(' ') || name === '') {
			return setError(true);
		};

		// CREATE ENTRY
		await axios({
			url: '/api/secrets',
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			data: { name, value, environment: environment.id, layer: layer.id, projectId: project.id, createdAt: moment().format('YYYY-MM-DD/HH:mm:ss'),
			},
		});

		// UPDATE STATE
		setName('');
		setValue('');
		setError(false);

		// REFRESH PAGE
		router.refresh();

	};

	// RENDER
	return (
		<div className="secrets-add" ref={ secretsAddRef }>
			<input className="secrets-add__name" type="text" value={ name } onChange={ (event) => setName(event.target.value) } />
			<input className="secrets-add__value" type="password" value={ value } onChange={ (event) => setValue(event.target.value) } />
			<button className="secrets-add__button button" type="button" value="" onClick={ () => handleSubmit() }><Plus className="button__icon" /></button>
		</div>
	);

};

// EXPORTS
export default SecretsAdd;
