/**
 * @returns <Svg src pixel ariaLabel fill />
 */
export default function Svg({
	src,
	pixel = 24,
	ariaLabel,
	fill = 'white',
	...props
}) {
	return (
		<>
			<svg
				width={pixel}
				height={pixel}
				viewBox={`0 0 ${pixel} ${pixel}`}
				fill={fill}
				aria-label={ariaLabel}
				{...props}
			>
				{src}
			</svg>
		</>
	)
}
