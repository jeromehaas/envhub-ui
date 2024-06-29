// IMPORTS
import { PrismaClient } from '@prisma/client';

// DEFINE PRISMA-CLIENT
let prismaClient;

// IF IN PRODUCTION-MODE
if (process.env.NODE_ENV === 'production') {

	// CREATE NEW PRISMA-CLIENT
	prismaClient = new PrismaClient();

} 

// IF NOT IN PRODUCTION-MODE
else {

	// IF PRISMA-CLIENT EXISTS
	if (!global.prismaClient) {

		// CREATE NEW PRISMA-CLIENT
		global.prismaClient = new PrismaClient();

	}

	// GET EXISTING PRISMA-CLIENT
	prismaClient = global.prismaClient;

}

// EXPOETS
export default prismaClient;
