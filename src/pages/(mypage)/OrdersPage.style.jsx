import styled from 'styled-components'

export const StyledSection = styled.section`
	/* width: 100%; */
	position: relative;

	h2 {
		margin-bottom: 1.67rem;
		font-size: 1.75rem;
		font-weight: ${({ theme }) => theme.fw.bold};
		text-transform: uppercase;
	}

	td:first-of-type {
		font-weight: ${({ theme }) => theme.fw.medium};
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
`
