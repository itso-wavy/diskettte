import styled, { css } from 'styled-components'

export const Validation = styled.p`
	margin: 0 0.5em calc(0.8em / 2);
	/* margin-left: 0.5em;
	margin-bottom: calc(0.7em / 2); */
	line-height: 1.5em;
	font-size: 13px;
	color: ${({ theme }) => theme.color.black};

	.safe {
		color: ${({ theme }) => theme.color.safe};
	}
	.error {
		color: ${({ theme }) => theme.color.error};
	}
`

export const Flexbox = styled.div`
	display: flex;
	flex-direction: ${({ $direction }) => $direction || 'column'};
	column-gap: 0.625rem;
	row-gap: 0.75rem; // 12px
`

export const Wrapper = styled.div`
	position: relative;
	flex: 1 0 70%;
	margin-bottom: 0.5em;

	${({ extraBtn, theme }) => css`
		& input {
			height: 3rem;
			width: 100%;
			padding: ${!extraBtn
				? '1rem calc(0.8rem + 1.7rem) 1rem 0.8rem'
				: '1rem calc(0.8rem + 2.9rem + 0.2rem) 1rem 0.8rem'};
			font-size: 0.875rem; // 14px
			font-weight: ${theme.fw.normal};
			border: 1px solid ${theme.color.gray};
			color: ${theme.color.black};

			&::placeholder {
				color: ${theme.color.darkgray};
			}
			&:focus {
				outline: 1px solid ${theme.color.black};
			}
		}
	`}

	.btn-box {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2em;
		font-size: 0.75rem;
		line-height: 1em;
		color: ${({ theme }) => theme.color.black};
	}
`
