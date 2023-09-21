import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	font-size: 0.875rem;
	border-collapse: collapse;
	border-top: ${({ theme }) => `2px solid ${theme.color.black}`};
	border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};
	display: grid;
	overflow-x: auto;
	white-space: nowrap;

	caption,
	thead {
		text-align: left;
	}

	caption {
		font-size: 1.125rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		padding: 0.61em 0;
		text-transform: uppercase;
	}

	thead,
	td[scope='row'] {
		font-weight: ${({ theme }) => theme.fw.bold};
		word-break: keep-all;
	}

	th,
	td {
		padding: 0.8em 1em;
	}

	td {
		border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
	}

	tr > *:not(:first-child) {
		/* border-left: ${({ theme }) => `1px solid ${theme.color.gray}`}; */
	}

	${({ $align }) =>
		$align === 'column' &&
		css`
			tr {
				display: grid;
				grid: auto / auto-flow 1fr;
				grid-template-columns: min(18ch, 30%);
			}

			td[scope='row'] {
				word-break: keep-all;
			}
		`}

	${({ $align }) =>
		$align === 'row' &&
		css`
			thead tr {
				display: grid;
				grid: auto / auto-flow 1fr;
				grid-template-columns: min(18ch, 30%);
				word-break: keep-all;
			}
			/* 
			th {
				height: fit-content;
				position: sticky;
				top: 0;
			} */

			tbody {
				width: 100%;
				display: flex;
			}

			tr {
				flex: 1 1 0%;
				display: flex;
				flex-direction: column;
			}

			tr > *:not(:first-child) {
				border-left: none;
			}

			tr:not(:first-of-type) > td {
				/* border-left: ${({ theme }) => `1px solid ${theme.color.gray}`}; */
			}
			/* 
      td[scope='row'] {
		font-weight: initial;
	} */
		`} /* &::-webkit-scrollbar {
		height: 14px;
		background-color: transparent;
	}
	&::-webkit-scrollbar-track {
		background-color: transparent;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background: ${({ theme }) => theme.color.gray};
		background-clip: padding-box;
		border: 4px solid transparent;
	}
	&::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) => theme.color.darkgray};
		background-image: ${({ theme }) =>
		`linear-gradient(to right,${theme.color.gray}, ${theme.color.shadow})`};
		background-clip: padding-box;
	} */
`

export const StyledThead = styled.thead`
	tr {
		display: flex !important;
		flex-direction: row;
	}

	th {
		flex: 1;
	}
`

export const StyledTbody = styled.tbody`
	flex-flow: column wrap;

	tr {
		flex-flow: row;
	}

	td {
		flex: 1;
		font-weight: initial;
	}
`
