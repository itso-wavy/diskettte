import { useTitle } from '../../hooks'
import { Section } from '../../components/@ui/Section'
import { ProductList, ProductItem } from '../../components/product'
import { products } from '../../lib/utils/dummyData'
import { Wrapper } from './ExclusivePage.style'

export function ExclusivePage() {
	useTitle('Exclusive')

	return (
		<>
			<Section sectionId='exclusiveHero' sectionTitle='exclusive hero'>
				<Wrapper $bg='/public/assets/images/eql/32_129_65_KOR_20230526112619.jpg'></Wrapper>
			</Section>
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
