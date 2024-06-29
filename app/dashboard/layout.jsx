// IMPORTS
import { MenuProvider } from '#/app/contexts/menu-context';
import { SecretsProvider } from '#/app/contexts/secrets-context';

// LAYOUT
const Layout = async ({ children }) => {

	// RENDER
	return (
		<MenuProvider>
			<SecretsProvider>
					{ children }
			</SecretsProvider>
		</MenuProvider>
	);
};

// EXPORTS
export default Layout;
