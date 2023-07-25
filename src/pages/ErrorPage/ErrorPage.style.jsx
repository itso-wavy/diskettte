import styled from 'styled-components'

export const Wapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		font-size: 2.25rem;
		line-height: 1.3em;
		font-weight: ${({ theme }) => theme.fw.bold};
		margin-top: 1rem;
	}

	.info {
		height: 3.125rem;
		width: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.color.disabled};
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
