import styled, { css } from 'styled-components'

export const LayoutWrapper = styled.div`
	margin: 0 auto;
	display: grid;
	place-items: center;

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
		margin: 0 auto;
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

export const KeyInfo = styled.div`
	.brand-name {
		display: flex;
		align-items: center;
		gap: 0.625em;
	}
	.product-name {
		font-size: 1.5rem;
		font-weight: ${({ theme }) => theme.fw.medium};
		padding-top: 0.8em;
	}
	.product-price {
		font-size: 1.5rem;
		padding-top: 1.875em;
		font-weight: ${({ theme }) => theme.fw.bold};
	}
	.currency {
		margin-left: 0.1em;
	}
`

export const PricingInfo = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
`

export const DescriptionWrapper = styled.div`
	width: 100%;
	margin-top: 3.25em;
`
