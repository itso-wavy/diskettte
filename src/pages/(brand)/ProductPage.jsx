import { Form, Link, json, useLoaderData } from 'react-router-dom'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Card, Section } from '../../components/@motion'
import { Badge } from '../../components/@ui/Badge'
import { DropdownSvg } from '../../components/@svg/DropdownSvg'
import { ProductForm, QuantitySpinner } from '../../components/product'
import {
	LayoutWrapper,
	OverviewWrapper,
	KeyInfo,
	FormWrapper,
	// StyledForm,
	// PricingInfo,
	ShippingInfo,
	DescriptionWrapper,
} from './ProductPage.style'
import axios from 'axios'
import { FormProvider } from '../../context/form-context'

export const productLoader = async ({ request, params }) => {
	const { productId } = params
	const response = await axios(
		`https://openmarket.weniv.co.kr/products/${productId}/`
	)

	try {
		if (response.status === 200) return response.data
	} catch (err) {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}
}

export function ProductPage() {
	const {
		seller,
		store_name,
		product_id,
		product_name,
		image,
		price,
		product_info,
		shipping_fee,
		shipping_method,
		stock,
		created_at,
		updated_at,
	} = useLoaderData()
	/* 
  seller: 405
  store_name: "anything else"
  product_id: 501
  product_name: "설산 아로마 디퓨저"
  image: "https://openmarket.weniv.co.kr/media/products/2023/04/18/B005189318.jpg"
  price: 18000
  product_info: "적은 용량으로 오랜 기간 동안 사용 가능한 고농축 프래그런스 오일입니다.\r\n- 은은한 발향: 2~3방울 (60일 사용 가능)\r\n- 넓은 발향: 4~5방울 (40일 사용 가능)"
  shipping_fee: 3000
  shipping_method: "PARCEL"
  stock: 0
  created_at: "2023-04-18T03:21:56.149250"
  updated_at: "2023-05-02T22:49:50.702972"
 */
	useTitle(product_name)
	const headerHeight = useHeaderHeight()

	return (
		<Section aria-labelledby='productDetail'>
			<LayoutWrapper>
				<OverviewWrapper $top={headerHeight}>
					<div className='image-box'>
						<img src={image} alt={product_name} />
					</div>

					<Card className='info-box'>
						<KeyInfo>
							<div className='brand-name'>
								<p>{store_name.toUpperCase()}</p>
								<Link to=''>
									<Badge $style='secondary' text='브랜드몰'>
										<DropdownSvg />
									</Badge>
								</Link>
							</div>
							<h2 className='product-name' id='productDetail'>
								{product_name}
							</h2>
							<p className='product-price'>
								{new Intl.NumberFormat('ko-KR', {
									style: 'decimal',
								}).format(price)}
								<span className='currency'>원</span>
							</p>
						</KeyInfo>
						<FormWrapper>
							<FormProvider initialState={{ qty: 1 }}>
								<ProductForm
									productName={product_name}
									shippingMethod={shipping_method}
									shippingFee={shipping_fee}
								/>
								{/* <Form action='post'>
									<div>
										<p className='amount-select'>{product_name}</p>
										<QuantitySpinner />
									</div>
									<div><p className='total-price'>총 상품 금액</p></div>

									<ShippingInfo>
										<p>배송 정보</p>
										<p>
											{shipping_method === 'PARCEL' ? '직배송' : '택배배송'} /
											배송비{' '}
											{shipping_fee ? (
												<strong>
													{new Intl.NumberFormat('ko-KR', {
														style: 'decimal',
													}).format(shipping_fee)}
												</strong>
											) : (
												'무료'
											)}
										</p>
										<p>
											<span>2일 이내</span> 출고 (주말, 공휴일 제외)
										</p>
									</ShippingInfo>
								</Form> */}
							</FormProvider>
						</FormWrapper>
						{/* <FormProvider initialState={{ qty: 1 }}>
							<StyledForm action='post'>
								<div>
									<p className='amount-select'>{product_name}</p>
									<QuantitySpinner />
								</div>
								<p className='total-price'></p>

								<ShippingInfo>
									<p>배송 정보</p>
									<p>
										{shipping_method === 'PARCEL' ? '직배송' : '택배배송'} /
										배송비{' '}
										{shipping_fee ? (
											<strong>
												{new Intl.NumberFormat('ko-KR', {
													style: 'decimal',
												}).format(shipping_fee)}
											</strong>
										) : (
											'무료'
										)}
									</p>
									<p>
										<span>2일 이내</span> 출고 (주말, 공휴일 제외)
									</p>
								</ShippingInfo>
							</StyledForm>
						</FormProvider> */}
					</Card>
				</OverviewWrapper>
				<DescriptionWrapper>
					<ul>
						<li tabIndex='1'>
							<p>{product_info}</p>
						</li>
						<li tabIndex='2'>리뷰</li>
						<li tabIndex='3'>Q&A</li>
						<li tabIndex='4'>반품/교환정보</li>
					</ul>
				</DescriptionWrapper>
			</LayoutWrapper>
		</Section>
	)
}
