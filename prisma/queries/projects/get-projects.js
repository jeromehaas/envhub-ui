// IMPORTS
import prismaClient from '#/prisma/prisma-client';

// GET PROJECTS
const getProjects = async () => {

	// QUERY
	const projects = await prismaClient.project.findMany();

	// RETURN PROJECTS
	return projects;

};

// EXPORTS
export default getProjects;
