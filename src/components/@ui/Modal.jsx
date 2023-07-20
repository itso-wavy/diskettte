import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

const Backdrop = styled.div`
	background-color: ${({ theme }) => theme.color.modal};
	position: fixed;
	inset: 0;
	z-index: 10;
`

const ModalOverlay = styled.div`
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

export default function Modal({ closeMobileNav, children, ...props }) {
	const modalLayout = (
		<Backdrop onClick={closeMobileNav}>
			<ModalOverlay {...props}>{children}</ModalOverlay>
		</Backdrop>
	)

	return <>{createPortal(modalLayout, document.getElementById('overlays'))}</>
}
