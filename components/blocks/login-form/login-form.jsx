'use client';

// IMPORTS
import './login-form.scss';
import '#/app/styles/configs/variables.scss';
import { useState, useEffect } from 'react';
import { ChevronLeft, X as Close } from 'react-feather';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { signIn } from 'next-auth/react';

// LOGIN-FORM
const LoginForm = () => {

	// BRING IN ROUTER
	const router = useRouter();

	// SETUP STATE
	const [ input, setInput ] = useState('');

	// UPDATE INPUT
	const updateInput = (value) => {
		gsap.to(`.login-form__dot:nth-child(${input.length + 1})`, { backgroundColor: '#C1C5CE', duration: 0 });
		setInput(input + value);
	};

	// DELETE INPUT
	const deleteInput = () => {
		gsap.to(`.login-form__dot:nth-child(${input.length})`, {
			backgroundColor: 'transparent',
			duration: 0,
			onComplete: () => {
				setInput(input.substring(0, input.length - 1));
			},
		});
	};

	// RESET INPUT
	const resetInput = () => {
		gsap.to('.login-form__dot', { backgroundColor: '#9A0808', border: '1px solid #9A0808', duration: 0 });
		gsap.to('.login-form__dot', {
			backgroundColor: 'transparent',
			border: '1px solid #C1C5CE',
			duration: 0,
			delay: 1,
			onComplete: () => {
				setInput('');
			},
		});
	};

	// REFRESH INPUT
	const refreshInput = () => {
		gsap.to('.login-form__dot', {
			backgroundColor: 'transparent',
			border: '1px solid #C1C5CE',
			duration: 0,
			onComplete: () => {
				setInput('');
			},
		});
	};

	// VALIDATE INPUT
	const validateInput = () => {
		gsap.to('.login-form__dot', {
			backgroundColor: '#03B06B',
			border: '1px solid #03B06B',
			duration: 0,
			onComplete: () => {
				setInput('');
				setTimeout(() => router.push('/dashboard'), 1000);
			},
		});
	};

	// LOGIN
	const login = async () => {
		const response = await signIn('credentials', { username: 'jeromehaas', pin: input, redirect: false, redirectUrl: '/dashboard' });
		console.log(response);
		if (response.error !== null) return resetInput();
		if (response.error === null) return validateInput();
	};

	// CHECK FORM WHEN INPUT OF 6 CHARS IS REACHED
	useEffect(() => {
		if (input.length !== 12) return;
		login();
	}, [ input ]);

	// UPDATE INPUT ON KEYPRESS
	const handleKeyPress = (event) => {
		updateInput(event.key);
	};

	// LISTEN ON KEYDOWN
	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => document.removeEventListener('keydown', handleKeyPress);
	}, [ input ]);

	// RENDER
	return (
		<div className="login-form">
			<div className="login-form__wrapper">
				<h1 className="login-form__logo" src="/logos/logo-sayyes.svg">
					ENVHUB
				</h1>
				<div className="login-form__dial-wrapper">
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(1) }>1</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(2) }>2</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(3) }>3</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(4) }>4</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(5) }>5</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(6) }>6</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(7) }>7</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(8) }>8</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(9) }>9</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => deleteInput() }><ChevronLeft className="dial-button__icon" /></button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => updateInput(0) }>0</button>
					<button className="login-form__dial-button dial-button" type="button" onClick={ () => refreshInput() }><Close className="dial-button__icon" /></button>
				</div>
				<div className="login-form__dots-wrapper">
					<div className={ `login-form__dot ${input.length >= 1 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 2 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 3 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 4 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 5 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 6 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 7 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 8 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 9 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 10 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 11 ? 'login-form__dot--active' : ''}` } />
					<div className={ `login-form__dot ${input.length >= 12 ? 'login-form__dot--active' : ''}` } />
				</div>
			</div>
		</div>
	);

};

// EXPORTS
export default LoginForm;
