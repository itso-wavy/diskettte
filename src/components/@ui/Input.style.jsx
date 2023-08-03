import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	flex: 1 0 70%;
	margin-bottom: 0.5em;

	${({ $extraBtn, theme }) => css`
		& input {
			height: 3rem;
			width: 100%;
			padding: ${!$extraBtn
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

export const CheckboxWrapper = styled.div`
	margin: 0 0 calc(0.8em / 2) 0;
	line-height: 1.5em;
	font-size: 13px;
	color: ${({ theme }) => theme.color.black};
	position: relative;

	& img {
		margin-right: 0.3em;
		position: relative;
		bottom: 1px;
	}
`
