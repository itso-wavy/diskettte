import React from 'react'
import styled from 'styled-components'

// export default function Svg({ svgTitle, ...restProps }) {
// 	return (
// 		<svg
// 			xmlns='http://www.w3.org/2000/svg'
// 			viewBox='0 0 0 0'
// 			fill='currentColor'
// 			{...restProps}
// 		>
// 			{svgTitle && <title>{svgTitle}</title>}
// 			<path d='' />
// 			<rect x='' y='' width='' height='' rx='' />
// 		</svg>
// 	)
// }

const StyledImg = styled.img`
	width: ${({ $size }) => $size || '100%'};
	height: ${({ $size }) => $size || '100%'};
	display: inline-block;
	vertical-align: middle;
	position: relative;
`

/**
 * @param {$size}: width/height
 * @returns <Img src alt $size />
 */
export default function Img({ src, alt, $size, ...props }) {
	return <StyledImg src={src} alt={alt} $size={$size} {...props} />
}
