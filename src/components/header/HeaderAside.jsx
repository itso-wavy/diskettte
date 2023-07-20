import Img from '../@ui/Img'
import Button from '../@ui/Button'
import HeartImg from '/assets/icons/ion_heart-outline.svg'
import CloseImg from '/assets/icons/wavy_menu-close.svg'
import styled from 'styled-components'

const StyledAside = styled.aside`
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 0.875rem;
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.color.black};

	a {
		color: ${({ theme }) => theme.color.white};
		text-decoration: underline;
		margin: 0 0.5rem;
	}

	.heart {
		left: 3px;
	}

	.close {
		position: absolute;
		right: 0;
		margin: 0.6rem;
	}
`

export function HeaderAside({ asideCloseHandler }) {
	return (
		<StyledAside>
			<a href='https://github.com/itso-wavy'>
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
