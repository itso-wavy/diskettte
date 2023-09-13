import {
	useState,
	useCallback,
	useRef,
	useContext,
	useEffect,
	forwardRef,
	useImperativeHandle,
} from 'react'
import { FormContext } from '../../context/form-context'
import { useInput, useScript } from '../../hooks'
import { HiddenLabel, ButtonLabel } from './Label'
import { Button } from './Button'
import { Img } from './Img'
import { Flexbox } from './Form'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import CheckedImg from '/assets/icons/checked.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import {
	InputWrapper,
	NumberWrapper,
	CheckboxWrapper,
	StyledLi,
	AddressWrapper,
} from './Input.style'

// (서버 밸리데이션)
// 아이디, 셀러 브랜드명 중복 확인
// (로그인)
// 전송 보낸 후, 일치하는 계정 없으면 메시지
// 전송 보낸 후, 유저 유형이 다를 때 메시지 */

/**
 * @returns <TextInput id name type label validationFn />
 */
function TextInput({
	id,
	name,
	type = 'text',
	label,
	placeholder,
	validationFn,
	...props
}) {
	const { ref } = useInput()
	const { values, onInputHandler, onBlurHandler, clearInputHandler } =
		useContext(FormContext)

	const value = values[name]

	return (
		<>
			<InputWrapper>
				{label && <HiddenLabel id={id} label={label} />}
				<input
					ref={ref}
					id={id}
					name={name}
					type={type}
					value={value || ''}
					placeholder={placeholder}
					onInput={e => onInputHandler(e, { type })}
					onBlur={onBlurHandler}
					{...props}
				/>
				<div className='btn-box'>
					{value && (
						<Button
							$type='icon'
							$size='1.3rem'
							$radius='50%'
							$img={EraseImg}
							type='button'
							onClick={() => clearInputHandler(ref)}
							aria-label='clear'
							className='clear'
							tabIndex='-1'
						/>
					)}
				</div>
			</InputWrapper>
		</>
	)
}

function NumberInput({ label, id, name, placeholder, ...props }) {
	const options = { type: 'number' }

	const { value: value1, onInputHandler: onInputHandler1 } = useInput(options)
	const { value: value2, onInputHandler: onInputHandler2 } = useInput(options)
	const { value: value3, onInputHandler: onInputHandler3 } = useInput(options)

	const event = { target: { name, value: `${value1}-${value2}-${value3}` } }

	const { onInputHandler, onBlurHandler } = useContext(FormContext)

	useEffect(() => {
		onInputHandler(event, options)
	}, [value1, value2, value3])

	return (
		<NumberWrapper {...props}>
			{label && <HiddenLabel id={id} label={label} />}
			<input
				id={id}
				name={name}
				value={value1}
				onInput={onInputHandler1}
				placeholder={placeholder}
			/>
			<span className='number-bar' />
			<input
				id={id + '2'}
				name={name + '2'}
				value={value2}
				onInput={onInputHandler2}
			/>
			<span className='number-bar' />
			<input
				id={id + '3'}
				name={name + '3'}
				value={value3}
				onInput={onInputHandler3}
				onBlur={() => onBlurHandler(event)}
			/>
		</NumberWrapper>
	)
}

function Checkbox(
	{ isActive = true, required, id, name, info, ...props },
	ref
) {
	const [selected, setSelected] = useState(isActive)

	let checked = selected
	let toggleCheckboxHandler = e => {
		window.scrollTo(0, window.scrollY)

		if (e.target.name) setSelected(selected => !selected)
	}

	if (required) {
		const { areValid, onCheckHandler } = useContext(FormContext)
		checked = areValid[name]
		toggleCheckboxHandler = e => onCheckHandler(e, required)
	}

	useImperativeHandle(ref, () => ({
		checked,
		setSelected: selected => setSelected(selected),
	}))

	return (
		<CheckboxWrapper {...props}>
			<label htmlFor={id} onClick={toggleCheckboxHandler}>
				<Img src={!checked ? UncheckedImg : CheckedImg} $size='1.1rem' />
				{info}
			</label>
			<input
				id={id}
				ref={ref}
				type='checkbox'
				name={name}
				checked={checked}
				onChange={toggleCheckboxHandler}
				className='sr-only'
			/>
		</CheckboxWrapper>
	)
}

function RadioInput({ option, name, ...props }) {
	const { values, onRadioChangeHandler } = useContext(FormContext)
	const selectedValue = values[name]

	return (
		<ul>
			{option.map(({ value, label, defaultChecked }) => (
				<StyledLi key={value}>
					<ButtonLabel
						id={value}
						label={label}
						checked={value === selectedValue}
						{...props}
					/>
					<input
						type='radio'
						name={name}
						id={value}
						value={value}
						className='sr-only'
						defaultChecked={defaultChecked}
						onClick={e => onRadioChangeHandler(e)}
					/>
				</StyledLi>
			))}
		</ul>
	)
}

function AddressInput({ id, name, label, placeholder, ...props }) {
	const nextRef = useRef()
	const [address, setAddress] = useState({
		value1: '',
		value2: '',
	})
	const { onInputHandler, onBlurHandler } = useContext(FormContext)

	const url = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'

	const onload = useCallback(() => {
		return new daum.Postcode({
			theme: {
				bgColor: '#F2F2F2', //바탕 배경색
				// 	searchBgColor: '#AFCCF8', //검색창 배경색
				searchBgColor: '#F2F2F2', //검색창 배경색
				contentBgColor: '#FFFFFF', //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
				pageBgColor: '#FFFFFFC0', //페이지 배경색
				textColor: '#000000', //기본 글자색
				queryTextColor: '#000000', //검색창 글자색
				postcodeTextColor: '#FFC107', //우편번호 글자색
				emphTextColor: '#6F8CFF', //강조 글자색
				outlineColor: '#CCCCCC', //테두리
			},
			oncomplete: function (data) {
				let addr = ''

				if (data.userSelectedType === 'R') {
					// 사용자가 도로명 주소를 선택했을 경우
					let extraAddr = ''

					if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraAddr += data.bname
					}
					if (data.buildingName !== '' && data.apartment === 'Y') {
						extraAddr +=
							extraAddr !== '' ? ', ' + data.buildingName : data.buildingName
					}
					if (extraAddr !== '') {
						extraAddr = ` (${extraAddr})`
					}

					addr = data.roadAddress + extraAddr
				} else {
					// 사용자가 지번 주소를 선택했을 경우(J)
					addr = data.jibunAddress
				}

				setAddress(value => ({ ...value, value1: data.zonecode + ' ' + addr }))
			},
		})
	}, [])

	const searchAddressHandler = () => {
		onload().open()
		nextRef.current.focus()
	}

	useEffect(() => {
		if (!address.value1) return

		const fullAddress = address.value1 + address.value2
		const event = { target: { value: fullAddress, name } }

		onInputHandler(event)
		onBlurHandler(event)
	}, [address.value1, address.value2])

	useScript(url, onload)

	return (
		<AddressWrapper {...props}>
			{label && <HiddenLabel id={id} label={label} />}
			<Flexbox $direction='row'>
				<input id={id} name={name} value={address.value1} readOnly />
				<Button
					type='button'
					$style='secondary'
					style={{ width: '30%' }}
					onClick={searchAddressHandler}
				>
					우편번호 검색
				</Button>
			</Flexbox>
			<Flexbox $direction='row'>
				<input
					ref={nextRef}
					id={id + '2'}
					name={name}
					value={address.value2}
					placeholder={placeholder}
					onInput={e =>
						setAddress(value => ({ ...value, value2: e.target.value }))
					}
				/>
			</Flexbox>
		</AddressWrapper>
	)
}

const RefCheckbox = forwardRef(Checkbox)

export {
	TextInput,
	NumberInput,
	RefCheckbox as Checkbox,
	RadioInput,
	AddressInput,
}
