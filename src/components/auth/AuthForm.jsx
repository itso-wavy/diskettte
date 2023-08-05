import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '../@ui/Button'
import {
	FormSection,
	FormInput,
	FormValidateMessage,
	Hr,
	SmallMenus,
	Flexbox,
} from '../@ui/Form'
import { GoogleLoginButton, KakaotalkLoginButton, NaverLoginButton } from '.'
import { StyledForm } from './AuthForm.style'

function ButtonField({ isBuyer, ...props }) {
	return (
		<>
			<Hr text='OR' />
			<Flexbox {...props}>
				<GoogleLoginButton />
				<KakaotalkLoginButton />
				<NaverLoginButton />
				<SmallMenus {...props}>
					<Link to='.'>아이디 찾기</Link>
					<Link to='.'>비밀번호 찾기</Link>
					<Link to={isBuyer ? '?user=seller' : ''}>
						<Button
							$size='sm'
							ariaLabel={isBuyer ? 'Switch to Seller' : 'Switch to Buyer'}
						>
							{isBuyer ? '판매회원' : '구매회원'}
						</Button>
					</Link>
				</SmallMenus>
			</Flexbox>
		</>
	)
}

function AccountRegisterFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디'>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</FormInput>
			<FormValidateMessage text={validationMessage.id} className='invalid' />
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<FormInput
				label='비밀번호 재확인'
				id='passwordConfirm'
				name='passwordConfirm'
				placeholder='비밀번호 재확인'
			/>
			<FormValidateMessage text={validationMessage.password} />
		</fieldset>
	)
}

function PersonalRegisterFieldset({ isBuyer, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<FormInput label='이름' id='name' name='name' placeholder='이름' />
			<FormInput
				type='phonenumber'
				label='휴대폰'
				id='phoneNumber'
				name='phoneNumber'
				placeholder='휴대폰'
			/>
			<FormInput label='이메일' id='email' name='email' placeholder='이메일' />
			{isBuyer && (
				<FormInput
					type='checkbox'
					id='termsAgree'
					name='termsAgree'
					info={
						<>
							<Link to='.' className='terms'>
								이용약관
							</Link>{' '}
							및{' '}
							<Link to='.' className='terms'>
								개인정보처리방침
							</Link>
							에 대한 내용을 확인하였고 이에 동의합니다.
						</>
					}
				/>
			)}
		</fieldset>
	)
}

function SellerRegisterFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>판매자 정보</legend>
			<FormInput
				label='브랜드명'
				id='brandName'
				name='brandName'
				placeholder='브랜드명'
			>
				<Button style={{ position: 'relative', bottom: '0.25rem' }}>
					중복 확인
				</Button>
			</FormInput>
			<FormValidateMessage text={validationMessage.brand} className='invalid' />
			<FormInput
				label='사업자등록번호'
				id='businessNumber'
				name='businessNumber'
				placeholder='사업자등록번호'
			/>
		</fieldset>
	)
}

function AccountLoginFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput label='아이디' id='id' name='id' placeholder='아이디' />
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
			/>
			<FormValidateMessage text={validationMessage.password} />
		</fieldset>
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
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '로그인' : '셀러 로그인'}
			>
				<StyledForm method='POST'>
					<AccountLoginFieldset
						onBlur={() => {}}
						// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
						// 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
						// 양식에 밸리데이션 문제 있으면 전송 불가함
						// 전송 보낸 후, 일치하는 계정 없으면 메시지
						// 전송 보낸 후, 유저 유형이 다를 때 메시지
						validationMessage={{
							password: (
								<>
									<span className={0 ? 'valid' : ''}>영문 ✓</span>
									<span className={0 ? 'valid' : ''}>숫자 ✓</span>
									<span className={0 ? 'valid' : ''}>특수문자 ✓</span>
									<span className={0 ? 'valid' : ''}>8-16자 ✓</span>
								</>
							),
						}}
					/>
					<Flexbox $direction='row'>
						<Button
							$style='secondary'
							type='button'
							onClick={() => navigate('../signup')}
						>
							회원가입
						</Button>
						<Button type='submit'>로그인</Button>
					</Flexbox>
					<ButtonField {...{ isBuyer }} />
				</StyledForm>
			</FormSection>
		)
	} else if (type === 'signup') {
		return (
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '회원가입' : '셀러 회원가입'}
			>
				<StyledForm method='POST'>
					<AccountRegisterFieldset
						onBlur={() => {}}
						// blur시 인풋 트리밍 값이 isEntered인지 확인, 전송 버튼 누르면 인풋 포커싱
						// 키 입력할 때마다 비밀번호 양식 검사하고 아래 메시지 컬러(pw)
						// 핸드폰 번호는 010으로 시작하는 10~11자리 숫자로만
						// 이메일 양식에 맞아야 함
						// (셀러) 사업자번호는 10자리로 이루어진 숫자
						// (셀러) 브랜드명은 중복 불가
						// 양식에 밸리데이션 문제 있으면 전송 불가함
						// 전송 보낸 후, 일치하는 계정 없으면 메시지
						// 전송 보낸 후, 유저 유형이 다를 때 메시지
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
					{isBuyer || (
						<SellerRegisterFieldset
							validationMessage={{
								brand: '이미 사용 중인 브랜드명입니다.',
							}}
						/>
					)}
					<Flexbox $direction='row' style={{ marginTop: '1em' }}>
						<Button
							$style='secondary'
							type='button'
							onClick={() => navigate('../signin')}
						>
							로그인
						</Button>
						<Button type='submit'>회원가입</Button>
					</Flexbox>
					<ButtonField {...{ isBuyer }} />
				</StyledForm>
			</FormSection>
		)
	}
}

export { AuthForm }
