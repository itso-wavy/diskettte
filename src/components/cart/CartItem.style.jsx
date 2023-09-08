import styled, { css } from 'styled-components'

export const StyledLi = styled.li`
	font-size: 0.875rem;

	& > form {
		min-height: 200px;
		height: 200px;
		margin: 1.5625rem 0 1.25rem;
		display: grid;
		grid-template:
			'check img info remove' 1fr
			'check img info order' 1fr / 1.1rem 160px auto 130px;
	}

	.checkbox {
		grid-area: check;
	}
	.img-box {
		grid-area: img;
	}
	.info-box {
		grid-area: info;
	}
	.remove-btn {
		grid-area: remove;
		margin-left: auto;
	}
	.order-btn {
		grid-area: order;
		margin-top: auto;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		& > form {
			height: auto;
			grid-template:
				'check remove' 1.9rem
				'info img' 1fr
				'info order' 48px / auto 130px;
		}

		.remove-btn {
			width: 1.1rem;
			height: 1.1rem;
		}
	}
`

export const StyledP = styled.p`
	text-align: end;
	padding: 1em 0;
	border-top: ${({ theme }) => `1px solid ${theme.color.gray}`};
	border-bottom: ${({ theme }) => `1px solid ${theme.color.black}`};

	& strong {
		font-weight: ${({ theme }) => theme.fw.bold};
	}

	& strong::after {
		content: '원';
		margin-left: 1px;
		font-weight: ${({ theme }) => theme.fw.normal};
	}
`

export const ProductImage = styled.div`
	margin: 0 1.4em 0 0.7em;
	position: relative;

	.img-cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		/* height: 100%; */
		height: 160px;
		object-fit: cover;
	}

	${({ $soldout }) =>
		$soldout &&
		css`
			.img-cover::before {
				content: '';
				display: block;
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: #ffffff7f;
			}

			.badge {
				position: absolute;
				left: 0;
				bottom: 0;
			}
		`}

	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		margin: 0;

		img {
			width: 100%;
			height: calc(100% - 1em);
			/* height: 160px; */
			object-fit: cover;
		}
	}
`

export const ProductInfo = styled.div`
	display: flex;
	flex-direction: column;

	& > * {
		width: fit-content;
	}

	.spinner {
		margin: 1.4em 0;
	}

	${({ $soldout }) =>
		$soldout &&
		css`
			opacity: 0.5;
		`}
`

export const ProductBrand = styled.p`
	font-size: 0.8125rem; // 13px
	font-weight: ${({ theme }) => theme.fw.bold};
	text-transform: uppercase;
	white-space: nowrap;
	text-overflow: ellipsis;
	/* overflow: hidden; */
`

export const ProductName = styled.p`
	margin-top: 0.3rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	color: ${({ theme }) => theme.color.darkgray2};
	font-size: 0.75rem;
	text-transform: uppercase;
	/* text-overflow: ellipsis; */
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

export const ProductPrice = styled.p`
	margin-top: 0.3rem;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fw.bold};

	.currency {
		font-size: 0.83rem;
		font-weight: ${({ theme }) => theme.fw.normal};
		margin-left: 0.1em;
		vertical-align: bottom;
	}
`

export const TotalPrice = styled.p`
	font-size: 1.375rem;
	font-weight: ${({ theme }) => theme.fw.bold};
	margin: auto 0;

	.currency {
		font-size: 0.83em;
		margin-left: 0.1em;
	}
`
