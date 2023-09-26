import { Flexbox } from '../@ui/Form.style'
import styled from 'styled-components'

export const StyledArticle = styled.article`
	height: fit-content;
	position: sticky;
	top: 25%;
	display: flex;
	flex-direction: column;
	border: ${({ theme }) => `1px solid ${theme.color.gray}`};

	h2 {
		width: 100%;
		margin-bottom: 0.35em;
		font-size: 3rem;
		line-height: 1.5em;
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& > *:last-child {
		border-top: ${({ theme }) => `1px solid ${theme.color.black}`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		h2 {
			font-size: 2.45rem;
		}
	}
`

export const Wrapper = styled.div`
	padding: 2.2em;
	padding-bottom: 5em;
	font-size: 0.875rem;

	& dl {
		border-top: 1px dashed black;
		padding: 1.5rem 0;
		line-height: 1.8em;
	}

	& dl:last-of-type {
		font-size: 1.3rem;
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	& dl:last-of-type dd {
		font-style: italic;
	}

	& dd > strong {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& strong {
		margin-right: 1px;
	}
`

export const StyledFlexbox = styled(Flexbox)`
	flex-direction: row;
	justify-content: space-between;
	white-space: nowrap;

	.amount-box {
		padding-left: 2em;
		min-width: 33.33%;
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.amount-box > strong {
		font-weight: ${({ theme }) => theme.fw.bold};
	}
`
