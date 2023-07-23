import { createPortal } from 'react-dom'
import { Backdrop, ModalOverlay } from './Modal.style'

export default function Modal({ closeModal, children, ...props }) {
	const modalLayout = (
		<Backdrop onClick={closeModal}>
			<ModalOverlay {...props}>{children}</ModalOverlay>
		</Backdrop>
	)

	return <>{createPortal(modalLayout, document.getElementById('overlays'))}</>
}
