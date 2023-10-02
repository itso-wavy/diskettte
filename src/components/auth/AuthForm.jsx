import { useState, useEffect } from 'react'
import {
	Form,
	Link,
	useActionData,
	useNavigate,
	useSearchParams,
} from 'react-router-dom'
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
	const response = useActionData()
	const [searchParams] = useSearchParams()
	const userParam = searchParams.get('user')
	const [isBuyer, setIsBuyer] = useState(userParam !== 'seller')
	// const [initialState, setInitialState] = useState({ id: '', password: '' })
	useEffect(() => {
		setIsBuyer(userParam !== 'seller')
	}, [userParam])

	const serverMessages = {
		loginFail:
			response?.FAIL_Message &&
			'아이디, 비밀번호 또는 계정 유형이 일치하지 않습니다.',
		id: response?.username?.[0],
		phoneNumber: response?.phone_number?.[0],
		businessNumber: response?.company_registration_number?.[0],
		brandName: response?.store_name?.[0],
	}

	if (type === 'signin') {
		const initialState = { id: '', password: '' }

		return (
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '로그인' : '셀러 로그인'}
			>
				<FormProvider initialState={initialState}>
					<Form method='POST'>
						<AccountLoginFieldset serverMessage={serverMessages.loginFail} />
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
					</Form>
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
					termsAgree: '',
			  }
			: {
					id: '',
					password: '',
					passwordConfirm: '',
					username: '',
					phoneNumber: '',
					email: '',
					businessNumber: '',
					brandName: '',
			  }

		// useEffect(() => {
		// 	isBuyer
		// 		? setInitialState({
		// 				id: '',
		// 				password: '',
		// 				passwordConfirm: '',
		// 				username: '',
		// 				phoneNumber: '',
		// 				email: '',
		// 				termsAgree: '',
		// 		  })
		// 		: setInitialState({
		// 				id: '',
		// 				password: '',
		// 				passwordConfirm: '',
		// 				username: '',
		// 				phoneNumber: '',
		// 				email: '',
		// 				businessNumber: '',
		// 				brandName: '',
		// 		  })
		// }, [isBuyer])

		return (
			<FormSection
				id={`${type} form`}
				title={isBuyer ? '회원가입' : '셀러 회원가입'}
			>
				<FormProvider initialState={initialState}>
					<Form method='POST'>
						<AccountRegisterFieldset serverMessage={serverMessages.id} />
						<PersonalInfoRegisterFieldset
							serverMessage={serverMessages.phoneNumber}
							{...{ isBuyer }}
						/>
						{isBuyer || (
							<SellerInfoRegisterFieldset
								serverMessage={{
									businessNumber: serverMessages.businessNumber,
									brandName: serverMessages.brandName,
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
							<SubmitButton>회원가입</SubmitButton>
						</Flexbox>
						<LinkField {...{ isBuyer }} />
					</Form>
				</FormProvider>
			</FormSection>
		)
	}
}

export { AuthForm }
