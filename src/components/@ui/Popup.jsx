// import { useEffect, useState } from 'react'
// import { Modal } from './Modal'
// import { $popupStyle } from './Popup.style'
// import useStore from '../../store'

// /**
//  * @param $type 'info' | 'success' | 'warning' | 'error'
//  * @returns
//  */
// function Popup({ ...props }) {
// 	const { popupType, popupText, hidePopup } = useStore()

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			hidePopup()
// 		}, 5000)

// 		return () => clearTimeout(timer)
// 	}, [])

// 	// const closePopup = () => {
// 	// 	setIspopupVisible(false)
// 	// }

// 	return (
// 		<>
// 			{isVisible && (
// 				<Modal
// 					// closeModal={closePopup}
// 					$type={popupType}
// 					$style={$popupStyle}
// 					{...props}
// 				>
// 					{popupText}
// 				</Modal>
// 			)}
// 		</>
// 	)
// }

// export { Popup }
