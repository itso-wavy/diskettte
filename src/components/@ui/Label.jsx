function HiddenLabel({ id, label, ...props }) {
	return (
		<label htmlFor={id} className='sr-only' {...props}>
			{label}
		</label>
	)
}

export { HiddenLabel }
