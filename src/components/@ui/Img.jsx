import { StyledImg, StyledLogo } from './Img.style'

function TitleImg({ src, alt = '', $size, ...props }) {
	return (
		<StyledLogo src={src} alt={alt} $size={$size} aria-label={alt} {...props} />
	)
}

/**
 * @param $size width/height
 * @returns <Img src alt $size />
 */
function Img({ src, alt = '', $size = '1.3rem', ...props }) {
	return (
		<StyledImg src={src} alt={alt} $size={$size} aria-label={alt} {...props} />
	)
}
export { Img, TitleImg }
