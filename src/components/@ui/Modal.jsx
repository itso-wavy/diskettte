import { createPortal } from 'react-dom'
import { Backdrop, ModalOverlay } from './Modal.style'

export default function Modal({ closeMobileNav, children, ...props }) {
	const modalLayout = (
		<Backdrop onClick={closeMobileNav}>
			<ModalOverlay {...props}>{children}</ModalOverlay>
		</Backdrop>
	)

	return <>{createPortal(modalLayout, document.getElementById('overlays'))}</>
}
