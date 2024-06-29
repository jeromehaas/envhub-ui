// IMPORTS
import { NextResponse } from 'next/server';
import prismaClient from '#/prisma/prisma-client';

// GET REQUEST
export async function GET(req) {

	// GET PARAMS
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	// GET ALL SECRETS
	const secret = await prismaClient.secret.findMany({
		where: {
			id: id,
		},
	});

	// RETURN
	return NextResponse.json({ secret });

};

// POST REQUEST
export async function POST(req) {

	// GET BODY
	const { name, value, environment, layer, projectId, createdAt } = await req.json();

	// CREATE SECRET
	const secret = await prismaClient.secret.create({
		data: {
			name,
			value,
			environment,
			layer,
			projectId,
			createdAt,
		},
	});
	
	// RETURN 
	return NextResponse.json({ secret });

};

// PUT REQUEST
export async function PUT(req) {

	// GET PARAMS
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	// GET BODY
	const { name, value } = await req.json();

	// UPDATE SECRET
	const secret = await prismaClient.secret.update({
		where: { id },
		data: { name, value	},
	});

	return NextResponse.json({ secret });

};

// DELETE REQUEST
export async function DELETE(req) {

	// GET PARAMS
	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	// DELETE SECRET
	const secret = await prismaClient.secret.delete({
		where: {
			id,
		},
	});

	// RETURN SECRET
	return NextResponse.json({ secret });

};
