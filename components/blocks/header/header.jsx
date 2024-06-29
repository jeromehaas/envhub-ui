// IMPORTS
import './header.scss';

// HEADER
const Header = ({ className }) => {

	// RENDER
	return (
		<header className={ `${className} header` }>
			<img className="header__logo" src="/logos/logo-envhub.svg" alt="ENVHUB" />
		</header>
	);

};

// EXPORTS
export default Header;
