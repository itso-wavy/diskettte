import { useRef, useState } from 'react'
import { formatPrice } from '../../lib/utils/text-formatter'
import { Wrapper } from './DoubleRangeSlider.style'

function DoubleRangeSlider({ id, name, min, max, ...props }) {
	const [value, setValue] = useState({ start: min, end: max })
	const [position, setPosition] = useState({ start: min, end: max })
	const startRef = useRef()
	const endRef = useRef()

	const onChangeHandler = e => {
		console.log('😝')
		const type = e.target.max < max ? 'start' : 'end'

		const minimum = Math.min(value.start, value.end - 1)
		const maximum = Math.max(value.start + 1, value.end)
		const start = parseInt(((maximum - min) / (max - min - 1)) * 100)
		const end = parseInt(((minimum - min + 1) / (max - min - 1)) * 100)

		setValue(value => ({ ...value, [type]: e.target.value }))
		setPosition({ start, end })
	}

	return (
		<>
			<Wrapper {...props}>
				<div className='range-slider'>
					<input
						type='range'
						ref={startRef}
						id={id + 1}
						name={name}
						min={min}
						max={max - 1}
						value={value.start}
						onChange={onChangeHandler}
					/>
					<input
						type='range'
						ref={endRef}
						id={id + 2}
						name={name}
						min={min + 1}
						max={max}
						value={value.end}
						onChange={onChangeHandler}
					/>

					<div className='tracks-box'>
						<div left={position.start} id='track' />
						<div
							left={position.start}
							right={position.end}
							id='range-between'
						/>
						<div left={position.start} className='thumb start' />
						<div right={position.end} className='thumb end' />
					</div>

					<div className='labels-box'>
						<label htmlFor={id + 1}>{formatPrice(position.start)}</label>
						<label htmlFor={id + 2}>{formatPrice(position.end)}</label>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export { DoubleRangeSlider }
