import Img from '../@ui/Img'
import Button from '../@ui/Button'
import HeartImg from '/assets/icons/ion_heart-outline.svg'
import CloseImg from '/assets/icons/wavy_menu-close.svg'
import { StyledAside } from './HeaderAside.style'

export function HeaderAside({ asideCloseHandler }) {
	return (
		<StyledAside>
			<a href='https://github.com/itso-wavy' target='_blank'>
				wavy made with
				<Img src={HeartImg} alt='love' $size='1rem' className='heart' />
			</a>
			<Button
				$type='icon'
				$size='1rem'
				$img={CloseImg}
				onClick={asideCloseHandler}
				ariaLabel='close Ad'
				className='close'
			/>
		</StyledAside>
	)
}
