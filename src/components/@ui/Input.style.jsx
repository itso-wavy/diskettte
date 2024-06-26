import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
	position: relative;
	flex: 1 0 70%;
	margin-bottom: 0.5em;

	${({ theme }) => css`
		& input,
		& textarea {
			height: 3rem;
			width: 100%;
			padding: 1rem calc(0.8rem + 1.7rem) 1rem 0.8rem;
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
			&.invalid {
				color: inherit;
				outline: 1px solid ${theme.color.error};
			}
		}

		& textarea {
			height: auto;
			min-height: 15rem;
			resize: none;
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

export const NumberWrapper = styled(InputWrapper)`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 0.45rem;

	& input {
		padding: 1rem 0.8rem;
	}

	.number-bar {
		width: 2rem;
		height: 1px;
		background-color: ${({ theme }) => theme.color.darkgray};
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

	.link {
		color: ${({ theme }) => theme.color.darkgray};
		text-decoration: underline;
		text-underline-offset: 2px;
	}
`

export const StyledLi = styled.li`
	position: relative;

	&::before {
		content: '';
		display: inline-block;
		background-color: ${({ theme }) => theme.color.black};
		width: 100%;
		height: 100%;
		position: absolute;
	}
`

export const AddressWrapper = styled(InputWrapper)`
	display: flex;
	flex-direction: column;
	align-items: center;
	column-gap: 0.45rem;
	row-gap: 0.5rem;

	& > * {
		width: 100%;
	}

	& input {
		padding: 1rem 0.8rem;
	}
`
