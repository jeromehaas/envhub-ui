import prismaClient from "#/prisma/prisma-client";

const updateSecret = async (id, name, value, projectId) => {

	const secret = await prismaClient.secret.update({
		where: {
			id: id
		},
		data: {
			name: name, 
			value: value,
		},
	});

	return secret;

};

export default updateSecret;