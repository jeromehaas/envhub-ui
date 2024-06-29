// IMPORTS
import getProjects from '#/prisma/queries/projects/get-projects';
import getProject from '#/prisma/queries/projects/get-project';
import deleteProject from '#/prisma/queries/projects/delete-project';
import getSecrets from '#/prisma/queries/secrets/get-secrets';
import createSecret from '#/prisma/queries/secrets/create-secret';
import updateSecret from './secrets/update-secret';

// EXPORTS
export {
	getProjects,
	getProject,
	deleteProject,
	getSecrets,
	createSecret,
	updateSecret,
};
