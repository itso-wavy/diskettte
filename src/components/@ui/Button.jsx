import { StyledButton } from './Button.style'

/**
 * @param {$type} 'rect' || 'square' || 'icon'
 * @param {$style} 'primary' || 'secondary' || 'count'
 * @param {$size}: width/height || 'xs'(brand용) || 'sm' || 'md'(mobileNav용) || 'lg'
 * @returns <Button $style $size onClick aria-label> + <Img />
 * || <Button	$type='square' $img	$style onClick aria-label />
 * || <Button $type='icon' $size $img onClick aria-label/>
 */

export default function Button({
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
