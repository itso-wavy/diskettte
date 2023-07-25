import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;

	input {
		height: 3rem;
		width: 100%;
		padding: 1rem calc(0.8rem + 1.7rem) 1rem 0.8rem;
		font-size: 0.875rem;
		font-weight: ${({ theme }) => theme.fw.normal};
		border: 1px solid ${({ theme }) => theme.color.black};

		&::placeholder {
			color: ${({ theme }) => theme.color.darkgray};
		}
		&:focus {
			outline: 2px solid ${({ theme }) => theme.color.black};
		}
	}

	.btn-box {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0.8rem;
		display: flex;
		align-items: center;
		gap: 0.2em;
		color: ${({ theme }) => theme.color.black};
	}
`
