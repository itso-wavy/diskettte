import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	overflow: hidden;

	td {
		display: grid;
		align-items: center;
	}

	th:nth-of-type(2) {
		flex-grow: 3.5;
		flex-basis: fit-content;
	}
	th:nth-of-type(6) {
		flex-basis: fit-content;
	}
	td:has(img) {
		flex-grow: 4;
		min-width: 20ch;
		width: 40%;
	}
	td:has(img) > a {
		display: grid;
		grid: 1fr / auto 1fr;
		align-items: center;
	}
	td:has(img):hover * {
		text-decoration: ${({ theme }) => `underline ${theme.color.black}`};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	td:has(img) img {
		width: 45px;
		aspect-ratio: 1;
		object-fit: cover;
	}
	td:has(img) img ~ p {
		margin-left: 10px;
		/* align-self: end; */
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	& strong {
		color: ${({ theme }) => theme.color.black};
		font-weight: 700;
	}
	& strong::after {
		content: '원';
	}

	td:has(button) {
		display: flex;
		gap: 0.5em;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		th:nth-of-type(2) {
			flex-grow: 2;
		}
		th:nth-of-type(6) {
			flex-grow: 1.5;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: calc(100vw - 40px - 17px);
	}
`
