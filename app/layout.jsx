'use client';

// IMPORTS
import '#/app/styles/main.scss';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// QUERY-CLIENT
const queryClient = new QueryClient();

// ROOT-LAYOUT
const RootLayout = ({ children, session }) => {

	// RENDER
	return (
		<html lang="en">
			<body>
				<QueryClientProvider client={ queryClient }>
					<SessionProvider session={ session }>
						{children}
						<ReactQueryDevtools initialIsOpen={ false } />
					</SessionProvider>
				</QueryClientProvider>
			</body>
		</html>
	);

};

// EXPORTS
export default RootLayout;
