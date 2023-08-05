import { useTitle } from '../../hooks'
import { ProductList, ProductItem } from '../../components/product'
import { products } from '../../lib/utils/dummyData'

export function BrandPage() {
	useTitle(`Brand`) // 동적 업데이트 예정

	return (
		<>
			<section aria-labelledby='brand banner'>
				<h2 className='sr-only' id='brand banner'>
					brand banner
				</h2>
				<div>
					<img
						src='/assets/images/eql/32_129_65_KOR_20230526112619.jpg'
						alt=''
					/>
				</div>
			</section>
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
