export function CloseSvg(props) {
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
			<path
				d='M5 5L19 19'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='square'
			/>
			<path
				d='M5 19L19 5'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='square'
			/>
		</svg>
	)
}
