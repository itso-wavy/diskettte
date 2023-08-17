import styled from 'styled-components'
import { Button } from '../@ui/Button'
import TopImg from '/public/assets/icons/wavy_scroll-to-top.svg'

const BaseButton = ({ ...props }) => (
	<Button $type='square' $img={TopImg} $style='tertiary' {...props} />
)

export const StyledButton = styled(BaseButton)`
	position: fixed;
	bottom: 5rem;
	right: 2rem;
	/* border-color: ${({ theme }) => theme.color.gray}; */
	visibility: ${({ $show }) => ($show ? 'visible' : 'hidden')};
	opacity: ${({ $show }) => ($show ? 1 : 0)};
	transition: all 0.5s, background-color 0.3s;

	&:hover {
		background-color: ${({ theme }) => theme.color.lightgray};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		bottom: 2rem;
		right: 2rem;
	}
`
