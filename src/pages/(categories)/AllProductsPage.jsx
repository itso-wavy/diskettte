import { ProductList, ProductItem } from '../../components/product'
// import { Wrapper } from './AllProductsPage.style'

const products = [
	{
		id: 0,
		brand: '체리쥬빌레 체리쥬빌레체',
		src: '/assets/images/socks/SDS116-7300.jpg',
		name: '양말',
		price: '3000',
		url: '/',
		stock: 1,
	},
	{
		id: 1,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbbbbbbbb tlbbbbbbbbbbbbbbbtlbbbbbbbbbbbbbb bbbbbbbbtlbbbbbbb',
		price: '50000',
		url: '/',
		stock: 0,
	},
	{
		id: 2,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbb',
		price: '50000',
		url: '/',
		stock: 2,
	},
	{
		id: 3,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbb',
		price: '50000',
		url: '/',
		stock: 2,
	},
	{
		id: 4,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbb',
		price: '50000',
		url: '/',
		stock: 2,
	},
	{
		id: 5,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbb',
		price: '50000',
		url: '/',
		stock: 2,
	},
	{
		id: 6,
		brand: 'abcde',
		src: '/assets/images/eql/28_31057_1_KOR_20230530100030.jpg',
		name: 'deantlbbbbbbbbbbb',
		price: '50000',
		url: '/',
		stock: 2,
	},
]

export default function AllProductsPage() {
	return (
		<>
			<section aria-labelledby='product list'>
				<h2 className='sr-only' id='product list'>
					product list
				</h2>
				<ProductList>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</ProductList>
			</section>
		</>
	)
}
