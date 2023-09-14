import { useContext, useEffect, useRef } from 'react'
import { Link, useFetcher, useNavigate } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { Checkbox } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { Badge } from '../@ui/Badge'
import { QuantitySpinner } from '../product'
import DeleteImg from '/assets/icons/wavy_menu-close.svg'
import { setOrderItems } from '../../lib/utils/storage'
import { removeFromCart, updateToCart } from '../../lib/api'
import { formatNumber } from '../../lib/utils/number-formatter'
import {
	StyledLi,
	ProductImage,
	ProductInfo,
	ProductBrand,
	ProductName,
	ProductPrice,
	TotalPrice,
	StyledP,
} from './CartItem.style'
import useStore from '../../store'

function ShippingInfo({ shippingMethod, shippingFee, ...props }) {
	return (
		<StyledP {...props}>
			{shippingMethod === 'PARCEL' ? '직배송' : '택배배송'} / 배송비{' '}
			{shippingFee ? <strong>{formatNumber(shippingFee)}</strong> : '무료'}
		</StyledP>
	)
}

function OrderButton({ productId, ...props }) {
	const { cart, removeFormCartStore } = useStore()
	const navigate = useNavigate()

	const orderItemHandler = () => {
		const { isSoldout, stock, qty } = cart[productId]
		const isExceededStock = !isSoldout && qty > stock

		if (isSoldout || isExceededStock) {
			alert('품절 또는 재고 초과 상품이 있는지 확인해주세요.')
			return
		}

		removeFormCartStore(productId)

		const cartItem = {
			product_id: productId,
			quantity: qty,
			order_kind: 'cart_one_order',
		}

		setOrderItems(cartItem)

		return navigate('/checkout')
	}

	return (
		<Button type='button' onClick={orderItemHandler} {...props}>
			바로 구매
		</Button>
	)
}

function RemoveButton({ cartItemId, productId, ...props }) {
	const { removeFormCartStore } = useStore()

	const removeItemHandler = () => {
		removeFormCartStore(productId)
		removeFromCart(cartItemId)
	}

	return (
		<Button
			$type='icon'
			$img={DeleteImg}
			name='submitter'
			onClick={removeItemHandler}
			{...props}
		/>
	)
}

function CartItemInfo({
	cartItemId,
	brandId,
	brandName,
	productId,
	productName,
	price,
	stock,
	isSoldout,
	...props
}) {
	const spinnerRef = useRef()
	const { cart, updateCartStore } = useStore()
	const { values } = useContext(FormContext)
	const { qty } = values
	const isExceededStock = !isSoldout && qty > stock

	useEffect(() => {
		if (!cart[productId] || cart[productId].qty === qty) return

		updateCartStore({ productId, qty })

		const isActive = cart[productId].isActive
		const cartItem = {
			product_id: productId,
			quantity: qty,
			is_active: isActive,
		}

		updateToCart(cartItemId, cartItem)

		return undefined
	}, [qty])

	return (
		<ProductInfo $soldout={isSoldout} {...props}>
			<div className='text-cover'>
				{brandName && (
					<ProductBrand>
						<Link to={`/brand/${brandId}`}>{brandName}</Link>
					</ProductBrand>
				)}
				{productName && (
					<ProductName>
						<Link to={`/product/${productId}`}>{productName}</Link>
					</ProductName>
				)}
				{price && (
					<ProductPrice>
						{formatNumber(price)}
						<span className='currency'>원</span>
					</ProductPrice>
				)}
			</div>
			<div className='spinner'>
				<QuantitySpinner ref={spinnerRef} name='qty' stock={stock} />
				{isSoldout && <p className='out-of-stock'>품절되었습니다.</p>}
				{isExceededStock && (
					<p className='out-of-stock'>재고를 초과하였습니다.</p>
				)}
			</div>
			{price && (
				<TotalPrice>
					{isSoldout ? 0 : formatNumber(price * qty)}
					<span className='currency'>원</span>
				</TotalPrice>
			)}
		</ProductInfo>
	)
}

function CartItemImg({ productId, src, productName, isSoldout, ...props }) {
	return (
		<ProductImage $soldout={isSoldout} {...props}>
			<Link to={`/product/${productId}`}>
				<span className='img-cover'>
					<img src={src} alt={productName} />
				</span>
				{isSoldout && (
					<Badge $style='secondary' text='SOLD OUT' className='badge' />
				)}
			</Link>
		</ProductImage>
	)
}

function CartItem({ item, ...props }) {
	const fetcher = useFetcher()
	const checkboxRef = useRef()
	const { values } = useContext(FormContext)
	const qty = values.qty
	const {
		cart,
		isSelectAll,
		toggleAllSelected,
		initCartStore,
		addToCartStore,
		updateCartStore,
	} = useStore()

	const {
		cart_item_id: cartItemId,
		product_id: productId,
		product,
		is_active: isActive,
	} = item
	const {
		seller: brandId,
		store_name: brandName,
		product_name: productName,
		image,
		price,
		stock,
		shipping_method: shippingMethod,
		shipping_fee: shippingFee,
	} = product
	const isSoldout = !stock
	// const { data, state, formData, json, text, formMethod, formAction } = fetcher

	// useEffect(() => {
	//  // loaderData, actionData
	//  // idle, submitting, loading
	//  // formData
	// if (state === 'idle' && data?.message) {
	// 	window.alert(data.message)
	// }
	// }, [fetcher])

	useEffect(() => {
		addToCartStore({
			cartItemId,
			productId,
			isActive,
			isSoldout,
			price,
			stock,
			qty,
			shippingFee,
			discount: 0,
		})
		toggleAllSelected(true)
		// return () => initCartStore() // 객체라서 괜찮을지도
	}, [])

	useEffect(() => {
		checkboxRef.current.setSelected(isSelectAll)
	}, [isSelectAll])

	const onCheckHandler = () => {
		const checked = checkboxRef.current.checked
		updateCartStore({ productId, isActive: !checked })
		// checkboxRef.current.setSelected(!checked)
	}

	return (
		<StyledLi {...props}>
			<fetcher.Form method='POST'>
				<Checkbox
					className='checkbox'
					ref={checkboxRef}
					id={productId}
					name='isActive'
					// isActive={true}
					onClick={onCheckHandler}
				/>
				<CartItemImg
					className='img-box'
					productId={productId}
					src={image}
					productName={productName}
					isSoldout={isSoldout}
				/>
				<CartItemInfo
					className='info-box'
					{...{
						cartItemId,
						brandId,
						brandName,
						productId,
						productName,
						price,
						stock,
						isSoldout,
					}}
				/>
				<RemoveButton
					className='remove-btn'
					cartItemId={cartItemId}
					productId={productId}
				/>
				<OrderButton className='order-btn' productId={productId} />
			</fetcher.Form>
			<ShippingInfo shippingMethod={shippingMethod} shippingFee={shippingFee} />
		</StyledLi>
	)
}

export { CartItem }
