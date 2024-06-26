import { StyledButton } from './Button.style'

/**
 * @param $type 'rect' | 'square' | 'icon' | 'badge'
 * @param $style 'primary' | 'secondary' | 'tertiary'
 * @param $size width/height | 'sm' | 'md' | 'lg'(mobileNav용)
 * @returns <Button $style $size onClick aria-label> + <Img />
 * | <Button	$type='square' $img	$style onClick aria-label />
 * | <Button $type='icon' $size $img onClick aria-label/>
 */
function Button({
	$type = 'rect',
	$style = 'primary',
	$img,
	$size,
	$radius,
	onClick,
	ariaLabel,
	ariaLabelledby,
	children,
	...props
}) {
	return (
		<StyledButton
			$img={$img}
			$size={$size}
			$type={$type}
			$style={$style}
			$radius={$radius}
			onClick={onClick}
			aria-label={ariaLabel}
			aria-labelledby={ariaLabelledby}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export { Button }
