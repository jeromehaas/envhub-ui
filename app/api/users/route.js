// IMPORTS
import { NextResponse } from 'next/server';

// GET REQUEST
export async function GET(req) {
	return NextResponse.json({ hello: 'hello' });
};
