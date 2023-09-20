import { StyledSpanLabel, BlockLabel, ImgLabel } from './Label.style'

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

function ImageLabel({ id, preview, ...props }) {
	return (
		<ImgLabel htmlFor={id} $bg={preview} {...props}>
			{preview && <img src={preview} alt='preview' />}
		</ImgLabel>
	)
}

export { HiddenLabel, SpanLabel, ButtonLabel, ImageLabel }
