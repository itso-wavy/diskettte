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
import { GridBlock } from '../../components/@ui/GridBlock'
import { Tag, TagBox } from '../../components/@ui/Tag'
import { Button } from '../../components/@ui/Button'
import { Img } from '../../components/@ui/Img'
import { Card, RotatedFigureCard } from '../../components/@ui/Card'
import { CircularTextSvg } from '../../components/@svg/CircularTextSvg'
import {
	MinusPaddedWrapper,
	// StyledSection,
	// Heading,
	Hero,
	Grid,
	// GridItem,
	ListWrapper,
	PaddedWrapper,
	ItemWrapper,
	PreviewMotion,
} from './HomePage.style'
import diskImg from '/assets/icons/wavy_floppy-disk-skew.svg'
import heartImg from '/assets/icons/wavy_growing-heart.svg'
import arrowImg from '/assets/icons/wavy_arrow-forward-sharp.svg'
import arrowThinImg from '/assets/icons/wavy_arrow-forward-thin.svg'
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

			<Section sectionId='introduce' sectionTitle='introduce grid' $top='0'>
				<Grid>
					<Card
						initial='initial'
						whileInView='animate'
						variants={PreviewMotion}
					>
						<GridBlock
							style={{
								gridTemplateColumns: 'auto max-content',
							}}
						>
							<p className='bl big-font'>Collection for Your Wardrobe</p>
							<TagBox className='tl'>
								<Tag>Clothes</Tag>
								<Tag>Food</Tag>
								<Tag>Kidult</Tag>
								<Tag>Electronics</Tag>
								<Tag>Interior</Tag>
								<Tag>Culture</Tag>
								<Tag>Leisure</Tag>
								<Tag>Pet</Tag>
							</TagBox>
							<div className='tr touch'>
								<Img src={diskImg} alt='' $size='2.25em' />
							</div>
							<Button
								className='big-arrow br'
								$type='icon'
								$size='3.5em'
								$img={arrowThinImg}
								onClick={() => {
									navigate('/categories/all')
								}}
								style={{ rotate: '45deg' }}
							/>
						</GridBlock>
					</Card>
					<Card
						initial='initial'
						whileInView='animate'
						variants={PreviewMotion}
					>
						<GridBlock
							style={{
								gridTemplateAreas: `
                  'tl tl' 
                  'bl br'
                `,
							}}
						>
							<p className='big-font tl '>Personalize Your Style</p>
							<TagBox $color='#789FA5' className='bl'>
								<Tag>I'm your nostalgia</Tag>
								<Tag>I'm your lifestyle</Tag>
								<Tag>This is your diskette</Tag>
							</TagBox>
							<p className='br see-all'>
								<span className='touch'>
									<Img src={heartImg} alt='' $size='1em' />
								</span>
								<Button
									$type='icon'
									$size='3.5em'
									onClick={() => {
										navigate('/categories/all')
									}}
								>
									<Tag $color='white'>
										<span>SEE ALL</span>
										<Img
											src={arrowImg}
											alt=''
											$size='1.5em'
											style={{ rotate: '-35deg' }}
										/>
									</Tag>
								</Button>
							</p>
						</GridBlock>
					</Card>
					<Card>
						<p>
							In a world full of diversity, we each pursue our own unique
							styles. We support fashion that allows for free expression without
							any biases or preconceptions. Explore your own choices with
							diskette. Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Atque enim voluptatum fugit iure error incidunt quidem iste
							qui sed sunt, aspernatur cum blanditiis, dicta molestias
							architecto? Dignissimos quo mollitia officia enim quasi!
						</p>
						<p className='big-font'>I'm your diskette.</p>
					</Card>
				</Grid>
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
