'use client';

// IMPORTS
import './secrets-clipboard.scss';

// SECRETS-CLIPBOARD
const SecretsClipboard = () => {

	// HANDLE-CLICK
	const handleClick = () => {
		navigator.clipboard.writeText('clipboard-value');
	};

	// RENDER
	return (
		<div className="secrets-clipboard" onClick={ handleClick }>
			<p className="secrets-clipboard__label">Copy to clipboard</p>
		</div>
	);

};

// EXPORTS
export default SecretsClipboard;
