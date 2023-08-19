import { Form } from 'react-router-dom'
import styled from 'styled-components'

export const StyledForm = styled(Form)`
	border-top: ${({ theme }) => `1px solid ${theme.color.lightgray}`};
	padding-top: 0.875em;

	& .amount-select,
	& .total-price {
		justify-content: space-between;
		font-size: 0.875rem;
		padding-top: 1em;
	}

	& .total-price {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& .title {
		font-weight: ${({ theme }) => theme.fw.medium};
	}
`

export const ShippingInfo = styled.div`
	font-size: 0.875rem;
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
