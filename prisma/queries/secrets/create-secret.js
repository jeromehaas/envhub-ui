import prismaClient from "#/prisma/prisma-client";

const createSecret = async (name, value, environment, layer, projectId, createdAt) => {
    const secret = await prismaClient.secret.create({
        name: name,
        value: value,
        environment: environment,
        layer: layer,
        projectId: projectId,
        createdAt: createdAt,
    });
    return secret;
};

export default createSecret;
