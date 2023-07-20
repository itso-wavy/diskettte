import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
	width: ${({ $size }) => $size || '100%'};
	height: ${({ $size }) => $size || '100%'};
	display: inline-block;
	vertical-align: middle;
	position: relative;
`

const StyledLogo = styled(StyledImg)`
	width: 100%;
`

/**
 * @param {$size}: width/height
 * @returns <Img src alt $size />
 */
export default function Img({ src, alt, $size = '1.3rem', ...props }) {
	return (
		<StyledImg src={src} alt={alt} $size={$size} aria-label={alt} {...props} />
	)
}

export function LogoImg({ src, alt, $size, ...props }) {
	return (
		<StyledLogo src={src} alt={alt} $size={$size} aria-label={alt} {...props} />
	)
}
