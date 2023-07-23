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
		transition: all 0.5s ease;
	}

	.trigger.active + .content {
		opacity: 1;
	}

	.freeze {
		cursor: text;
	}
`
