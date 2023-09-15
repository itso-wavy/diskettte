import { Link } from 'react-router-dom'
import { Card } from '../@motion'
import { Badge } from '../@ui/Badge'
import { formatNumber } from '../../lib/utils/text-formatter'
import {
	Wrapper,
	StyledUl,
	StyledLi,
	ProductImage,
	ProductInfo,
	ProductBrand,
	ProductName,
	ProductPrice,
} from './ProductList.style'

function ProductCardInfo({ brand, name, price, $soldout, ...props }) {
	return (
		<ProductInfo $soldout={$soldout} {...props}>
			{brand && <ProductBrand>{brand}</ProductBrand>}
			{name && <ProductName>{name}</ProductName>}
			{price && (
				<ProductPrice>
					{formatNumber(price)}
					<span className='currency'>원</span>
				</ProductPrice>
			)}
		</ProductInfo>
	)
}

function ProductCardImg({ src, name, $soldout, ...props }) {
	return (
		<ProductImage $soldout={$soldout} {...props}>
			<span className='img-cover'>
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
		store_name: brand,
		product_id,
		product_name: name,
		image: src,
		price,
		stock,
	} = product

	return (
		<StyledLi {...props}>
			<Link to={`/product/${product_id}`}>
				<ProductCard {...{ src, brand, name, price, $soldout: !stock }} />
			</Link>
		</StyledLi>
	)
}

function ProductList({ pagination, children, ...props }) {
	return (
		<Wrapper>
			<StyledUl {...props}>{children}</StyledUl>
			{pagination}
		</Wrapper>
	)
}

export { ProductList, ProductItem, ProductCard }
