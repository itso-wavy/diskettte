import { useState, useRef, useEffect } from 'react'
import { Form, Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
// import { Input } from '../@ui/Input'
import { Message } from './AuthInput'
import GoogleImg from '/assets/icons/flat-color-icons_google.svg'
import KakaotalkImg from '/assets/icons/simple-icons_kakaotalk.svg'
import NaverImg from '/assets/icons/simple-icons_naver.svg'
import EraseImg from '/assets/icons/wavy_erase-sharp.svg'
import UncheckedImg from '/assets/icons/unchecked.svg'
import CheckedImg from '/assets/icons/checked.svg'
import { StyledSection } from './AuthForm.style'
import { Wrapper, Flexbox } from './AuthInput.style'

function Input({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	extraBtn,
	children,
	...props
}) {
	// 	<input
	//  ref={}
	//  type={type}
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
			{label && (
				<label htmlFor={id} className='sr-only'>
					{label}
				</label>
			)}
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

function AccountRegisterFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<Input label='아이디' id='id' name='id' placeholder='아이디'>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</Input>
			<Message text={validationMessage.id} className='invalid' />
			<Input
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<Input
				label='비밀번호 재확인'
				id='passwordConfirm'
				name='passwordConfirm'
				placeholder='비밀번호 재확인'
			/>
			<Message text={validationMessage.password} />
		</fieldset>
	)
}

function PersonalRegisterFieldset({ isBuyer, ...props }) {
	const [isChecked, setIsChecked] = useState(false)

	const toggleCheckboxHandler = () => {
		setIsChecked(isChecked => !isChecked)
	}
	const onClickCheckboxHandler = e => {
		e.preventDefault()
		toggleCheckboxHandler()
	}

	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<Input label='이름' id='name' name='name' placeholder='이름' />
			<Wrapper>
				<Flexbox $direction='row'>
					<label htmlFor='phoneNumber' className='sr-only'>
						휴대폰
					</label>
					<input id='phoneNumber' name='phoneNumber' placeholder='휴대폰' />
					<span className='phonenumber-bar' />
					<input id='phoneNumber2' />
					<span className='phonenumber-bar' />
					<input id='phoneNumber3' />
				</Flexbox>
			</Wrapper>
			<Input label='이메일' id='email' name='email' placeholder='이메일' />
			{isBuyer && (
				<Flexbox $direction='row' className='terms-checkbox'>
					<label htmlFor='termsAgree' onClick={onClickCheckboxHandler}>
						<Img src={!isChecked ? UncheckedImg : CheckedImg} $size='1.1rem' />
						이용약관 및 개인정보처리방침에 대한 내용을 확인하였고 동의합니다.
					</label>
					<input
						id='termsAgree'
						type='checkbox'
						checked={isChecked}
						className='sr-only'
					/>
				</Flexbox>
			)}
		</fieldset>
	)
}

function SellerRegisterFieldset({ ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>판매자 정보</legend>
			<Input
				label='브랜드명'
				id='brandName'
				name='brandName'
				placeholder='브랜드명'
			/>
			<Input
				label='사업자등록번호'
				id='businessNumber'
				name='businessNumber'
				placeholder='사업자등록번호'
			/>
		</fieldset>
	)
}

function LoginFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<Input label='아이디' id='id' name='id' placeholder='아이디' />
			<Input
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<Message text={validationMessage} className='invalid' />
		</fieldset>
	)
}

function LinkBox({ isBuyer, ...props }) {
	const SnsButton = ({ src, text }) => {
		return (
			<Button $style='secondary'>
				<Img src={src} style={{ marginLeft: 0 }} />
				{text}
			</Button>
		)
	}

	const SmallLinks = () => {
		return (
			<Flexbox $direction='row' className='small-links'>
				<Link to='/'>아이디 찾기</Link>
				<Link to='/'>비밀번호 찾기</Link>
				<Link to={isBuyer ? '?user=seller' : ''}>
					<Button
						$size='sm'
						ariaLabel={isBuyer ? 'Switch to Seller' : 'Switch to Buyer'}
					>
						{isBuyer ? '판매회원' : '구매회원'}
					</Button>
				</Link>
			</Flexbox>
		)
	}

	return (
		<Flexbox {...props}>
			<SnsButton src={GoogleImg} text='구글 계정으로 로그인' />
			<SnsButton src={KakaotalkImg} text='카카오톡 계정으로 로그인' />
			<SnsButton src={NaverImg} text='네이버 계정으로 로그인' />
			<SmallLinks />
		</Flexbox>
	)
}

function AuthForm({ type }) {
	const navigate = useNavigate()
	const [searchparams] = useSearchParams()
	const userParam = searchparams.get('user')
	const [isBuyer, setIsBuyer] = useState(userParam !== 'seller')

	useEffect(() => {
		setIsBuyer(userParam !== 'seller')
	}, [userParam])

	if (type === 'signin') {
		return (
			<StyledSection htmlFor={`${type} form`}>
				<h2 id={`${type} form`} className='title'>
					{isBuyer ? '로그인' : '셀러 로그인'}
				</h2>
				<Form method='post'>
					<LoginFieldset validationMessage='아이디가 입력되지 않았습니다.' />
					<Flexbox $direction='row'>
						<Button $style='secondary' onClick={() => navigate('../signup')}>
							회원가입
						</Button>
						<Button>로그인</Button>
					</Flexbox>
					<span className='hr'>OR</span>
					<LinkBox {...{ isBuyer }} />
				</Form>
			</StyledSection>
		)
	} else if (type === 'signup') {
		return (
			<StyledSection htmlFor={`${type} form`}>
				<h2 id={`${type} form`} className='title'>
					{isBuyer ? '회원가입' : '셀러 회원가입'}
				</h2>
				<Form method='post'>
					<AccountRegisterFieldset
						isValid={true}
						validationMessage={{
							id: '이미 사용 중인 아이디입니다.',
							password: (
								<>
									<span className={0 ? 'valid' : ''}>영문 ✓</span>
									<span className={0 ? 'valid' : ''}>숫자 ✓</span>
									<span className={0 ? 'valid' : ''}>특수문자 ✓</span>
									<span className={1 ? 'valid' : ''}>8-16자 ✓</span>
									<span className={1 ? 'valid' : ''}>비밀번호 일치 ✓</span>
								</>
							),
						}}
					/>
					<PersonalRegisterFieldset {...{ isBuyer }} />
					{isBuyer || <SellerRegisterFieldset />}
					<Flexbox $direction='row' style={{ marginTop: '1em' }}>
						<Button $style='secondary' onClick={() => navigate('../signin')}>
							로그인
						</Button>
						<Button>회원가입</Button>
					</Flexbox>
					<span className='hr'>OR</span>
					<LinkBox {...{ isBuyer }} />
				</Form>
			</StyledSection>
		)
	}
}

export { AuthForm }
