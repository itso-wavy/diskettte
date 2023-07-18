import styled from 'styled-components'
import HeartImg from '/assets/icons/ion_heart-outline.svg'
import CloseImg from '/assets/icons/wavy_menu-close.svg'

export const StyledAside = styled.aside`
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	font-size: 0.875rem;
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.colors.black};

	a {
		color: ${({ theme }) => theme.colors.white};
		text-decoration: underline;
		margin: 0 0.5rem;
	}

	.heart {
		display: inline-block;
		position: relative;
		top: 3px;
	}

	.close {
		position: absolute;
		right: 0;
		margin: 0.5rem;
		width: 1rem;
		height: 1rem;
	}
`

export default function HeaderAside({ asideCloseHandler }) {
	return (
		<StyledAside>
			<a href='https://github.com/itso-wavy'>
				wavy made with <img src={HeartImg} alt='love' className='heart' />
			</a>
			<button onClick={asideCloseHandler} className='close'>
				<img src={CloseImg} alt='close' />
			</button>
		</StyledAside>
	)
}
