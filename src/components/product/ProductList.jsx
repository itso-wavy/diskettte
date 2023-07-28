import { Link } from 'react-router-dom'
import { Card } from '../@ui/Card'
import {
	StyledUl,
	StyledLi,
	ProductImage,
	ProductInfo,
	ProductBrand,
	ProductName,
	ProductPrice,
} from './ProductList.style'
import { Badge } from '../@ui/Badge'

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
						style: 'currency',
						currency: 'KRW',
					}).format(price)}
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
	const { url, src, brand, name, price, stock } = product

	return (
		<StyledLi {...props}>
			<Link to={url}>
				<ProductCard {...{ src, brand, name, price, $soldout: !stock }} />
			</Link>
		</StyledLi>
	)
}

function ProductList({ children, ...props }) {
	return <StyledUl {...props}>{children}</StyledUl>
}

export { ProductList, ProductItem, ProductCard }

/* 
function App() {
  const { addToCart } = useProduct(product);

  return (
    <ProductCard
      product={arr}
      image={<ProductImage />}
      info={
        <ProductInfo>
          <ProductPrice />
        </ProductInfo>
      }
      action={
        <ProductButton onClick={addToCart}>Add to cart</ProductButton>
      }
    />
  );
}
 */
