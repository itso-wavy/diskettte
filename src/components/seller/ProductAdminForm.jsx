import { useContext } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { FormContext, FormProvider } from '../../context/form-context'
import { SpanLabel } from '../@ui/Label'
import { Button } from '../@ui/Button'
import {
	Flexbox,
	FormInput,
	FormValidationMessage,
	SubmitButton,
} from '../@ui/Form'
import {
	StyledSection,
	OverviewWrapper,
	GridWrapper,
	ButtonsWrapper,
} from './ProductAdminForm.style.jsx'

function ProductAdminForm({ ...props }) {
	const navigate = useNavigate()
	const { errorMessages } = useContext(FormContext)

	return (
		<Form method='POST' {...props}>
			<OverviewWrapper>
				<div className='image-box'>
					<FormInput
						type='file-image'
						id='image'
						name='image'
						accept='.jpg, .gif, .png'
					/>
				</div>
				<GridWrapper className='info-box'>
					<SpanLabel id='productName' label='상품명' />
					<div className='shrink'>
						<FormInput id='productName' name='productName' />
						{errorMessages.productName && (
							<FormValidationMessage
								text={errorMessages.productName}
								className='invalid'
							/>
						)}
					</div>
					<SpanLabel id='sellingPrice' label='판매가(&#8361;)' />
					<div className='shrink'>
						<FormInput type='number' id='sellingPrice' name='sellingPrice' />
						{errorMessages.sellingPrice && (
							<FormValidationMessage
								text={errorMessages.sellingPrice}
								className='invalid'
							/>
						)}
					</div>
					<SpanLabel id='shippingMethod' label='배송 방법 선택' />
					<div className='shrink' style={{ marginBottom: '.5em' }}>
						<FormInput
							type='radio'
							option={[
								{ label: '직배송', value: 'PARCEL' },
								{ label: '택배배송', value: 'DELIVERY' },
							]}
							name='shippingMethod'
						/>
						{errorMessages.shippingMethod && (
							<FormValidationMessage
								text={errorMessages.shippingMethod}
								className='invalid'
								style={{ marginTop: '0.5rem' }}
							/>
						)}
					</div>
					<SpanLabel id='shippingFee' label='배송비(&#8361;)' />
					<div className='shrink'>
						<FormInput type='number' id='shippingFee' name='shippingFee' />
						{errorMessages.shippingFee && (
							<FormValidationMessage
								text={errorMessages.shippingFee}
								className='invalid'
							/>
						)}
					</div>
					<SpanLabel id='stock' label='재고' />
					<div className='shrink'>
						<FormInput type='number' id='stock' name='stock' />
						{errorMessages.stock && (
							<FormValidationMessage
								text={errorMessages.stock}
								className='invalid'
							/>
						)}
					</div>
					<SpanLabel id='productInfo' label='상품 상세' />
					<div>
						<FormInput type='textarea' id='productInfo' name='productInfo' />
						{errorMessages.productInfo && (
							<FormValidationMessage
								text={errorMessages.productInfo}
								className='invalid'
							/>
						)}
					</div>
					<ButtonsWrapper className='shrink'>
						<Flexbox $direction='row'>
							<Button
								$style='secondary'
								type='button'
								name='submitter'
								onClick={() => navigate(-1)}
							>
								취소
							</Button>
							<SubmitButton name='submitter' onClick={e => {}}>
								완료
							</SubmitButton>
						</Flexbox>
					</ButtonsWrapper>
				</GridWrapper>
			</OverviewWrapper>
		</Form>
	)
}

function ProductAdminFormSection({
	type,
	sectionId,
	sectionTitle,
	product,
	...props
}) {
	const initialState =
		type === 'create'
			? {
					productId: 0,
					productName: '',
					image: '',
					sellingPrice: '', // 변경 불가?
					shippingMethod: '',
					shippingFee: '',
					stock: '',
					productInfo: '',
			  }
			: product

	return (
		<StyledSection aria-labelledby={sectionId} {...props}>
			<h2 id={sectionId}>
				{sectionTitle}
				{type !== 'create' && (
					<Button $size='md' onClick={() => {}}>
						상품 삭제
					</Button>
				)}
			</h2>
			<FormProvider initialState={initialState}>
				<ProductAdminForm />
			</FormProvider>
		</StyledSection>
	)
}

export { ProductAdminFormSection, ProductAdminForm }
