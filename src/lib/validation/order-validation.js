const shippingInfoSchema = {
	receiver: {
		pattern: /.+/,
		message: '수령인을 입력해주세요.',
	},
	receiverPhoneNumber: {
		pattern: /^01[\d]{1}-[\d]{3,4}-[\d]{4}$/,
		message: '핸드폰번호는 01*으로 시작하는 10-11자의 번호만 허용합니다.',
	},
	address: {
		pattern: /.+/,
		message: '주소를 입력해주세요.',
	},
	deliveryRequest: {
		pattern: /.*/,
		message: '',
	},
}

export { shippingInfoSchema }
