import styled from 'styled-components'

export const StyledSection = styled.section`
	/* width: 100%; */
	min-height: 300px;
	position: relative;
	text-underline-offset: 3px;

	h2 {
		margin-bottom: 1.67rem;
		font-size: 1.75rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
	}

	/* td:first-of-type {
		font-weight: ${({ theme }) => theme.fw.medium};
	} */
	th:nth-of-type(3),
	td:has(img) {
		flex-grow: 2;
	}

	tbody tr > *:first-of-type {
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	td:first-of-type:hover > a {
		text-decoration: ${({ theme }) => `underline ${theme.color.black}`};
	}

	td:has(img) {
		padding: 0em 1em;
		min-width: 20ch;
		width: 40%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	td:has(img) * {
		display: inline-block;
	}

	.product-img {
		width: 45px;
		aspect-ratio: 1;
		object-fit: cover;
		position: relative;
		top: 9px;
	}

	.product-img ~ p {
		margin-left: 10px;
		align-self: end;
	}

	/* .product-img ~ p:hover {
		text-decoration: underline;
	} */
`

export const TableWrapper = styled.div`
	position: relative;
	overflow: hidden;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: calc(100vw - 40px - 17px);
	}
`
