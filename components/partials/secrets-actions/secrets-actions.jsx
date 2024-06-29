'use client';

// IMPORTS
import './secrets-actions.scss';
import { MoreVertical } from 'react-feather';
import { useContext } from 'react';
import { SecretsContext } from '#/app/contexts/secrets-context';
import { MenuContext } from '#/app/contexts/menu-context';

// SECRETS-ACTION
const SecretsActions = () => {

	// SETUP CONTEXT
	const { environment, layer, switchEnvironment, switchLayer } = useContext(SecretsContext);
	const { setIsOpen } = useContext(MenuContext);

	// RENDER
	return (
		<div className="secrets-actions">
			<div className="secrets-actions__item" onClick={ switchLayer }>
				{layer.label}
			</div>
			<div className="secrets-actions__item" onClick={ switchEnvironment }>
				{environment.label}
			</div>
			<div className="secrets-actions__item" onClick={ () => setIsOpen(true) }>
				<MoreVertical className="item__icon" />
			</div>
		</div>
	);
};

// EXPORTS
export default SecretsActions;
