import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
	PagenationIndicator,
} from '../../components/@ui/Carousel'
import { Hero } from '../../components/@ui/Hero'
import { Button } from '../../components/@ui/Button'
import { RotatedFigureCard } from '../../components/@ui/Card'
import {
	MinusPaddedWrapper,
	StyledSection,
	Heading,
	ListWrapper,
	PaddedWrapper,
	ItemWrapper,
} from './HomePage.style'
import useStore from '../../store'
import { banners, brands } from '../../lib/utils/dummyData'

export function HomePage() {
	const { isMobile, isTablet } = useStore()
	const BrandsChunk = []
	const [brandsPerScreen, setBrandsPerScreen] = useState(3)

	const createArrChunk = useCallback((targetArr, brankArr, n) => {
		for (let i = 0; i < targetArr.length; i += n) {
			brankArr.push(targetArr.slice(i, i + n))
		}
	}, [])

	useEffect(() => {
		setBrandsPerScreen(isMobile ? 2 : isTablet ? 3 : 4)
	}, [isMobile, isTablet])

	createArrChunk(brands, BrandsChunk, brandsPerScreen)

	return (
		<MinusPaddedWrapper>
			<Hero sectionTitle='main hero'>
				<Carousel
					items={banners}
					autoSlideInterval={3000}
					Arrows={NavigationArrows}
					Indicator={CarouselIndicator}
				>
					{banners.map(
						({ id, url, src, alt, ariaLabel, title, description }) => (
							<CarouselItem key={id} ariaLabel={ariaLabel}>
								<Link to={url}>
									<img src={src} alt={alt} draggable='false' />
								</Link>
								<Heading>
									<p>{title}</p>
									<p>{description}</p>
								</Heading>
							</CarouselItem>
						)
					)}
				</Carousel>
			</Hero>
			<StyledSection $order='second' aria-labelledby='recommand'>
				<h2 className='sr-only' id='recommand'>
					recommand brands
				</h2>
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
							<ListWrapper $itemsPerScreen={brandsPerScreen}>
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
			</StyledSection>
			<StyledSection aria-labelledby='exclusive'>
				<h2 className='sr-only' id='exclusive'>
					exclusive
				</h2>
			</StyledSection>
			<StyledSection aria-labelledby='go to shopping'>
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
			</StyledSection>
		</MinusPaddedWrapper>
	)
}

export const loading = () => {}
