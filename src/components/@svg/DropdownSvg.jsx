export function DropdownSvg(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='-3 -2.5 15 15'
			fill='none'
			aria-hidden
			{...props}
		>
			<path
				stroke='currentColor'
				stroke-linecap='square'
				stroke-miterlimit='10'
				d='m3 9 4-4-4-4'
			/>
		</svg>
	)
}
