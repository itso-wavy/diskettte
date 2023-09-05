import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`

export const Titlebox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5em 0;
	/* border-top: ${({ theme }) => `2px solid ${theme.color.black}`}; 
	border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};*/
	border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};

	& > * {
		margin: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		/* 	border-top: ${({ theme }) => `2px solid ${theme.color.black}`};
		border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`}; */
	}
`

export const EmptyWrapper = styled.div`
	width: 100%;
	min-height: 400px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* position: relative; */
	text-wrap: balance;
	text-align: center;
	word-break: keep-all;
	background: no-repeat 50% 100% / contain url(/assets/images/cats.png);
	background-size: 270px auto;
	border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};

	& p {
		margin-bottom: 1.4375em;
	}

	& > * {
		width: min(310px, 100%);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		/* FIXME: 임시 */
		border-bottom: 0;
	}
`
