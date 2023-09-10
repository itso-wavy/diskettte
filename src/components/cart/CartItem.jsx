import { useContext, useEffect, useRef } from 'react'
import { Form, Link, useFetcher, useSubmit } from 'react-router-dom'
import { FormContext } from '../../context/form-context'
import { Checkbox } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { Badge } from '../@ui/Badge'
import { QuantitySpinner } from '../product'
import DeleteImg from '/assets/icons/wavy_menu-close.svg'
import { formatNumber } from '../../lib/utils/number-formatter'
import { updateToCart } from '../../lib/api'
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
	const orderItemHandler = e => {
		e.target.value = 'orderDirectly'
	}

	return (
		<Button name='submitter' onClick={orderItemHandler} {...props}>
			바로 구매
		</Button>
	)
}

function RemoveButton({ productId, ...props }) {
	// const submit = useSubmit()
	// const { cart, removeFormCartStore } = useStore()

	const removeItemHandler = e => {
		// removeFormCartStore(productId)
		// console.log(cart)
		// e.target.value = 'toCart'
		// submit('data') // TODO:
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
	brandId,
	brandName,
	productId,
	productName,
	price,
	stock,
	submit,
	...props
}) {
	// const submit = useSubmit()
	const { updateCartStore } = useStore()
	const spinnerRef = useRef()
	const { values } = useContext(FormContext)
	const { cartItemId, qty, isActive } = values
	const isSoldout = !stock
	const isExceededStock = !isSoldout && qty > stock

	useEffect(() => {
		updateCartStore({ product_id: productId, qty })
	}, [qty])

	// const modifyQtyHandler = () => {
	// 	const formData = values
	// 	formData.submitter = 'modifyQty'

	// 	submit(formData, { method: 'post' })
	// }

	const modifyQtyHandler = () => {
		// const formData = values
		// formData.submitter = 'modifyQty'

		// submit(formData, { method: 'post' })

		const { cartItemId, productId, qty, isActive } = values

		const cartItem = {
			product_id: productId,
			quantity: qty,
			is_active: isActive,
		}

		updateToCart(cartItemId, cartItem)

		return null
	}

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
				<QuantitySpinner
					ref={spinnerRef}
					name='qty'
					stock={stock}
					onClick={modifyQtyHandler}
				/>
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

function CartItemImg({ productId, src, productName, $soldout, ...props }) {
	return (
		<ProductImage $soldout={$soldout} {...props}>
			<Link to={`/product/${productId}`}>
				<span className='img-cover'>
					<img src={src} alt={productName} />
				</span>
				{$soldout && (
					<Badge $style='secondary' text='SOLD OUT' className='badge' />
				)}
			</Link>
		</ProductImage>
	)
}

function CartItem({ item, ...props }) {
	const fetcher = useFetcher()
	const { data, state, formData, json, text, formMethod, formAction } = fetcher
	const submit = () => fetcher.submit()

	// useEffect(() => {
	// console.log(data) // loaderData, actionData
	// console.log(state) // idle, submitting, loading
	// console.log(formData) // formData
	// if (state === 'idle' && data?.message) {
	// 	window.alert(data.message)
	// }
	// }, [fetcher])

	const checkboxRef = useRef()
	const { isSelectAll, addToCartStore, updateCartStore } = useStore()
	const { values } = useContext(FormContext)
	const qty = values.qty

	const { cart_item_id, product_id, product } = item
	const {
		seller: brandId,
		store_name: brandName,
		product_name,
		image,
		price,
		stock,
		shipping_method,
		shipping_fee,
	} = product

	useEffect(() => {
		addToCartStore({
			// cart_item_id,
			product_id,
			is_active: true,
			price,
			qty,
			shipping_fee,
			discount: 0,
		})
	}, [])

	useEffect(() => {
		checkboxRef.current.setSelected(isSelectAll)
	}, [isSelectAll])

	const onCheckHandler = () => {
		const checked = checkboxRef.current.checked
		updateCartStore({ product_id, is_active: !checked })
		checkboxRef.current.setSelected(!checked)
	}

	return (
		<StyledLi {...props}>
			<fetcher.Form method='POST'>
				<Checkbox
					className='checkbox'
					ref={checkboxRef}
					id={product_id}
					name='isActive'
					onClick={onCheckHandler}
				/>
				<CartItemImg
					className='img-box'
					productId={product_id}
					src={image}
					productName={product_name}
					$soldout={!stock}
				/>
				<CartItemInfo
					className='info-box'
					brandId={brandId}
					brandName={brandName}
					productId={product_id}
					productName={product_name}
					price={price}
					stock={stock}
					submit={submit}
				/>
				<RemoveButton className='remove-btn' productId={product_id} />
				<OrderButton className='order-btn' productId={product_id} />
			</fetcher.Form>
			<ShippingInfo
				shippingMethod={shipping_method}
				shippingFee={shipping_fee}
			/>
		</StyledLi>
	)
}

export { CartItem }
