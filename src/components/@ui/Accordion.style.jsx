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
		visibility: hidden;
		height: 0;
		transform: translateY(-20%);
		transition: all 0.5s ease, height 1.5s ease-out;
	}

	.active ~ .content {
		opacity: 1;
		visibility: visible;
		height: auto;
		transform: translateY(0%);
	}

	.freeze {
		cursor: text;
	}
`
