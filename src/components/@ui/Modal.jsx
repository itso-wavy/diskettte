import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { Backdrop, ModalOverlay } from './Modal.style'

function Modal({ closeModal, children, ...props }) {
	const modalRef = useRef()

	const onClickHandler = e => {
		if (closeModal) {
			e.target !== modalRef.current && closeModal()
		}
	}

	const modalLayout = (
		<Backdrop onClick={onClickHandler}>
			<ModalOverlay ref={modalRef} {...props}>
				{children}
			</ModalOverlay>
		</Backdrop>
	)

	return <>{createPortal(modalLayout, document.getElementById('overlays'))}</>
}

export { Modal }
