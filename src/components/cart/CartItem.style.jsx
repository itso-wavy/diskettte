import styled from 'styled-components'

export const StyledLi = styled.li`
	/* border: 1px solid gold; */
	min-height: 400px;
	/* margin-inline: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
	/* text-wrap: balance;
	text-align: center;
	word-break: keep-all;
	background: no-repeat 50% 100% / contain url(/assets/images/cats.png);
	background-size: 270px auto; */

	img {
		height: 100px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: 300px;
	}
`
