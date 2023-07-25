import styled from 'styled-components'

export const Backdrop = styled.div`
	background-color: ${({ theme }) => theme.color.modal};
	position: fixed;
	inset: 0;
	z-index: 10000;
`

export const ModalOverlay = styled.div`
	width: calc(100vw - 2.5rem);
	min-width: 280px;
	height: 100vh;
	padding: 20px;
	background-color: ${({ theme }) => theme.color.black};
	color: ${({ theme }) => theme.color.white};
	position: fixed;
	inset: 0;

	${({ $style }) => $style && $style}
`
