export const SearchSvg = ({ ...props }) => {
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
				stroke='currentColor'
				strokeMiterlimit='10'
				strokeWidth='2.25'
				d='M10.36 3a7.36 7.36 0 1 0 0 14.73 7.36 7.36 0 0 0 0-14.73Z'
			/>
			<path
				stroke='currentColor'
				strokeLinecap='square'
				strokeMiterlimit='10'
				strokeWidth='2.25'
				d='M15.86 15.86 21 21'
			/>
		</svg>
	)
}
