import { useContext } from 'react'
import { FormContext } from '../../context/form-context'
import { ACTION_CREATOR } from '../../hooks/useForm'
import { Button } from '../@ui/Button'
import { TextInput } from '../@ui/Input'
import minusImg from '/assets/icons/wavy_minus.svg'
import plusImg from '/assets/icons/wavy_plus.svg'
import { Wrapper, StyledInput } from './QuantitySpinner.style.jsx'

function QuantitySpinner({ name, ...props }) {
	// const { value, onInputHandler } = useInput({
	// 	type: 'number',
	// })
	const { values, dispatch, onInputHandler } = useContext(FormContext)
	const value = values[name]

	/* const onInputHandler = (e, options) => {
		let { value, name } = e.target

		if (options.type === 'number') value = value.replace(/\D/g, '')

		
	} */
	const manipulateQty = (_, { type }) => {
		const newValue = type === 'minus' ? value - 1 : value + 1

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
			{/* <TextInput name='qty' type='number' notErase /> */}
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
