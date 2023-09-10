import styled from 'styled-components'

export const Wrapper = styled.div`
	& > form {
		border-top: ${({ theme }) => `1px solid ${theme.color.lightgray}`};
		padding-top: 1.75rem;
		margin-top: 2rem;
		font-size: 0.875rem;
	}

	& .title {
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	& .amount-select,
	& .total-price {
		justify-content: space-between;
	}

	& .amount-select .title {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& .total-price {
		font-weight: ${({ theme }) => theme.fw.bold};
		padding-top: 1em;
	}
`

export const ShippingInfo = styled.div`
	padding: 2em 0;

	& .title {
		padding-bottom: 10px;
	}

	& span {
		color: ${({ theme }) => theme.color.safe};
	}

	& strong {
		color: ${({ theme }) => theme.color.black};
		font-weight: 700;
	}

	& strong::after {
		content: '원';
	}
`
