// IMPORTS
import prismaClient from '#/prisma/prisma-client';

// GET PROJECT
const getProject = async (id) => {

	// QUERY
	const project = await prismaClient.project.findUnique({
		where: {
			id: id,
		},
	});

	// RETURN PROJECT
	return project;

};

// EXPORTS
export default getProject;
