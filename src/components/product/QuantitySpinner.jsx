import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import { ACTION_CREATOR } from '../../hooks/useForm'
import { Button } from '../@ui/Button'
import minusImg from '/assets/icons/wavy_minus.svg'
import plusImg from '/assets/icons/wavy_plus.svg'
import { Wrapper, StyledInput } from './QuantitySpinner.style.jsx'

function QuantitySpinner({ name, stock, ...props }) {
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

	return (
		<Wrapper>
			<Button
				type='button'
				$type='square'
				$img={minusImg}
				$style='tertiary'
				ariaLabel='decrease quantity'
				onClick={e => {
					manipulateQty(e, { type: 'minus' })
				}}
			/>
			<StyledInput
				name={name}
				value={value}
				onInput={e => onInputHandler(e, { type: 'number' })}
				{...props}
			/>
			<Button
				type='button'
				$type='square'
				$img={plusImg}
				$style='tertiary'
				ariaLabel='increase quantity'
				onClick={e => {
					manipulateQty(e, { type: 'plus' })
				}}
			/>
		</Wrapper>
	)
}

export { QuantitySpinner }
