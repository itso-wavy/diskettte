import { Img } from '../@ui/Img'
import { Button } from '../@ui/Button'
import { CloseSvg } from '../@svg'
// import HeartImg from '/assets/icons/ion_heart-outline.svg'
import HeartImg from '/assets/icons/heart3D.png'
import { StyledAside } from './HeaderAside.style'

export function HeaderAside({ asideCloseHandler, ...props }) {
	return (
		<StyledAside {...props}>
			<a href='https://github.com/itso-wavy' target='_blank'>
				wavy made with
				{/* <Img src={HeartSvg} alt='love' $size='1rem' className='heart' /> */}
				<Img src={HeartImg} alt='love' $size='1.5rem' />
			</a>
			<Button
				$type='icon'
				$size='1rem'
				onClick={asideCloseHandler}
				ariaLabel='close Ad'
				className='close'
				style={{ color: 'white' }}
			>
				<CloseSvg />
			</Button>
		</StyledAside>
	)
}
