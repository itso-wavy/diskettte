import { useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { ProductList, ProductItem } from '../../components/product'
import { Wrapper } from './ExclusivePage.style'

export function ExclusivePage() {
	useTitle('Exclusive')

	return (
		<>
			<Section sectionId='exclusiveHero' sectionTitle='exclusive hero'>
				<Wrapper $bg='/public/assets/images/chrome-spring.png'></Wrapper>
			</Section>
			<section aria-labelledby='product list'>
				<h2 className='sr-only' id='product list'>
					product list
				</h2>
				<ProductList>
					{/* {products.map(product => (
						<ProductItem key={product.id} product={product} />
					))} */}
				</ProductList>
			</section>
		</>
	)
}
