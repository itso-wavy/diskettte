import { Link } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { FormInput, FormValidateMessage } from '../@ui/Form'
import validate from '../../lib/validation'

function AccountLoginFieldset({ validationMessage, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>계정 정보</legend>
			<FormInput
				label='아이디'
				id='id'
				name='id'
				placeholder='아이디'
				validateFn={validate('id')}
			/>
			<FormInput
				label='비밀번호'
				id='password'
				name='password'
				placeholder='비밀번호'
				validateFn={validate('password')}
			/>
			<FormValidateMessage text={validationMessage.password} />
		</fieldset>
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

function PersonalInfoRegisterFieldset({ isBuyer, ...props }) {
	return (
		<fieldset {...props}>
			<legend className='sr-only'>개인 정보</legend>
			<FormInput
				label='이름'
				id='username'
				name='username'
				placeholder='이름'
			/>
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

function SellerInfoRegisterFieldset({ validationMessage, ...props }) {
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
				type='number'
				placeholder='사업자등록번호'
			/>
		</fieldset>
	)
}

export {
	AccountLoginFieldset,
	AccountRegisterFieldset,
	PersonalInfoRegisterFieldset,
	SellerInfoRegisterFieldset,
}
