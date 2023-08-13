import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 1.5em;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		font-size: 2.25rem;
		line-height: 1.3em;
		font-weight: ${({ theme }) => theme.fw.bold};
		margin-top: 1rem;
		position: relative;
	}

	h1::before {
		content: '';
		display: inline-block;
		width: 400px;
		aspect-ratio: 1;
		position: absolute;
		top: -50%;
		left: 50%;
		translate: -50%;
		background: radial-gradient(
			#dcdfe2 0%,
			#88aede6b 58%,
			#c4d1c8 60%,
			#e7f2f9 65%
		);
		border-radius: 50%;
		z-index: -1;
		filter: blur(10px);
	}

	/* h1 + * {
		margin-top: 1.5em;
	} */

	.info {
		height: 3.125rem;
		width: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.color.white};
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.buttons {
		display: flex;
		width: 100%;
		padding: 1em;
		justify-content: space-between;
		gap: 1rem;
		min-width: 300px;
		max-width: 480px;
	}
`
