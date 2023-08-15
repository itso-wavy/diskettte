import { Link } from 'react-router-dom'
import { Card } from '../motion'
import { Badge } from '../@ui/Badge'
import {
	StyledUl,
	StyledLi,
	ProductImage,
	ProductInfo,
	ProductBrand,
	ProductName,
	ProductPrice,
} from './ProductList.style'

// function ProductButton({ product, onClick, children, ...props }) {
// 	const handleClick = () => {
// 		onClick(product)
// 	}

// 	return (
// 		<Button
// 			type='button'
// 			onClick={handleClick}
// 			aria-label='add to cart'
// 			{...props}
// 		>
// 			{children}
// 		</Button>
// 	)
// }
function ProductCardInfo({ brand, name, price, $soldout, ...props }) {
	return (
		<ProductInfo $soldout={$soldout} {...props}>
			{brand && <ProductBrand>{brand}</ProductBrand>}
			{name && <ProductName>{name}</ProductName>}
			{price && (
				<ProductPrice>
					{new Intl.NumberFormat('ko-KR', {
						style: 'decimal',
					}).format(price)}
					<span className='currency'>원</span>
				</ProductPrice>
			)}
		</ProductInfo>
	)
}

function ProductCardImg({ src, name, $soldout, ...props }) {
	return (
		<ProductImage $soldout={$soldout} {...props}>
			<span className={`img-cover`}>
				<img src={src} alt={name} />
			</span>
			{$soldout && (
				<Badge $style='secondary' text='SOLD OUT' className='badge' />
			)}
		</ProductImage>
	)
}

function ProductCard({ src, brand, name, price, $soldout, ...props }) {
	return (
		<Card {...props}>
			{src && <ProductCardImg {...{ src, name, $soldout }} />}
			<ProductCardInfo {...{ brand, name, price, $soldout }} />
		</Card>
	)
}

function ProductItem({ product, ...props }) {
	const {
		seller,
		store_name: brand,
		product_id,
		product_name: name,
		image: src,
		price,
		product_info,
		shipping_fee,
		shipping_method,
		stock,
		created_at,
		updated_at,
	} = product

	return (
		<StyledLi {...props}>
			<Link to={`/product/${product_id}`}>
				<ProductCard {...{ src, brand, name, price, $soldout: !stock }} />
			</Link>
		</StyledLi>
	)
}

function ProductList({ children, ...props }) {
	return <StyledUl {...props}>{children}</StyledUl>
}

export { ProductList, ProductItem, ProductCard }
