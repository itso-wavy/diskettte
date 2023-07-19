import styled, { css } from 'styled-components'

const StyledButton = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.55em;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	border-radius: ${({ $radius }) => $radius || 0};
	/* transition: all 0.3s ease; */

	// focus, hover, disabled

	/* TYPE */
	${({ $type, $size, $img }) =>
		$type === 'icon' &&
		css`
			width: ${$size || '1.5rem'};
			height: ${$size || '1.5rem'};
			background: transparent center/contain no-repeat url(${$img});
		`}

	${({ $type }) =>
		$type === 'rect' &&
		css`
			min-height: 3.125rem;
			width: 100%;
			padding: 0.8em 0.8em;
			line-height: 1em;
		`}

  ${({ $type, $img }) =>
		$type === 'square' &&
		css`
			background: transparent center/contain no-repeat url(${$img});
			width: 2.5rem;
			height: 2.5rem;
		`}

  /* STYLE */
  ${({ $type, $style, theme }) =>
		($type === 'rect' || $type === 'square') &&
		css`
			background-color: ${{
				secondary: theme.color.white,
			}[$style] || theme.color.black};
			color: ${{
				secondary: theme.color.black,
			}[$style] || theme.color.white};
			border: ${{
				secondary: `1px solid ${theme.color.black}`,
				count: `1px solid ${theme.color.gray}`,
			}[$style] || 0};
		`}

  /* SIZE */
  ${({ $size, theme }) => css`
		${$size === 'xs' &&
		css`
			font-size: 0.75rem; // 12px
			font-weight: ${theme.fw.normal};
			/* gap: 6px; */
			padding: 0.5em 0.8em;
			width: auto;
			min-height: auto;

			img {
				height: 0.75rem;
				width: 0.75rem;
			}
			&:hover {
				text-decoration: underline;
			}
		`}
		${$size === 'sm' &&
		css`
			font-weight: ${theme.fw.normal};
			/* height: 1.875rem; */
			padding: 0.4em 0.8em;
			width: auto;
			min-height: auto;
		`}
    ${$size === 'md' &&
		css`
			font-size: 0.875rem; // 14px
			font-weight: ${theme.fw.normal};

			img {
				height: 1.5rem;
				width: 1.5rem;
			}
			&:hover {
				text-decoration: underline;
			}
		`}
	`}
`

/**
 * @param {$type} 'rect' || 'square' || 'icon'
 * @param {$style} 'primary' || 'secondary' || 'count'
 * @param {$size}: width/height || 'xs'(brand용) || 'sm' || 'md'(mobileNav용) || 'lg'
 * @returns <Button $type='rect' $style $img $size />
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
