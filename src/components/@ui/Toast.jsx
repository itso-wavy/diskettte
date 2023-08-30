// import { useEffect, useState } from 'react'
// import { Modal } from './Modal'
// import { $toastStyle } from './Toast.style'
// import useStore from '../../store'

// /**
//  * @param $type 'info' | 'success' | 'warning' | 'error'
//  * @returns
//  */
// function Toast({ ...props }) {
// 	const { toastType, toastText, hideToast } = useStore()

// 	useEffect(() => {
// 		const timer = setTimeout(() => {
// 			hideToast()
// 		}, 5000)

// 		return () => clearTimeout(timer)
// 	}, [])

// 	// const closeToast = () => {
// 	// 	setIsToastVisible(false)
// 	// }

// 	return (
// 		<>
// 			{isVisible && (
// 				<Modal
// 					// closeModal={closeToast}
// 					$type={toastType}
// 					$style={$toastStyle}
// 					{...props}
// 				>
// 					{toastText}
// 				</Modal>
// 			)}
// 		</>
// 	)
// }

// export { Toast }
