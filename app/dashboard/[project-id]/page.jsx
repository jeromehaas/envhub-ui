// IMPORTS
import Secrets from '#/components/blocks/secrets/secrets';
import Sidebar from '#/components/blocks/sidebar/sidebar';
import Menu from '#/components/blocks/menu/menu.jsx';
import Dashboard from '#/components/layouts/dashboard/dashboard';
import { getSecretsQuery } from '#/queries/secrets';

// PAGE
const Page = async ({ params }) => {

	// GET SLUG
	const projectId = params['project-id'];

	// GET SECRETS AND PROJECTS
	const secrets = await getSecretsQuery(projectId);

	// RENDER
	return (
		<Dashboard className="dashboard"> 
			<Sidebar className="dashboard__sidebar"  />
			<Secrets className="dashboard__secrets" projectId={ projectId } secrets={ secrets }   />
			<Menu className="dashboard__menu" />
		</Dashboard>
	);

};

// EXPORTS
export default Page;