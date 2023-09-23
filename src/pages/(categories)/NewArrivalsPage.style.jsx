import styled, { css } from 'styled-components'

export const ProductsSection = styled.section`
	margin: 0 auto;

	${({ theme }) => {
		const { width, height } = theme.spacing

		return css`
			padding: ${`${height.marginTop} ${width.desktop} 0`};
			width: ${({ theme }) => `min(100%, ${theme.breakpoints.tablet})`};

			h2 {
				margin-bottom: 1.67rem;
				font-size: 1.75rem;
				font-weight: ${theme.fw.bold};
				text-transform: uppercase;
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				padding-left: ${width.mobile};
				padding-right: ${width.mobile};
			}
		`
	}}
`

export const CarouselSection = styled.section`
	${({ $top, theme }) => {
		return css`
			--item-gap: 1rem;
			--item-width: calc(100vh - ${$top * 2}px);

			height: 600vh;
			background: ${`linear-gradient(${theme.color.lightblue}, ${theme.color.bluegray}, ${theme.color.white})`};
			position: relative;

			.sticky-box {
				height: 100vh;
				display: flex;
				align-items: center;
				position: sticky;
				top: 0;
				overflow: hidden;
			}

			.sticky-box::before {
				content: '';
				display: block;
				width: 10em;
				aspect-ratio: 1;
				position: absolute;
				top: -30%;
				left: -18%;
				border-radius: 50%;
				font-size: 5em;
				background: ${`linear-gradient(${theme.color.darkgray2}, ${theme.color.shadow}, ${theme.color.white})`};
				filter: blur(128px);
				mix-blend-mode: exclusion;
			}

			ul {
				display: flex;
				width: fit-content;
				gap: var(--item-gap);
				padding: 0 ${({ theme }) => theme.spacing.width.desktop};
			}

			li {
				position: relative;
				height: var(--item-width);
				width: var(--item-width);
				overflow: hidden;
			}

			.img-box {
				position: absolute;
				inset: 0;
				transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
			}

			li:hover .img-box {
				transform: scale(1.1);
			}

			.blur-box {
				position: absolute;
				inset: 0;
				display: grid;
				place-content: center;
				z-index: 10;
			}

			.blur-box p {
				padding: 1em;
				font-size: 2rem;
				line-height: 1;
				font-weight: ${theme.fw.bold};
				color: ${theme.color.white};
				text-transform: uppercase;
				text-align: center;
				backdrop-filter: blur(1rem);
				background-image: linear-gradient(
					to bottom right,
					#ffffff33,
					transparent
				);
			}

			@media (max-width: ${theme.breakpoints.mobile}) {
				--item-width: min(100vw, calc(100vh - ${$top * 2}px));

				.sticky-box::before {
					width: 8em;
					top: -30%;
					left: -40%;
					background: ${`linear-gradient(${theme.color.shadow}, ${theme.color.white})`};
					filter: blur(64px);
				}

				ul {
					padding: 0 ${theme.spacing.width.mobile};
				}

				.blur-box p {
					font-size: 1.8rem;
				}
			}
		`
	}}
`
