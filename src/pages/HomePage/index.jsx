import Card from '../../components/@ui/Card'
import Carousel from '../../components/@ui/Carousel'
import Grid from '../../components/@ui/Grid'
import Slider from '../../components/@ui/Slider'
import { Hero, StyledSection } from './HomePage.style'

const banners = [
	{
		id: 1,
		src: '/assets/images/eql/28_26653_2_KOR_20230531092828.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 2,
		src: '/assets/images/eql/28_28833_6_KOR_20230530094213.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 3,
		src: '/assets/images/eql/33_138_10_KOR_20230525131845.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 4,
		src: '/assets/images/eql/28_121113_1_KOR_20230526100134.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 5,
		src: '/assets/images/eql/28_28370_1_KOR_20230530094458.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 6,
		src: '/assets/images/eql/28_121117_1_KOR_20230531094422.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
]
const brands = [
	{
		id: 1,
		brand: '아몬드봉봉',
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
		brand: '불꽃회오리',
		src: '/assets/images/socks/SIM01-6500_M_small.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
	{
		id: 6,
		brand: '쭈펄봇',
		src: '/assets/images/socks/SISLYA12-9300_W_SMALL.jpg',
		alt: '',
		url: '/',
		ariaLabel: '',
	},
]

export default function HomePage() {
	return (
		<>
			<Hero>
				<h2 className='sr-only'>main banner</h2>
				<Carousel items={banners} />
			</Hero>
			<StyledSection>
				<h2 className='sr-only'>recommand brands</h2>
				<Grid>
					{brands.map((brand, index) => (
						<li key={index}>
							<Card>
								<span>{brand.brand}</span>
								<img src={brand.src} alt={brand.alt} />
							</Card>
						</li>
					))}
				</Grid>
			</StyledSection>
			{/* <StyledSection>
				<h2 className='sr-only'>exclusive</h2>
				<Slider items={brands} />
				<Slider items={brands} />
				<Slider items={brands} />
			</StyledSection> */}
		</>
	)
}

export const loading = () => {}
