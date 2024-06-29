'use client';

// IMPORTS
import './sidebar-link.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// SIDEBAR-LINK
const SidebarLink = ({ className, project }) => {

	// GET PATHNAME
	const pathname = usePathname();

	// RENDER
	return (
		<Link className={ `${ className } sidebar-link ${ pathname === `/dashboard/${ project.id }` ? 'sidebar-link--active' : '' }` } href={ `/dashboard/${ project.id }` }>{ project.name }</Link>
	);

};

// EXPORTS
export default SidebarLink;
