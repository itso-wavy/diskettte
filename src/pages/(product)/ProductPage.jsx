import { useMemo } from 'react'
import { Link, redirect, useLoaderData } from 'react-router-dom'
import { FormProvider } from '../../context/form-context'
import { useHeaderHeight, useTitle } from '../../hooks'
import { Card } from '../../components/@motion'
import { Badge } from '../../components/@ui/Badge'
import { Tabs } from '../../components/@ui/Tabs'
import { DropdownSvg } from '../../components/@svg/DropdownSvg'
import { ProductOrderForm } from '../../components/product'
import { getCart, addToCart, getProduct } from '../../lib/api'
import {
	getAuthToken,
	getAccountType,
	setOrderItems,
} from '../../lib/utils/storage'
import { formatPrice } from '../../lib/utils/text-formatter'
import {
	LayoutWrapper,
	OverviewWrapper,
	KeyInfo,
	PricingInfo,
	DescriptionWrapper,
} from './ProductPage.style'

export const productDetailLoader = async ({ request, params }) => {
	const { productId } = params

	return getProduct(productId)
}

export function ProductPage() {
	const headerHeight = useHeaderHeight()
	const product = useLoaderData()

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
					<img src={image} alt={product_name} loading='lazy' />
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
							{formatPrice(price)}
							<span className='currency'>원</span>
						</p>
					</KeyInfo>
					<PricingInfo>
						<FormProvider
							initialState={{
								qty: 1,
							}}
						>
							<ProductOrderForm product={product} />
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
	const isSignedIn = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedIn) {
		return confirm(
			'구매 계정만 이용할 수 있는 서비스입니다.\n로그인 하시겠습니까?'
		)
			? redirect('/auth/signin')
			: null
	}
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return null
	}

	const productId = Number(params.productId)
	const data = await request.formData()
	const eventType = data.get('submitter')

	if (eventType === 'toCart') {
		const cart = await getCart()
		const hasItemInCart = cart.some(item => item.product_id === productId)

		if (hasItemInCart) {
			return confirm('이미 추가한 상품입니다.\n장바구니로 이동하시겠습니까?')
				? redirect('/cart')
				: null
		}

		const cartItem = {
			product_id: productId,
			quantity: Number(data.get('qty')),
			check: !hasItemInCart,
		}

		addToCart(cartItem)

		return confirm(
			'장바구니에 상품을 담았습니다!\n장바구니로 이동하시겠습니까?'
		)
			? redirect('/cart')
			: null
	}

	if (eventType === 'toOrder') {
		const cartItem = {
			product_id: productId,
			quantity: Number(data.get('qty')),
			order_kind: 'direct_order',
			// total_price:
		}

		setOrderItems(cartItem)

		return redirect('/checkout')
	}
}
