import Carousel from '../../components/@ui/Carousel'
import { Page, Hero } from './HomePage.style'

const items = [
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

export default function HomePage() {
	return (
		<Page>
			<Hero>
				<h2 className='sr-only'>main page banner</h2>
				<Carousel items={items} />
			</Hero>
		</Page>
	)
}

export const loading = () => {}
