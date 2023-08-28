import { Link, json, useLoaderData } from 'react-router-dom'
import { FormProvider } from '../../context/form-context'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Card } from '../../components/@motion'
import { Badge } from '../../components/@ui/Badge'
import { Tabs } from '../../components/@ui/Tabs'
import { DropdownSvg } from '../../components/@svg/DropdownSvg'
import { ProductForm } from '../../components/product'
import {
	LayoutWrapper,
	OverviewWrapper,
	KeyInfo,
	PricingInfo,
	DescriptionWrapper,
} from './ProductPage.style'
import { api, clientAPI } from '../../lib/api'
// import axios from 'axios'

export const productLoader = async ({ request, params }) => {
	const { productId } = params

	const client = clientAPI(`products/${productId}`)

	const success = res => res.data
	const error = () => {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}

	return api(client)(success, error)

	// const response = await axios(
	// 	`https://openmarket.weniv.co.kr/products/${productId}/`
	// )

	// try {
	// 	if (response.status === 200) return response.data
	// } catch (err) {
	// 	throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	// }
}

export function ProductPage() {
	const headerHeight = useHeaderHeight()
	const product = useLoaderData()
	const { store_name, product_name, image, price, product_info } = product

	const productTabs = [
		{ title: '상세', content: product_info },
		{ title: '리뷰', content: null },
		{ title: 'Q&A', content: null },
		{ title: '반품/교환정보', content: null },
	]

	useTitle(product_name)

	return (
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
						<h2 className='product-name'>{product_name}</h2>
						<p className='product-price'>
							{new Intl.NumberFormat('ko-KR', {
								style: 'decimal',
							}).format(price)}
							<span className='currency'>원</span>
						</p>
					</KeyInfo>
					<PricingInfo>
						<FormProvider initialState={{ qty: 1 }}>
							<ProductForm product={product} />
						</FormProvider>
					</PricingInfo>
				</Card>
			</OverviewWrapper>
			<DescriptionWrapper>
				<Tabs tabs={productTabs} />
			</DescriptionWrapper>
		</LayoutWrapper>
	)
}

export const paymentAction = async ({ request, params }) => {
	const productId = params.productId

	const client = clientAPI(`seller/cart`)
	const success = () => {
		const cartData = {
			productName: response.get('id'),
			productAmount: response.get('password'),
			productPrice: response.get('password'),
		}
		// FIXME:
		return null
	}
	const error = () => {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}

	return api(client)(success, error)

	// const response = await axios(`https://openmarket.weniv.co.kr/seller/cart`)

	// const cartData = {
	// 	productName: response.get('id'),
	// 	productAmount: response.get('password'),
	// 	productPrice: response.get('password'),
	// }

	// if (!response.ok)
	// 	throw json({ messege: 'could not delete event' }, { status: 500 })

	// console.log(authData)

	// return null
}
