import styled from 'styled-components'

export const ShippingInfo = styled.div`
	/* margin-top: auto; */
	font-size: 0.875rem;
	/* font-weight: ${({ theme }) => theme.fw.bold}; */

	& > :first-child {
		font-weight: ${({ theme }) => theme.fw.medium};
		/* color: ${({ theme }) => theme.color.darkgray}; */
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
	/* display: flex;
	justify-content: space-between; */

	.shipping-fee {
	}
	.shipping-method {
	}
`
