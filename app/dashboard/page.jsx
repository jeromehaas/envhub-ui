// IMPORTS
import Secrets from '#/components/blocks/secrets/secrets';
import Sidebar from '#/components/blocks/sidebar/sidebar';
import Menu from '#/components/blocks/menu/menu.jsx';
import Dashboard from '#/components/layouts/dashboard/dashboard';

// PAGE
const Page = async () => {
	
	// RENDER
	return (
		<Dashboard className="dashboard"> 
			<Sidebar className="dashboard__sidebar" />
			<Secrets className="dashboard__secrets" secrets={ null } />
			<Menu className="dashboard__menu" />
		</Dashboard>
	);

};

// EXPORTS
export default Page;
