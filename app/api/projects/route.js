// IMPORTS
import { NextResponse } from 'next/server';
import prismaClient from '#/prisma/prisma-client';

// GET REQUEST
export async function GET(req) {

	const { searchParams } = new URL(req.url);
	const id = searchParams.get('id');

	// GET ALL PROJECTS
	const projects = await prismaClient.secret.findMany({
		where: {
			id: id,
		},
	});

	return NextResponse.json({ projects });

};

// POST REQUEST
export async function POST(req) {

	// GET BODY
	const { name } = await req.json();

	// CREATE PROJECT
	const project = await prismaClient.project.create({
		data: {
			name: name,
		},
	});

	return NextResponse.json({ project });

}

// DELETE REQUEST
export async function DELETE(req) {

	// GET PARAMS
	const { searchParams } = new URL(req.url);
	const name = searchParams.get('name');

	// GET RELATED PROJECT
	const project = await prismaClient.project.findFirst({
		where: {
			name: name,
		},
	});

	// DELETE ALL SECRETS FROM THIS PROJECT
	await prismaClient.secret.deleteMany({
		where: {
			projectId: project.id,
		},
	});

	// DELETE THE RELATED PROJECT
	await prismaClient.project.delete({
		where: {
			id: project.id,
		},
	});

	// RETURN DELETED PROJECT
	return NextResponse.json({ project });

};
