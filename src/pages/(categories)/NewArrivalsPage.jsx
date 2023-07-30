import { ProductList, ProductItem } from '../../components/product'
import { products } from '../../lib/utils/dummyData'

export function NewArrivalsPage() {
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
