import { Flexbox } from '../@ui/Form.style'
import styled from 'styled-components'

export const StyledFieldset = styled.fieldset`
	min-width: 400px; // 개발용
	height: fit-content;
	padding: 2.1875em;
	position: sticky;
	top: 25%;
	border: ${({ theme }) => `4px solid ${theme.color.black}`};

	& summary {
		font-size: 1.125rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		/* padding-bottom: 0.7em; */
		padding-bottom: 0.9em;
		border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		min-width: auto;
		position: relative;
		right: 20px;
		width: calc(100% + 40px);
	}
`

export const StyledLi = styled.li`
	border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
	/* height: 90px; */
	height: 100px;
	padding: 0.5em 0;
	display: flex;
	justify-content: space-between;
	font-size: 0.8125rem;

	&:not(:first-child) {
		margin-top: 0.5em;
	}

	.info-box {
		display: flex;
		flex-direction: column;
	}

	.store,
	.price {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	.product {
		font-size: 0.875rem;
		margin-top: 0.1em;
	}

	* > :has(.price) {
		margin-top: auto;
	}

	.price {
		font-size: 0.9375rem;
	}

	.unit {
		margin-left: 0.1em;
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.qty {
		color: ${({ theme }) => theme.color.darkgray};
	}

	.img-box {
		width: 80px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export const Wrapper = styled.div`
	width: 100%;
	margin-top: 2.25em;
	padding-bottom: 8em;

	& dl {
		line-height: 1.8em;
	}

	& dl:last-of-type {
		padding: 1.5rem 0 1rem;
		font-size: 1.3rem;
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	& dl:last-of-type dd {
		font-style: italic;
	}

	& dd > strong {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& dl:not(:last-of-type) dt {
		color: ${({ theme }) => theme.color.darkgray};
	}

	& strong {
		margin-right: 1px;
	}
`

export const StyledFlexbox = styled(Flexbox)`
	flex-direction: row;
	justify-content: space-between;
	white-space: nowrap;
`

export const ButtonBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.65em;
	text-align: center;
	position: absolute;
	left: 0;
	bottom: 0;

	& button {
		font-size: 1.15em;
		padding: 1.4em 0;
		color: ${({ theme }) => theme.color.safe};
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		& button:not(:disabled) {
			border-bottom: ${({ theme }) => `1px dashed ${theme.color.white}`};
		}
	}
`
