import prismaClient from '#/prisma/prisma-client';

const getSecrets = async (id) => {

	const secrets = await prismaClient.secret.findMany({
		where: {
			projectId: id,
		},
		orderBy: {
			createdAt: 'asc',
		},
	});
	return secrets;
};

export default getSecrets;
