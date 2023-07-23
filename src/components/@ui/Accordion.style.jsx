import styled from 'styled-components'

export const StyledDetails = styled.details`
	width: 100%;

	summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	.content {
		opacity: 0;
		height: 0;
		transition: height 1.5s ease, opacity 0.5s ease;
	}

	.active + .content {
		opacity: 1;
		height: 100%;
	}

	.freeze {
		cursor: text;
	}
`
