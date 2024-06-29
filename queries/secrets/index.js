// IMPORTS
import { getSession } from 'next-auth/react';

// CREATE SECRET
const createSecretQuery = async ({ values }) => {

	// GET SESSION
	const session = await getSession();

	// SEND REQUEST
	const response = await fetch('http://localhost:4000/secrets', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Authorization': session.token },
		body: JSON.stringify(values),
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data;

};

// DELETE SECRET
const deleteSecretQuery = async (id) => {

	// GET SESSION
	const session = await getSession();

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/secrets/${ id }`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', 'Authorization': session.token },
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data;

};

// UPDATE SECRET
const updateSecretQuery = async ({ id, values }) => {

	// GET SESSION
	const session = await getSession();

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/secrets/${ id }`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'Authorization': session.token },
		body: JSON.stringify(values),
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data;

};

	// GET SECRETS
const getSecretsQuery = async () => {

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/secrets`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data.secrets;

};

// EXPORTS
export {
	getSecretsQuery,
	deleteSecretQuery,
	updateSecretQuery,
	createSecretQuery,
};
