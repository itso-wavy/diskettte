export function CartSvg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			aria-hidden
			{...props}
		>
			<g>
				<path
					fill='currentColor'
					fillRule='evenodd'
					d='M17.8 6.4V7h4.5v14.3c0 .2 0 .4-.2.6l-.6.2H2.8l-.6-.2a.7.7 0 0 1-.2-.6V7h4.5v-.6C6.5 5 7 3.6 8 2.6S10.4 1 12 .9h.2c1.5 0 2.9.6 4 1.7 1 1 1.5 2.4 1.5 3.8ZM8.4 7H16v-.6a3.5 3.5 0 0 0-1.1-2.6 3.7 3.7 0 0 0-2.7-1c-2 0-3.7 1.7-3.7 3.6V7Zm12.1 1.8H3.8v11.4h16.7V8.8Z'
					clipRule='evenodd'
				/>
			</g>
			<defs>
				<clipPath id='a'>
					<path fill='none' d='M0 0h24v24H0z' />
				</clipPath>
			</defs>
		</svg>
	)
}
