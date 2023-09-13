const shippingInfoSchema = {
	receiver: {
		pattern: /.+/,
		message: '수령인을 입력해주세요.',
	},
	receiverPhoneNumber: {
		pattern: /^01[\d]{1}-[\d]{3,4}-[\d]{4}$/,
		message: '올바른 휴대폰 번호 형식이 아닙니다.',
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
