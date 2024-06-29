// IMPORTS
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

// GET RESPONSE METHODS
const { redirect } = NextResponse;

// MIDDLEWARE
const middleware = withAuth(async (req) => {

	// GET PATHNAME
	const { pathname } = req.nextUrl;

	// GET TOKEN
	const token = await getToken({ req });

	// DEFINE SENSITIVE ROUTES
	const sensitiveRoutes = [ '/dashboard' ];

	// CHECK IF USER IS ACCESSING SENSITIVE ROUTE
	const isAccessingSensitiveRoute = sensitiveRoutes.some((route) => pathname.startsWith(route));

	// IF PATH IS '/LOGIN' AND GOT TOKEN REDIRECT TO DASHBOARD
	if (pathname.startsWith('/login') && token) {
		return redirect(new URL('/dashboard', req.url));
	};

	// IF USER IS ACCESING SENSITIVE ROUTE BUT GOT NO TOKEN REDIRECT TO '/LOGIN'
	if (isAccessingSensitiveRoute && !token) {
		return redirect(new URL('/login', req.url));
	};

}, {

	// CALLBACKS
	callbacks: {
		async authorized() {
			return true;
		},
	},

});

// CONFIG
const config = {
	matchter: [ '/', '/login', '/dashboard/:path*' ],
};

// EXPORTS
export {
	middleware,
	config,
};
