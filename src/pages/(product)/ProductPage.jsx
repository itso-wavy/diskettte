import { useEffect, useMemo } from 'react'
import {
	Link,
	json,
	redirect,
	useActionData,
	useLoaderData,
	useNavigate,
} from 'react-router-dom'
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
import {
	getAuthToken,
	getAccountType,
	getCart,
	setOrderItems,
} from '../../lib/utils/getStorageInfo'
import useStore from '../../store'
// import axios from 'axios'

export const productLoader = async ({ request, params }) => {
	const { productId } = params
	const client = clientAPI(`products/${productId}`)

	const success = res => res.data
	const error = err => {
		throw json(
			{ message: err.response.statusText },
			{ status: err.response.status }
		)
	}

	return api(client)(success, error)

	/*	const response = await axios(
		`https://openmarket.weniv.co.kr/products/${productId}/`
	)

	try {
		if (response.status === 200) return response.data
	} catch (err) {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	} */
}

export function ProductPage() {
	const navigate = useNavigate()
	const headerHeight = useHeaderHeight()
	const product = useLoaderData()
	const newInCart = useActionData()
	const { addToCart } = useStore()

	useEffect(() => {
		if (newInCart) {
			addToCart(newInCart)

			confirm('장바구니에 상품을 담았습니다!\n장바구니로 이동하시겠습니까?')
				? navigate('/cart')
				: navigate('.')
		}
	}, [newInCart])

	const {
		seller: brandId,
		store_name: brandName,
		product_name,
		image,
		price,
		product_info,
	} = product

	const productTabs = useMemo(
		() => [
			{ title: '상세', content: product_info },
			{ title: '리뷰', content: null },
			{ title: 'Q&A', content: null },
			{ title: '반품/교환정보', content: null },
		],
		[product_info]
	)

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
							<p>{brandName.toUpperCase()}</p>
							<Link to={`/brand/${brandId}`}>
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
						<FormProvider
							initialState={{
								qty: 1,
							}}
						>
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

export const productAction = async ({ request, params }) => {
	const isSignedin = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedin) {
		return confirm(
			'구매 계정만 이용할 수 있는 서비스입니다.\n로그인 하시겠습니까?'
		)
			? redirect('/auth/signin')
			: redirect('')
	}
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('')
	}

	const productId = Number(params.productId)
	const data = await request.formData()
	const eventType = data.get('submitter')

	if (eventType === 'toCart') {
		const cart = getCart()
		const hasItemInCart = cart.some(item => item.product_id === productId)

		if (hasItemInCart) {
			return confirm('이미 추가한 상품입니다.\n장바구니로 이동하시겠습니까?')
				? redirect('/cart')
				: redirect('')
		}

		const cartItem = {
			product_id: productId,
			quantity: Number(data.get('qty')),
			check: !hasItemInCart,
		}

		const client = clientAPI.post('cart/', cartItem)

		const success = res => res.data
		const error = err => {
			throw json({ message: err.message }, { status: err.response.status })
		}

		return api(client)(success, error)
	}

	if (eventType === 'toOrder') {
		const cartItem = {
			product_id: productId,
			quantity: Number(data.get('qty')),
			order_kind: 'direct_order',
		}

		setOrderItems(cartItem)

		return redirect('/checkout')
	}

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
