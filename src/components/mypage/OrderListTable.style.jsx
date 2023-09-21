import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	overflow: hidden;

	tbody tr > *:first-of-type {
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	td {
		display: grid;
		align-items: center;
	}

	td:first-of-type:hover > a {
		text-decoration: ${({ theme }) => `underline ${theme.color.black}`};
	}

	th:nth-of-type(1),
	th:nth-of-type(2) {
		flex-grow: 1.1;
	}
	th:nth-of-type(3) {
		flex-grow: 2;
	}
	td:has(img) {
		flex-grow: 2;
		min-width: 20ch;
		width: 40%;
	}
	td:has(img) > a {
		display: grid;
		grid: 1fr / auto 1fr;
		align-items: center;
	}
	td:has(img) img {
		width: 45px;
		aspect-ratio: 1;
		object-fit: cover;
		/* position: relative;
		top: 9px; */
	}
	td:has(img) img ~ p {
		margin-left: 10px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		th:nth-of-type(1),
		th:nth-of-type(2) {
			flex-basis: fit-content;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: calc(100vw - 40px - 17px);
	}
`
