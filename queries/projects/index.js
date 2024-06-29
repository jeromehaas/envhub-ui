// IMPORTS
import { getSession } from 'next-auth/react';

// DELETE PROJECT
const deleteProjectQuery = async ({ id }) => {

	// CHECK FOR ID
	if (!id) return null;

	// GET SESSION
	const session = await getSession();

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/projects/${ id }`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', 'Authorization': session.token },
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data;

};

// CREATE PROJECT
const createProjectQuery = async ({ values }) => {

	// GET VALUES
	if (!values.name) return null;

	// GET SESSION
	const session = await getSession();

	// SEND REQUEST
	const response = await fetch('http://localhost:4000/projects', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Authorization': session.token },
		body: JSON.stringify(values),
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data;

};

// GET PROJECT-QUERY
const getProjectQuery = async (projectId) => {

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/projects/${ projectId }`, {
	method: 'GET',
	headers: { 'Content-Type': 'application/json' },
});

// PARSE JSON
const { data } = await response.json();

// RETURN DATA
return data.project;

};

// GET PROJECTS
const getProjectsQuery = async () => {

	// SEND REQUEST
	const response = await fetch(`http://localhost:4000/projects/`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});

	// PARSE JSON
	const { data } = await response.json();

	// RETURN DATA
	return data.projects;

};

// EXPORTS
export {
	getProjectQuery,
	getProjectsQuery,
	createProjectQuery,
	deleteProjectQuery,
};
