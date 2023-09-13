import { StyledSpanLabel, BlockLabel } from './Label.style'

function HiddenLabel({ id, label, ...props }) {
	return (
		<label htmlFor={id} className='sr-only' {...props}>
			{label}
		</label>
	)
}

function SpanLabel({ id, label, className, ...props }) {
	return (
		<StyledSpanLabel
			htmlFor={id}
			aria-label='label'
			className={`label ${className}`}
			{...props}
		>
			{label}
		</StyledSpanLabel>
	)
}

function ButtonLabel({ id, label, checked, ...props }) {
	return (
		<BlockLabel htmlFor={id} $checked={checked} {...props}>
			{label}
		</BlockLabel>
	)
}

export { HiddenLabel, SpanLabel, ButtonLabel }
