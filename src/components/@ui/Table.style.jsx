import styled, { css } from 'styled-components'

export const StyledTable = styled.table`
	width: 100%;
	font-size: 0.875rem;
	border-collapse: collapse;
	border-top: ${({ theme }) => `2px solid ${theme.color.black}`};
	border-bottom: ${({ theme }) => `2px solid ${theme.color.black}`};

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

	thead {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	th,
	td {
		padding: 0.8em 1em;
	}

	td {
		border-bottom: ${({ theme }) => `1px solid ${theme.color.gray}`};
	}

	tr > *:not(:first-child) {
		border-left: ${({ theme }) => `1px solid ${theme.color.gray}`};
	}

	${({ $align }) =>
		$align === 'row' &&
		css`
			th {
				display: none;
			}

			tr > *:not(:first-child) {
				border-left: none;
			}

			td {
				display: grid;
				gap: 1em;
				grid-template-columns: min(30%, 15ch) auto;
				padding: 0.8em 1em;
				word-break: keep-all;
			}

			td::before {
				content: attr(data-cell);
				font-weight: ${({ theme }) => theme.fw.bold};
			}
		`}
`
