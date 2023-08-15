import { Img } from '../@ui/Img'
import { useHeaderHeight } from '../../hooks'
import loadingImg from '/loading.png'
import { LoadingWrapper } from './Loading.style'

function Loading() {
	const headerHeight = useHeaderHeight()

	return (
		<LoadingWrapper top={headerHeight}>
			<Img src={loadingImg} alt='loading...' $size='3em' />
		</LoadingWrapper>
	)
}

export { Loading }
