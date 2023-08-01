import { useState, useRef } from 'react'
import { Form, Link, useSearchParams } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
// import { Input } from '../@ui/Input'
import { Message } from './AuthInput'
import GoogleSvg from '/assets/icons/flat-color-icons_google.svg'
import KakaotalkSvg from '/assets/icons/simple-icons_kakaotalk.svg'
import NaverSvg from '/assets/icons/simple-icons_naver.svg'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import { StyledSection } from './AuthForm.style'
import { Wrapper, Flexbox } from './AuthInput.style'

function Input({
	label,
	id,
	name,
	placeholder,
	extraBtn,
	// validationMessage,
	children,
	...props
}) {
	// 	<input
	//  ref={}
	//  type='text'
	//  id='id'
	//  name={}
	//  placeholder={placeholder}
	//  value={}
	//  onChange={}
	//  onFocus={}
	//  onBlur={}
	//  onInvalid={}
	//  onError={}
	// />
	const inputRef = useRef()
	const [value, setValue] = useState('')
	const onChange = e => setValue(e.target.value)

	const clearInput = () => setValue('')

	const activate = () => {
		inputRef.current.focus()
	}
	const deactivate = () => {
		// validation
	}
	// useImperativeHandle(ref, () => {
	// 	return { focus: activate, blur: deactivate }
	// })

	return (
		<div>
			<label htmlFor={id} className='sr-only'>
				{label}
			</label>
			<Flexbox $direction='row'>
				<Wrapper extraBtn={extraBtn}>
					<input
						ref={inputRef}
						id={id}
						name={name}
						value={value}
						// onBlur={onBlur}
						onChange={onChange}
						placeholder={placeholder}
						{...props}
					/>
					<div className='btn-box'>
						{value && (
							<Button
								$type='icon'
								$size='1.3rem'
								$radius='50%'
								$img={EraseImg}
								onClick={clearInput}
								aria-label='clear'
								className='clear'
							/>
						)}
						{extraBtn}
					</div>
				</Wrapper>
				{children}
			</Flexbox>
		</div>
	)
}

function LinkBox({ isSeller, setIsSeller, ...props }) {
	const onClickHandler = () => {
		setIsSeller(true)
	}

	return (
		<Flexbox {...props}>
			<Button $style='secondary'>
				<Img src={GoogleSvg} style={{ marginLeft: 0 }} />
				구글 계정으로 로그인
			</Button>
			<Button $style='secondary'>
				<Img src={KakaotalkSvg} style={{ marginLeft: 0 }} />
				카카오톡 계정으로 로그인
			</Button>
			<Button $style='secondary'>
				<Img src={NaverSvg} style={{ marginLeft: 0 }} />
				네이버 계정으로 로그인
			</Button>
			<Flexbox $direction='row' className='small-links'>
				<Link to='/'>아이디 찾기</Link>
				<Link to='/'>비밀번호 찾기</Link>
				<Link to='?user=seller'>
					<Button
						$size='sm'
						onClick={onClickHandler}
						ariaLabel='toggle user mode'
					>
						{!isSeller ? '판매회원' : '구매회원'}
					</Button>
				</Link>
			</Flexbox>
		</Flexbox>
	)
}

function RegisterFieldset({ isSeller, validationMessage, ...props }) {
	return (
		<>
			<fieldset {...props}>
				<legend className='sr-only'>계정 정보</legend>
				<Input
					label='아이디'
					id='id'
					name='id'
					placeholder='아이디'
					// validationMessage='아이디가 입력되지 않았습니다.'
				>
					<Button onClick aria-label>
						중복 확인
					</Button>
				</Input>
				<Flexbox>
					{/* <Input placeholder='비밀번호' />
					<Input
						placeholder='비밀번호 재확인'
						validationMessage={
							<>
								<span>영문 ✓</span>
								<span>숫자 ✓</span>
								<span>특수문자 ✓</span>
								<span>8-16자 ✓</span>
								<span>비밀번호 일치 ✓</span>
							</>
						}
					/> */}
					<Message
						text={
							<>
								<span>영문 ✓</span>
								<span>숫자 ✓</span>
								<span>특수문자 ✓</span>
								<span>8-16자 ✓</span>
								<span>비밀번호 일치 ✓</span>
							</>
						}
					/>
				</Flexbox>
			</fieldset>
			<fieldset>
				<legend className='sr-only'>계정 정보</legend>
				<div>
					<Input placeholder='이름' />
					<Input placeholder='이름' />
					<label htmlFor='id' className='sr-only'>
						아이디
					</label>
					<input id='id' placeholder='아이디' />

					<p className='validation'>이미 사용 중인 아이디입니다.</p>
				</div>
				<div>
					<label htmlFor='password' className='sr-only'>
						비밀번호
					</label>
					<input id='password' placeholder='비밀번호' />
				</div>
				<div>
					<label htmlFor='passwordConfirm' className='sr-only'>
						비밀번호 재확인
					</label>
					<input id='passwordConfirm' placeholder='비밀번호 재확인' />
					<p className='validation'>
						<span>영문 ✓</span>
						<span>숫자 ✓</span>
						<span>특수문자 ✓</span>
						<span>8-16자 ✓</span>
						<span>비밀번호 일치 ✓</span>
					</p>
				</div>
			</fieldset>
			<fieldset>
				<legend className='sr-only'>개인 정보</legend>
				<div>
					<label htmlFor='name' className='sr-only'>
						이름
					</label>
					<input id='name' placeholder='이름' />
				</div>
				<div>
					<label htmlFor='phoneNumber1' className='sr-only'>
						휴대폰
					</label>
					<select id='phoneNumber1' placeholder='휴대폰'>
						<option value='010'>010</option>
						<option value='011'>011</option>
						<option value='016'>016</option>
						<option value='017'>017</option>
						<option value='019'>019</option>
					</select>
					-
					<input id='phoneNumber2' />
					-
					<input id='phoneNumber3' />
				</div>
				<div>
					<label htmlFor='email' className='sr-only'>
						이메일
					</label>
					<input id='email' placeholder='이메일' />
				</div>
				<div>
					<input id='termsAgree' type='checkbox' />
					<label htmlFor='termsAgree' className='sr-only'>
						diskette의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
						동의합니다.
					</label>
				</div>
				<Button>완료</Button>
			</fieldset>
		</>
	)
}

function LoginFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<Input label='아이디' id='id' name='id' placeholder='아이디'></Input>
			<Input
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<Message text={validationMessage} />
		</fieldset>
	)
}

function AuthForm({ type }) {
	const [searchparams] = useSearchParams()
	const userParam = searchparams.get('user')
	// const isSeller = userParam === 'seller'
	const [isSeller, setIsSeller] = useState(userParam === 'seller')

	if (type === 'signin') {
		return (
			<StyledSection htmlFor={`${type} form`}>
				<h2 id={`${type} form`} className='title'>
					{!isSeller ? '로그인' : '셀러 로그인'}
				</h2>
				<Form method='post'>
					<LoginFieldset validationMessage='아이디가 입력되지 않았습니다.' />
					<Flexbox $direction='row'>
						<Button $style='secondary'>회원가입</Button>
						<Button>로그인</Button>
					</Flexbox>
					<span className='hr'>OR</span>
					<LinkBox {...{ isSeller, setIsSeller }} />
				</Form>
			</StyledSection>
		)
	} else if (type === 'signup') {
		return (
			<StyledSection htmlFor={`${type} form`}>
				<h2 id={`${type} form`} className='title'>
					{!isSeller ? '회원가입' : '셀러 회원가입'}
				</h2>
				<Form method='post'>
					<RegisterFieldset />
					{/* <AccountInfoFieldset />
					<PersonalInfoFieldset />
					<SellerInfoFieldset /> */}
				</Form>
				<Flexbox $direction='row'>
					<Button $style='secondary'>로그인</Button>
					<Button>완료</Button>
				</Flexbox>
				<span className='hr'>OR</span>
				<LinkBox {...isSeller} />
			</StyledSection>
		)
	}
}

export { AuthForm }
