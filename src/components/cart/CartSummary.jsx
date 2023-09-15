import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { updateToCart } from '../../lib/api'
import { formatNumber } from '../../lib/utils/text-formatter'
import { setOrderItems } from '../../lib/utils/storage'
import { StyledArticle, Wrapper, StyledFlexbox } from './CartSummary.style'
import useStore from '../../store'

function CartSummary({ ...props }) {
	const initialState = {
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalQuantity: 0,
		totalPayment: 0,
	}
	const navigate = useNavigate()
	const [summary, setSummary] = useState(initialState)
	const { cart, isSelectAll, initCartStore } = useStore()

	useEffect(() => {
		let {
			totalProductPrice,
			totalShippingFee,
			totalDiscount,
			totalQuantity,
			totalPayment,
		} = initialState

		for (const productId in cart) {
			const product = cart[productId]
			if (product.isActive && !product.isSoldout) {
				totalProductPrice += product.price * product.qty
				totalShippingFee += product.shippingFee
				totalDiscount += product.discount
				totalQuantity += 1
			}
		}
		totalPayment += totalProductPrice + totalShippingFee - totalDiscount

		setSummary({
			totalProductPrice,
			totalShippingFee,
			totalDiscount,
			totalQuantity,
			totalPayment,
		})
	}, [cart, isSelectAll])

	const orderHandler = () => {
		const activeCartArr = Object.entries(cart).filter(([productId, item]) => {
			updateToCart(item.cartItemId, {
				product_id: productId,
				quantity: item.qty,
				is_active: item.isActive,
			})

			return item.isActive
		})

		const activeCart = Object.fromEntries(activeCartArr)
		// const activeCart = Object.fromEntries(
		// 	Object.entries(cart).filter(([_, item]) => item.isActive)
		// )

		if (!Object.keys(activeCart).length) {
			alert('선택하신 상품이 없습니다.')
			return
		}

		const hasZeroQty = Object.values(activeCart).some(item => item.qty < 1)
		if (hasZeroQty) {
			alert('상품의 수량을 확인해주세요.')
			return
		}

		let activeItems = []
		for (const productId in activeCart) {
			const { isSoldout, stock, qty } = cart[productId]
			const isExceededStock = !isSoldout && qty > stock

			if (isSoldout || isExceededStock) {
				alert('품절 또는 재고 초과 상품이 있는지 확인해주세요.')
				return
			}

			// activeItems.push({ productId: qty })
			activeItems.push([productId, qty])
		}

		const cartInfo = {
			order_kind: 'cart_order',
			cart: activeItems,
		}

		setOrderItems(cartInfo)

		initCartStore()

		return navigate('/checkout')
	}

	return (
		<StyledArticle {...props}>
			<Wrapper>
				<StyledFlexbox>
					<h2>CART INFO</h2>
				</StyledFlexbox>
				<dl>
					<StyledFlexbox>
						<dt>총 주문 금액</dt>
						<dd>
							<strong>{formatNumber(summary.totalProductPrice)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 배송비</dt>
						<dd>
							<strong>{formatNumber(summary.totalShippingFee)}</strong>원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 할인 금액</dt>
						<dd>
							<strong>{formatNumber(summary.totalDiscount)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
				<dl>
					<StyledFlexbox>
						<dt>총 결제 금액</dt>
						<dd>
							<strong>{formatNumber(summary.totalPayment)}</strong>원
						</dd>
					</StyledFlexbox>
				</dl>
			</Wrapper>
			<StyledFlexbox>
				<div className='amount-box'>
					총 <strong>{summary.totalQuantity}</strong>개
				</div>
				<Button name='submitter' onClick={orderHandler}>
					주문하기
				</Button>
			</StyledFlexbox>
		</StyledArticle>
	)
}

export { CartSummary }
