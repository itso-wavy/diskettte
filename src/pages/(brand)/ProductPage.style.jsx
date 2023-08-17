import { Form } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const LayoutWrapper = styled.div`
	${({ theme }) => {
		const { width, height } = theme.spacing
		const breakpoints = theme.breakpoints

		return css`
			width: ${`min(100%, ${breakpoints.tablet})`};
			padding: ${`${height.marginTop} ${width.desktop} 0`};

			@media (max-width: ${breakpoints.mobile}) {
				padding-left: ${width.mobile};
				padding-right: ${width.mobile};
			}
		`
	}}
`

export const OverviewWrapper = styled.div`
	width: 100%;
	height: ${({ $top }) => `calc(100vh - ${$top}px - 6em)`};
	/* height: 32.5em; */
	display: flex;
	gap: 3em;

	.image-box {
		flex: 0 0 47%;
	}

	.image-box img {
		/* width: 100%; */
		max-height: 100%;
		object-fit: cover;
	}

	.info-box {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		height: auto;
		flex-direction: column;
	}
`

export const FormWrapper = styled.div`
	// display: grid;
	// grid: ;
`
export const KeyInfo = styled.div`
	.brand-name {
		display: flex;
		align-items: center;
		gap: 0.625em;
	}
	.product-name {
		font-size: 24px;
		font-weight: ${({ theme }) => theme.fw.medium};
		padding-top: 20px;
	}
	.product-price {
		padding-top: 45px;
		font-weight: ${({ theme }) => theme.fw.bold};
		font-size: 24px;
	}
	.currency {
		margin-left: 0.1em;
	}
`

export const StyledForm = styled(Form)`
	border-top: ${({ theme }) => `1px solid ${theme.color.lightgray}`};
	padding-top: 18px;
`

export const PricingInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	form {
		padding: 30px;
		/* display: flex;
		justify-content: space-between; */
		border-top: ${({ theme }) => `1px solid ${theme.color.lightgray}`};
	}
`

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

export const DescriptionWrapper = styled.div`
	width: 100%;
	margin-top: 3.25em;
	background-color: ${({ theme }) => theme.color.lightgray};
`
