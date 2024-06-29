'use client';

// IMPORTS
import { SessionProvider } from 'next-auth/react';

// SESSION-CONTEXt
const SessionContext = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

// EXPORTS
export default SessionContext;
