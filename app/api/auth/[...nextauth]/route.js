// IMPORTS
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

// HANDLER
const handler = NextAuth({

	// DEFINE PROVIDERS
	providers: [

		// DEFINE PROVIDER
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},

			// AUTHORIZE
			async authorize(credentials) {

				// CANCEL IF NO PIN IS SENT
				if (!credentials?.pin) {
					return null;
				};

				// CANCEL IF NO USERNAME IS SENT
				if (!credentials?.username) {
					return null;
				};

				// GET USER WITH THIS PIN
				const user = await axios('http://localhost:4000/auth', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					data: {
						username: credentials.username,
						pin: credentials.pin,
					},
				});

				// CHECK IF USER IS FOUND
				if (!user) {
					return null;
				};

				// IF USER FOUND CREATE JWT AND RETURN IT WITH USER INFORMATIONS
				if (user) {

					// RETURN USER AND JWT
					return user.data.data;

				};

			},

		}),

	],

	pages: {
		signIn: '/login',
	},

	// DEFINE STRATEGY
	session: {
		strategy: 'jwt',
	},

	// DEFINE CALLBACKS
	callbacks: {

		// ADD USER DATA FROM TOKEN
		async jwt({ token, user }) {

			// APPEND PROPERTIES TO TOKEN
			if (user) {
				token.jwt = user.token;
				token.user = {
					id: user.id,
					username: user.username,
				};
			};

			// RETURN TOKEN
			return token;
		},

		// TAKE USER DATA FROM TOKEN AND ADD TO SESSION
		async session({ session, token }) {
			session.token = token.jwt;
			session.user = token.user;
			return session;
		},

	},
});

// EXPORTS
export { handler as GET, handler as POST };
