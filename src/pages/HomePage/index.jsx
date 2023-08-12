import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useHeaderHeight } from '../../hooks'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	// CarouselIndicator,
	PagenationIndicator,
} from '../../components/@ui/Carousel'
import { Section } from '../../components/@ui/Section'
import { Card, RotatedFigureCard } from '../../components/@ui/Card'
import {
	MinusPaddedWrapper,
	// StyledSection,
	// Heading,
	Hero,
	ListWrapper,
	PaddedWrapper,
	ItemWrapper,
	PreviewMotion,
} from './HomePage.style'
import useStore from '../../store'
import { banners, brands } from '../../lib/utils/dummyData'

export function HomePage() {
	const navigate = useNavigate()
	const headerHeight = useHeaderHeight()
	const { isMobile, isTablet } = useStore()
	const BrandsChunk = []
	const [brandsPerScreen, setBrandsPerScreen] = useState(3)

	const createArrChunk = useCallback((targetArr, brankArr, n) => {
		for (let i = 0; i < targetArr.length; i += n) {
			brankArr.push(targetArr.slice(i, i + n))
		}
	}, [])

	useEffect(() => {
		setBrandsPerScreen(isMobile ? 4 : isTablet ? 6 : 8)
		// setBrandsPerScreen(isMobile ? 2 : isTablet ? 3 : 4)
	}, [isMobile, isTablet])

	createArrChunk(brands, BrandsChunk, brandsPerScreen)

	return (
		<MinusPaddedWrapper>
			<Section aria-labelledby='mainHero' $top={headerHeight}>
				<Hero initial='initial' whileInView='animate' variants={PreviewMotion}>
					<h2 id='mainHero'>
						Curated <span className='flower'>Pieces</span> for{' '}
						<span className='spring'>Diverse</span> Tastes
					</h2>
				</Hero>
			</Section>

			<Section sectionId='recommand' sectionTitle='recommand brands' $top='0'>
				<Carousel
					items={BrandsChunk}
					Arrows={NavigationArrows}
					Indicator={PagenationIndicator}
					$itemsPerScreen={brandsPerScreen}
				>
					{BrandsChunk.map((chunk, index) => (
						<CarouselItem
							key={index}
							// style={{ background: 'black', color: 'white' }}
						>
							<ListWrapper $itemsPerScreen={brandsPerScreen / 2}>
								{chunk.map(({ id, brand, url, src, alt }) => (
									<Link to={url} key={id}>
										<ItemWrapper>
											<RotatedFigureCard src={src} alt={alt}>
												{brand}
											</RotatedFigureCard>
										</ItemWrapper>
									</Link>
								))}
							</ListWrapper>
						</CarouselItem>
					))}
				</Carousel>
			</Section>
			{/* 
			<Section
				sectionId='exclusive'
				sectionTitle='exclusive articles'
				$top='0'
			></Section> */}
			{/* 
			<Section aria-labelledby='go to shopping'>
				<h2 className='sr-only' id='go to shopping'>
					title
				</h2>
				<PaddedWrapper>
					<p>SIGN UP FOR SMARTER SHOPPING</p>
					<Link to='/categories/all'>
						<Button
							// $style='secondary'
							aria-label='go to shopping'
						>
							쇼핑하러 가기
						</Button>
					</Link>
				</PaddedWrapper>
			</Section> */}
		</MinusPaddedWrapper>
	)
}

export const loading = () => {}
