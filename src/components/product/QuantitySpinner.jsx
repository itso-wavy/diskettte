import { forwardRef, useContext, useImperativeHandle } from 'react'
import { FormContext } from '../../context/form-context'
import { ACTION_CREATOR } from '../../hooks/useForm'
import { Button } from '../@ui/Button'
import MinusImg from '/assets/icons/wavy_minus.svg'
import PlusImg from '/assets/icons/wavy_plus.svg'
import { Wrapper, StyledInput } from './QuantitySpinner.style.jsx'

function QuantitySpinner({ name, stock, ...props }, ref) {
	const { values, state, dispatch, onInputHandler } = useContext(FormContext)
	const value = values[name]

	const manipulateQty = (_, { type }) => {
		let newValue = type === 'minus' ? value - 1 : value + 1
		if (newValue <= 1) newValue = 1
		if (newValue > stock) newValue = stock

		dispatch({
			type: ACTION_CREATOR.INPUT,
			values: { ...state.values, [name]: newValue },
		})
	}

	// useImperativeHandle(ref, () => ({
	// 	// inputValue: ref.current.value,
	// 	// value,
	// 	// setSelected: selected => setSelected(selected),
	// }))

	return (
		<Wrapper {...props}>
			<Button
				type='button'
				$type='square'
				$img={MinusImg}
				$style='tertiary'
				ariaLabel='decrease quantity'
				onClick={e => {
					manipulateQty(e, { type: 'minus' })
				}}
			/>
			<StyledInput
				ref={ref}
				name={name}
				value={value}
				onInput={e => onInputHandler(e, { type: 'number' })}
				onKeyDown={e => e.preventDefault()}
			/>
			<Button
				type='button'
				$type='square'
				$img={PlusImg}
				$style='tertiary'
				ariaLabel='increase quantity'
				onClick={e => {
					manipulateQty(e, { type: 'plus' })
				}}
			/>
		</Wrapper>
	)
}

const RefQuantitySpinner = forwardRef(QuantitySpinner)

export { RefQuantitySpinner as QuantitySpinner }
