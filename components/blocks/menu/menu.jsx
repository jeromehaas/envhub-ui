'use client';

// IMPORTS
import './menu.scss';
import { useRef, useEffect, useContext } from 'react';
import { CornerDownLeft, ChevronDown } from 'react-feather';
import { MenuContext } from '#/app/contexts/menu-context';
import { SecretsContext } from '#/app/contexts/secrets-context';

// MENU
const Menu = () => {

	// SETUP REFS
	const menuRef = useRef(null);

	// SETUP CONTEXT
	const { isOpen, activeOption, setActiveOption, isDropdownOpen, setIsDropdownOpen, input, setInput, setIsOpen } = useContext(MenuContext);
	const { projects, createProject, deleteProject } = useContext(SecretsContext);

	// HANDLE INPUT
	const handleInput = (value) => {
		setInput(value);
		setIsDropdownOpen(false);
	};

	// HANDLE ESCAPE
	const handleEscape = (event) => {
		if (event.keyCode === 27 && isOpen === true) {
			setIsOpen(false);
		};
	};

	// HANDLE CLICK
	const handleClick = () => {
		if (setIsDropdownOpen(!isDropdownOpen));
	};

	// HANDLE CLOSE
	const handleClose = () => {
		setIsOpen(false);
		setInput('');
	};

	// HANDLE CHANGE
	const handleChange = (event) => {
		setInput(event.target.value);
	};

	// HANDLE CREATE
	const handleCreate = async (name) => {
		createProject({ values: { name: name } });
		setIsOpen(false);
		setInput('');
	};

	// HANDLE DELETE
	const handleDelete = async (id) => {
		deleteProject({ id });
		setIsOpen(false);
		setInput('');
	};

	// TOGGLE OPTIONS
	useEffect(() => {
		setInput('');
		if (activeOption === 'create-project') {
			menuRef.current.querySelector('.options__item:nth-child(1)')?.classList.add('options__item--active');
			menuRef.current.querySelector('.options__item:nth-child(2)')?.classList.remove('options__item--active');
		};
		if (activeOption === 'delete-project') {
			menuRef.current.querySelector('.options__item:nth-child(1)')?.classList.remove('options__item--active');
			menuRef.current.querySelector('.options__item:nth-child(2)')?.classList.add('options__item--active');
		};
	}, [ activeOption, isOpen ]);

	// CLOSE MENU ON ESCAPE
	useEffect(() => {
		document.addEventListener('keydown', (event) => handleEscape(event));
	});

	// RENDER
	return (
		<div className="menu" ref={ menuRef }>
			{ isOpen && (
				<div className="menu__inner">
					<div className="menu__background" onClick={ handleClose } />
					<div className="menu__container">
						<div className="menu__options options">
							<button className="options__item text" type="button" onClick={ () => setActiveOption('create-project') }>create project</button>
							<button className="options__item text" type="button" onClick={ () => setActiveOption('delete-project') }>delete project</button>
						</div>
						{ activeOption === 'delete-project' ? (
							<div className="menu__option option menu__option--delete-project">
								<div className="option__dropdown dropdown">
									<input className="dropdown__input" type="text" value={ input.name || '' } onClick={ handleClick } readOnly />
									<ChevronDown className="dropdown__icon" onClick={ handleClick } />
									<ul className="dropdown__list list">
										{ isDropdownOpen && projects.map((project) => (
											<li className="list__item" key={ project.id } onClick={ () => handleInput(project) }>{ project.name } </li>
										))}
									</ul>
								</div>
								<div className="option__action action">
									<CornerDownLeft className="action__icon" onClick={ () => handleDelete(input.id) } />
								</div>
							</div>
						) : null}
						{ activeOption === 'create-project' ? (
							<div className="menu__option option menu__option--create-project">
								<div className="option__input-fiel input-field">
									<input className="input-field__input" type="text" value={ input } onClick={ handleClick } onChange={ handleChange } />
								</div>
								<div className="option__action action">
									<CornerDownLeft className="action__icon" onClick={ () => handleCreate(input) } />
								</div>
							</div>
						) : null}
					</div>
				</div>
			)}
		</div>
	);

};

// EXPORTS
export default Menu;
