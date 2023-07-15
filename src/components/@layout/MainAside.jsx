import HeartImg from '/assets/icons/ion_heart-outline.svg'
import styled from 'styled-components'

const StyledAside = styled.aside`
	height: 35px;
	padding: 0.5em;
	background-color: black;
	text-align: center;
	font-size: 14px;

	a {
		color: white;
		text-decoration: underline;
	}

	img {
		display: inline-block;
		vertical-align: middle;
		position: relative;
		bottom: 1px;
	}
`

export default function MainAside() {
	return (
		<StyledAside>
			<a href='https://github.com/itso-wavy'>
				wavy made with <img src={HeartImg} alt='love' />
			</a>
		</StyledAside>
	)
}
