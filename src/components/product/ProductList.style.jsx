import styled, { css } from 'styled-components'

export const ProductBrand = styled.p`
	font-size: 0.8125rem; // 13px
	font-weight: ${({ theme }) => theme.fw.bold};
	text-transform: uppercase;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`

export const ProductName = styled.p`
	margin-top: 0.3125rem;
	font-weight: ${({ theme }) => theme.fw.medium};
	color: ${({ theme }) => theme.color.darkgray2};
	font-size: 0.75rem;
	text-transform: uppercase;
	text-overflow: ellipsis;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`

export const ProductPrice = styled.p`
	margin-top: 0.5625rem;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fw.bold};
`

export const ProductInfo = styled.div`
	margin-top: 1.5rem;
	display: flex;
	flex-direction: column;

	&:empty,
	& > *:empty {
		display: none;
	}

	${({ $soldout }) =>
		$soldout &&
		css`
			opacity: 0.5;
		`}
`

export const ProductImage = styled.div`
	position: relative;
	min-height: 260px;
	background: gray no-repeat 50% 50% / cover;
	/* url(...) */
	overflow: hidden;
	transition: opacity 0.1s ease-in-out;

	.img-cover {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:empty {
		display: none;
	}
`

export const StyledLi = styled.li`
	& > a {
		display: block;
	}
`

export const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
	font-size: 1rem;
	padding: 0 0.3125em;
	gap: 5.625em 0.3125em;
`
