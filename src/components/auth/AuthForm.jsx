import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { FormProvider } from '../../context/form-context'
import { Button } from '../@ui/Button'
import { FormSection, Hr, SmallMenus, Flexbox, SubmitButton } from '../@ui/Form'
import {
	AccountLoginFieldset,
	AccountRegisterFieldset,
	PersonalInfoRegisterFieldset,
	SellerInfoRegisterFieldset,
	GoogleLoginButton,
	KakaotalkLoginButton,
	NaverLoginButton,
} from '.'
// import { GoogleLoginButton, KakaotalkLoginButton, NaverLoginButton } from '.'
import { StyledForm } from './AuthForm.style'

function LinkField({ isBuyer, ...props }) {
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

function AuthForm({ type }) {
	const navigate = useNavigate()
	const [searchparams] = useSearchParams()
	const userParam = searchparams.get('user')
	const [isBuyer, setIsBuyer] = useState(userParam !== 'seller')

	useEffect(() => {
		setIsBuyer(userParam !== 'seller')
	}, [userParam])

	if (type === 'signin') {
		const initialState = { id: '', password: '' }

		return (
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '로그인' : '셀러 로그인'}
			>
				<FormProvider initialState={initialState}>
					<StyledForm method='POST'>
						<AccountLoginFieldset
						// validationMessage={{
						// 	password: (
						// 		<>
						// 			<span className={0 ? 'valid' : ''}>영문 ✓</span>
						// 			<span className={0 ? 'valid' : ''}>숫자 ✓</span>
						// 			<span className={0 ? 'valid' : ''}>특수문자 ✓</span>
						// 			<span className={0 ? 'valid' : ''}>8-16자 ✓</span>
						// 		</>
						// 	),
						// }}
						/>
						<Flexbox $direction='row'>
							<Button
								$style='secondary'
								type='button'
								onClick={() => navigate('../signup')}
							>
								회원가입
							</Button>
							<SubmitButton>로그인</SubmitButton>
						</Flexbox>
						<LinkField {...{ isBuyer }} />
					</StyledForm>
				</FormProvider>
			</FormSection>
		)
	} else if (type === 'signup') {
		const initialState = isBuyer
			? {
					id: '',
					password: '',
					passwordConfirm: '',
					username: '',
					phoneNumber: '',
					email: '',
			  }
			: {
					id: '',
					password: '',
					passwordConfirm: '',
					username: '',
					phoneNumber: '',
					email: '',
					brandName: '',
					businessNumber: '',
			  }

		return (
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '회원가입' : '셀러 회원가입'}
			>
				<FormProvider initialState={initialState}>
					<StyledForm method='POST'>
						<AccountRegisterFieldset
						// validationMessage={{
						// 	id: '이미 사용 중인 아이디입니다.',
						// 	password: (
						// 		<>
						// 			<span className={0 ? 'valid' : ''}>영문 ✓</span>
						// 			<span className={0 ? 'valid' : ''}>숫자 ✓</span>
						// 			<span className={0 ? 'valid' : ''}>특수문자 ✓</span>
						// 			<span className={1 ? 'valid' : ''}>8-16자 ✓</span>
						// 			<span className={1 ? 'valid' : ''}>비밀번호 일치 ✓</span>
						// 		</>
						// 	),
						// }}
						/>
						<PersonalInfoRegisterFieldset {...{ isBuyer }} />
						{isBuyer || (
							<SellerInfoRegisterFieldset
							// validationMessage={{
							// 	brand: '이미 사용 중인 브랜드명입니다.',
							// }}
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
							<SubmitButton>회원가입</SubmitButton>
						</Flexbox>
						<LinkField {...{ isBuyer }} />
					</StyledForm>
				</FormProvider>
			</FormSection>
		)
	}
}

export { AuthForm }
