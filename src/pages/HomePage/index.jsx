import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
	PagenationIndicator,
} from '../../components/@ui/Carousel'
import { Card } from '../../components/@ui/Card'
import { Button } from '../../components/@ui/Button'
import {
	Hero,
	StyledSection,
	Heading,
	ChunkWrapper,
	StyledFigure,
	PaddedWrapper,
} from './HomePage.style'
import useStore from '../../store'

const banners = [
	{
		id: 1,
		src: '/assets/images/eql/28_26653_2_KOR_20230531092828.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'SIMPLIFY YOUR LIFE',
		description: 'JUST FOCUS',
	},
	{
		id: 2,
		src: '/assets/images/eql/28_28833_6_KOR_20230530094213.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'ENJOY YOUR LIFE',
		description: 'JUST A FEELING',
	},
	{
		id: 3,
		src: '/assets/images/eql/33_138_10_KOR_20230525131845.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'COOL WITH YOU',
		description: 'HMM...',
	},
	{
		id: 4,
		src: '/assets/images/eql/28_121113_1_KOR_20230526100134.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'SIMPLIFY YOUR LIFE',
		description: 'JUST FOCUS',
	},
	{
		id: 5,
		src: '/assets/images/eql/28_28370_1_KOR_20230530094458.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'ENJOY YOUR LIFE',
		description: 'JUST A FEELING',
	},
	{
		id: 6,
		src: '/assets/images/eql/28_121117_1_KOR_20230531094422.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
		title: 'COOL WITH YOU',
		description: 'HMM...',
	},
]
const brands = [
	{
		id: 1,
		brand: '아몬드봉봉아몬드봉봉아몬드봉봉 아몬드봉봉아몬드봉봉아몬드봉봉',
		src: '/assets/images/socks/SDS114-3500_new.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 2,
		brand: '체리쥬빌레',
		src: '/assets/images/socks/SDS116-7300.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 3,
		brand: '고구마언덕',
		src: '/assets/images/socks/SIM01-2200_M_small.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 4,
		brand: '도날드덕',
		src: '/assets/images/socks/SIM01-6000_M_small.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 5,
		brand: '쭈펄봇',
		src: '/assets/images/socks/SIM01-6500_M_small.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 6,
		brand: '불꽃회오리',
		src: '/assets/images/socks/SISLYA12-9300_W_SMALL.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 7,
		brand: '쭈키마우스',
		src: '/assets/images/socks/CFP118-7000.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 8,
		brand: '나는1000재',
		src: '/assets/images/socks/P000482.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 9,
		brand: '1234567890',
		src: '/assets/images/socks/filters_quality(60).jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 10,
		brand: 'QWERTYY',
		src: '/assets/images/socks/filters_quality(60) (7).jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 11,
		brand: 'aaaaaaaaaaa',
		src: '/assets/images/socks/XWWF09-0200_new.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 12,
		brand: '00000000000',
		src: '/assets/images/socks/XSIM09-0200_O.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
]

export default function HomePage() {
	const { isMobile, isDesktop } = useStore()
	const BrandsChunk = []
	const [brandsPerScreen, setBrandsPerScreen] = useState(3)

	const createArrChunk = useCallback((targetArr, brankArr, n) => {
		for (let i = 0; i < targetArr.length; i += n) {
			brankArr.push(targetArr.slice(i, i + n))
		}
	}, [])

	useEffect(() => {
		setBrandsPerScreen(isMobile ? 2 : isDesktop ? 3 : 4)
	}, [isMobile, isDesktop])

	createArrChunk(brands, BrandsChunk, brandsPerScreen)

	return (
		<>
			<Hero>
				<h2 className='sr-only'>main banner</h2>
				<Carousel
					items={banners}
					autoSlideInterval={3000}
					$Arrows={NavigationArrows}
					$Indicator={CarouselIndicator}
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
			<StyledSection>
				<h2 className='sr-only'>recommand brands</h2>
				<Carousel
					items={BrandsChunk}
					// autoSlideInterval={5000}
					$Arrows={NavigationArrows}
					$Indicator={PagenationIndicator}
					$itemsPerScreen={brandsPerScreen}
				>
					{BrandsChunk.map((chunk, index) => (
						<CarouselItem key={index}>
							<ChunkWrapper $itemsPerScreen={brandsPerScreen}>
								{chunk.map(({ id, brand, url, src, alt }) => (
									<Link to={url} key={id}>
										<StyledFigure key={id}>
											<Card $direction='row'>
												<figcaption>
													<div className='rotate'>{brand}</div>
												</figcaption>
												<img src={src} alt={alt} />
											</Card>
										</StyledFigure>
									</Link>
								))}
							</ChunkWrapper>
						</CarouselItem>
					))}
				</Carousel>
			</StyledSection>
			<StyledSection>
				<h2 className='sr-only'>exclusive</h2>
				<Carousel
					items={BrandsChunk}
					// autoSlideInterval={5000}
					$Arrows={NavigationArrows}
					$Indicator={PagenationIndicator}
					$itemsPerScreen={brandsPerScreen}
				>
					{BrandsChunk.map((chunk, index) => (
						<CarouselItem key={index}>
							<ChunkWrapper $itemsPerScreen={brandsPerScreen}>
								{chunk.map(({ id, brand, url, src, alt }) => (
									<Link to={url} key={id}>
										<StyledFigure key={id}>
											<Card>
												<figcaption>{brand}</figcaption>
												<img src={src} alt={alt} />
											</Card>
										</StyledFigure>
									</Link>
								))}
							</ChunkWrapper>
						</CarouselItem>
					))}
				</Carousel>
			</StyledSection>
			<StyledSection>
				<h2 className='sr-only'>exclusive</h2>
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
		</>
	)
}

export const loading = () => {}
