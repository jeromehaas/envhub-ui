// IMPORTS
import prismaClient from '#/prisma/prisma-client';

// DELETE PROJECT
const deleteProject = async (name) => {

	// QUREY
	const project = await prismaClient.project.delete({
		where: {
			name: name,
		},
	});

	// RETURN PROJECT
	return project;

};

// EXPORTS
export default deleteProject;
