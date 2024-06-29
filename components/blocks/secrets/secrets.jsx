'use client';

// IMPORTS
import './secrets.scss';
import { useState } from 'react';
import { Trash, Eye, EyeOff } from 'react-feather';
import { getSecretsQuery } from '#/queries/secrets';
import { useQuery } from 'react-query';

// COMPONENT
const Secrets = ({ className }) => {

	// GET SECRETS
	const secrets = useQuery({
		initialData: [],
		queryKey: ['secrets'],
		queryFn: getSecretsQuery,
	});

	// SETUP STATE
	const [ visibleItems ] = useState([]);

	// RENDER
	return (
		<div className={ `${ className } secrets` }>
			<div className="secrets__container">
			 <div className="secrets__actions">
				</div> 
				<div className="secrets__head head">
					<p className="head__item">Name</p>
					<p className="head__item">Value</p>
				</div>
				<div className="secrets__list list">
					{ secrets.data.map((secret) => (
						<div className="list__item item" key={ secret.id } data-key={ secret.id }>
							<input className="item__name" type="text" value={ secret.name } readOnly />
						 	{ visibleItems.includes(secret.id)
						 		? <input className="item__value" type="text" value={ secret.value } readOnly />
						 		: <input className="item__value" type="password" value={ secret.value } readOnly />
							}
						 	{ visibleItems.includes(secret.id)
						 		? <button className="item__button button" value="" type="button" onClick={ () => toggleSecret(secret.id) }><EyeOff className="button__icon" /></button>
						 		: <button className="item__button button" value="" type="button" onClick={ () => toggleSecret(secret.id) }><Eye className="button__icon" /></button>
							} 
							<button className="item__button button" value="" type="button" onClick={ () => handleDelete(secret.id) }><Trash className="button__icon" /></button> 
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

// EXPORTS
export default Secrets;
