'use client';

// IMPORTS
import './sidebar.scss';
import Link from 'next/link';
import { getProjectsQuery } from '#/queries/projects';
import { useQuery } from 'react-query';

// COMPONENT
const Sidebar = ({ className, searchParams }) => {

	// GET PROJECTS
	const projects = useQuery({
		initialData: [],
		queryKey: ['projects'],
		queryFn: getProjectsQuery,
		onSuccess: () => console.log('nice'),
	});

	// RENDER
	return (
		<div className={ `${ className } sidebar` }>
			<img className="sidebar__logo" src="/logos/logo-envhub.svg" alt="ENVHUB" />
			<div className="sidebar__projects-list projects-list">
				{ projects && projects.data.map((item) => (
					<Link className={`projects-list__link`} key={ item.id } href={ `/dashboard/${ item.id }` } data-id={ item.id }>{ item.name }</Link>
				))}
			</div>
		</div>
	);

};

// EXPORTS
export default Sidebar;
