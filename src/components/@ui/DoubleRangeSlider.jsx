import { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { FormContext } from '../../context/form-context'
import { formatPrice } from '../../lib/utils/text-formatter'
import { debounce } from '../../lib/utils/debounce'
import { Wrapper, TrackBox } from './DoubleRangeSlider.style'

function DoubleRangeSlider({ id, name, min, max, ...props }, ref) {
	const { onInputHandler } = useContext(FormContext)
	const [value, setValue] = useState({ start: min, end: max })
	const [position, setPosition] = useState({ start: 0, end: 0 })

	const onChangeHandler = e => {
		let inputValue = e.target.value
		const MIN_GAP = 1
		const type = e.target.max < max ? 'start' : 'end'
		const oppositeType = type === 'start' ? 'end' : 'start'
		const reverse = type === 'start' ? 1 : -1
		const valueGap = (inputValue - value[oppositeType]) * reverse

		if (valueGap > MIN_GAP) inputValue = value[oppositeType] - MIN_GAP * reverse

		setValue(value => ({ ...value, [type]: inputValue }))

		const start = parseInt((value.start / max) * 100)
		const end = 100 - parseInt((value.end / max) * 100)

		setPosition({ start, end })

		const event = { target: { name, value: value } }

		debounce(onInputHandler, 500)(event)
	}

	useImperativeHandle(ref, () => ({
		initRangeSlider: () => {
			setValue({ start: min, end: max })
			setPosition({ start: 0, end: 0 })
		},
	}))

	return (
		<Wrapper {...props}>
			<input
				type='range'
				id={id + 1}
				name={name}
				min={min}
				max={max - 1}
				value={value.start}
				onChange={onChangeHandler}
			/>
			<input
				type='range'
				id={id + 2}
				name={name}
				min={min + 1}
				max={max}
				value={value.end}
				onChange={onChangeHandler}
			/>
			<TrackBox
				// $left={position.start}
				// $right={position.end}
				className='track-box'
			>
				<div id='track' />
				<div
					id='range-between'
					style={{ left: position.start + '%', right: position.end + '%' }}
				/>
				<div className='handle start' style={{ left: position.start + '%' }} />
				<div className='handle end' style={{ right: position.end + '%' }} />
			</TrackBox>

			<div className='labels-box'>
				<label htmlFor={id + 1}>{formatPrice(value.start)}</label>
				<label htmlFor={id + 2}>{formatPrice(value.end)}</label>
			</div>
		</Wrapper>
	)
}

const RefDoubleRangeSlider = forwardRef(DoubleRangeSlider)

export { RefDoubleRangeSlider as DoubleRangeSlider }
