import { Link, useFetcher, useSubmit } from 'react-router-dom'
import { Checkbox } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { Badge } from '../@ui/Badge'
import { QuantitySpinner } from '../product'
import DeleteImg from '/assets/icons/wavy_menu-close.svg'
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

function ShippingInfo({ shippingMethod, shippingFee, ...props }) {
	return (
		<StyledP {...props}>
			{shippingMethod === 'PARCEL' ? '직배송' : '택배배송'} / 배송비{' '}
			{shippingFee ? (
				<strong>
					{new Intl.NumberFormat('ko-KR', {
						style: 'decimal',
					}).format(shippingFee)}
				</strong>
			) : (
				'무료'
			)}
		</StyledP>
	)
}

function OrderButton({ productId, ...props }) {
	const submit = useSubmit()

	const orderItemHandler = e => {
		e.target.value = 'toCart'
		submit('data') // TODO:
	}

	return (
		<Button
			name='submitter'
			onClick={orderItemHandler}
			// style={{ marginTop: 'auto' }}
			{...props}
		>
			바로 구매
		</Button>
	)
}

function RemoveButton({ productId, ...props }) {
	// const {isMobile} = useStore()
	const submit = useSubmit()

	const removeItemHandler = e => {
		e.target.value = 'toCart'
		submit('data') // TODO:
	}

	return (
		<Button
			$type='icon'
			$img={DeleteImg}
			name='submitter'
			onClick={removeItemHandler}
			// style={{ marginLeft: 'auto' }}
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
	...props
}) {
	return (
		<ProductInfo $soldout={!stock} {...props}>
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
					{new Intl.NumberFormat('ko-KR', {
						style: 'decimal',
					}).format(price)}
					<span className='currency'>원</span>
				</ProductPrice>
			)}
			<div className='spinner'>
				<QuantitySpinner name={productName} stock={stock} />
			</div>
			{price && (
				<TotalPrice>
					{new Intl.NumberFormat('ko-KR', {
						style: 'decimal',
					}).format(price * 2)}
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
	// const submit = useSubmit()
	const fetcher = useFetcher()
	const { product_id, is_active, product } = item
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
	// TODO:
	// - 1. UI 먼저 ! 만들기
	//  품절 상품 알리기! '이 상품은 품절입니다.'
	// - 2. 카트 데이터 전송 가능 형태로 가공하기- SPINNER가 동작하도록
	//  form 없이 form context 사용하기?
	// - 3. 체크박스 기능 정상화 하기

	return (
		<StyledLi {...props}>
			<fetcher.Form>
				<Checkbox className='checkbox' checked={is_active} />
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
