'use client';

// IMPORTS
import { createContext, useState, useMemo } from 'react';

// CREATE CONTEXT
const MenuContext = createContext();

// CREATE PROVIDER
const MenuProvider = ({ children }) => {

	// DEFINE STATE
	const [ isOpen, setIsOpen ] = useState(false);
	const [ activeOption, setActiveOption ] = useState('delete-project');
	const [ isDropdownOpen, setIsDropdownOpen ] = useState(false);
	const [ input, setInput ] = useState('');

	// MEMOIZE VALUES
	const value = useMemo(() => ({
		isOpen,
		setIsOpen,
		activeOption,
		setActiveOption,
		isDropdownOpen,
		setIsDropdownOpen,
		input,
		setInput,
	}), [ isOpen, activeOption, isDropdownOpen, input ]);

	// RENDER
	return (
		<MenuContext.Provider value={ value }>
			{ children }
		</MenuContext.Provider>
	);

};

// EXPORTS
export { MenuContext, MenuProvider };
