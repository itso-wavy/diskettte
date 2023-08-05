import styled, { css } from 'styled-components'

export const MinusPaddedWrapper = styled.div`
	margin-bottom: -300px;
`

export const Heading = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	width: 31.25rem;
	position: absolute;
	bottom: 1.2em;
	font-size: 1.8rem;
	line-height: 1.2em;
	font-weight: ${({ theme }) => theme.fw.medium};
	color: white;

	& * {
		height: 5rem;
		display: flex;
		align-items: center;
		background-color: #000;
		padding: 0 3.75rem;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 26.875rem;
		font-size: 1.5rem;

		& * {
			height: 4.375rem;
			padding: 0 2.8125rem;
		}
	}
`

export const StyledSection = styled.section`
	margin-top: 4.6875rem;

	${({ $order, theme }) => {
		switch ($order) {
			case 'second':
				return css`
					/* padding: 5em 0 10em; */
				`
			case 'third':
				return css`
					/* background-color: ${theme.color.black};
					color: ${theme.color.white}; 
					padding: 5em 0 10em;*/
				`
			default:
				return css``
		}
	}}
`

export const ListWrapper = styled.div`
	display: grid;
	grid-template-columns: ${({ $itemsPerScreen }) =>
		`repeat(${$itemsPerScreen}, 1fr)`};
	//  grid-template-columns: repeat(auto-fit, minmax(min(400px, 50%), 1fr));
	// 	background-color: ${({ theme }) => theme.color.white};
`

export const ItemWrapper = styled.div`
	height: 300px; /* point */
	border: 1px solid ${({ theme }) => theme.color.black};
	border-left: 0;
`

export const PaddedWrapper = styled.div`
	display: grid;
	place-items: center;
	/* min-height: 500px; */
	padding: 7em 0 10em;
	gap: 2em;

	background-color: ${({ theme }) => theme.color.limegreen};

	p {
		font-size: 3em;
		line-height: 1em;
		font-weight: ${({ theme }) => theme.fw.medium};
		width: 20rem;
		/* word-break: break-word; */
		background: linear-gradient(90deg, #ffa54d, #f07bc5 50%, #43aeff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	a {
		display: block;
		width: 15rem;
	}
`
