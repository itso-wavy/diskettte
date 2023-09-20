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
		pattern: /^(?!.*트롤).*$/m,
		message: '바르고 고운 말을 사용해주세요...',
	},
}

const paymentSchema = {
	paymentMethod: {
		pattern: /^(CARD|DEPOSIT|PHONE_PAYMENT|NAVERPAY|KAKAOPAY)$/,
		message:
			'현재는 신용/체크카드, 네이버페이, 카카오페이, 계좌이체, 휴대폰 결제만 가능합니다.',
	},
}

export { shippingInfoSchema, paymentSchema }
