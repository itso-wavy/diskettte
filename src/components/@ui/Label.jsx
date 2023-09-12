import { StyledLabel, StyledSpanLabel, BlockLabel } from './Label.style'

function Label({ id, label, labelHidden = false, className, ...props }) {
	return (
		<StyledLabel
			htmlFor={id}
			className={
				labelHidden ? `sr-only label ${className}` : `label ${className}`
			}
			{...props}
		>
			{label}
		</StyledLabel>
	)
}

function SpanLabel({ id, label, labelHidden = false, className, ...props }) {
	return (
		<>
			{!labelHidden && (
				<StyledSpanLabel
					htmlFor={id}
					className={
						labelHidden ? `sr-only label ${className}` : `label ${className}`
					}
					{...props}
				>
					{label}
				</StyledSpanLabel>
			)}
		</>
	)
}

function ButtonLabel({ id, label, checked, ...props }) {
	return (
		<BlockLabel htmlFor={id} $checked={checked} {...props}>
			{label}
		</BlockLabel>
	)
}

export { Label, SpanLabel, ButtonLabel }
