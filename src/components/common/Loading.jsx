import { Img } from '../@ui/Img'
import { useHeaderHeight } from '../../hooks'
import LoadingImg from '/loading.png'
import ShoppingBagImg from '/assets/images/shoppingBag.png'
import ChromeBallImg from '/assets/images/chromeBall.png'
import { RotateWrapper, Wrapper } from './Loading.style'

function DashboardLoading() {
	return (
		<Wrapper>
			<Img src={ChromeBallImg} alt='' $size='5em' />
			<p>loading...</p>
		</Wrapper>
	)
}

function CartLoading() {
	return (
		<Wrapper>
			<Img src={ShoppingBagImg} alt='' $size='5em' />
			<p>loading...</p>
		</Wrapper>
	)
}

function Loading() {
	const headerHeight = useHeaderHeight()

	return (
		<RotateWrapper top={headerHeight}>
			<Img src={LoadingImg} alt='loading...' $size='3em' />
		</RotateWrapper>
	)
}

export { Loading, CartLoading, DashboardLoading }
