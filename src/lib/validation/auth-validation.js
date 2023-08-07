const accountSchema = {
	id: {
		pattern: /^[^\s]+$/,
		message: '아이디에는 공백이 없어야 합니다.',
	},
	password: {
		pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*_-]).{8,16}$/,
		message:
			'비밀번호는 영문자, 숫자, 특수문자를 포함하여 공백 없이 8자-16자여야 합니다.',
	},
	confirmPassword: {
		pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*_-]).{8,16}$/,
		message: '비밀번호가 일치하지 않습니다.',
	},
}

const personalInfoSchema = {
	username: {
		pattern: /^[^\s]+$/,
		message: '이름에는 공백문자가 없어야 합니다.',
	},
	phoneNumber: {
		pattern: /^010[\d]{3,4}[\d]{4}$/,
		message: '핸드폰번호는 10자리 이상 11자리 이하로 입력해야 합니다.',
	},
	email: {
		pattern: /^[\w\d.%+]+@[\w\d.]+[a-z]{2,}$/,
		message: '올바른 이메일 형식이 아닙니다.',
	},
}

const sellerInfoSchema = {
	brandName: {
		pattern: /^[^\s]+$/,
		message: '브랜드명에는 공백이 없어야 합니다.',
	},
	businessNumber: {
		pattern: /^[\d]{10}$/,
		message: '사업자 번호는 숫자 10자리로 이루어져야 합니다.',
	},
}

export { accountSchema, personalInfoSchema, sellerInfoSchema }
