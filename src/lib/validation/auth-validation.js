const accountSchema = {
	id: {
		pattern: /^[^\s]+$/,
		message: '아이디에는 공백이 없어야 합니다.',
	},
	password: {
		pattern:
			/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!?@#$%^&*_-])[a-zA-Z\d!?@#$%^&*_-]{8,16}$/,
		message:
			'비밀번호는 8-16자이고 영문자, 숫자, 특수문자만을 각각 한자리 이상 포함해야 합니다.',
	},
	// passwordConfirm: {
	// 	pattern:
	// 		/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!?@#$%^&*_-])[a-zA-Z\d!?@#$%^&*_-]{8,16}$/,
	// 	message: '비밀번호가 일치하지 않습니다.',
	// },
}

const personalInfoSchema = {
	username: {
		pattern: /^[a-zA-Z가-힣\s]+$/,
		message: '이름은 한글, 영문, 공백만을 포함해야 합니다.',
	},
	phoneNumber: {
		pattern: /^010-[\d]{3,4}-[\d]{4}$/,
		message: '핸드폰번호는 010으로 시작하는 10-11자의 번호만 허용합니다.',
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
		pattern: /^[\d]{3}-[\d]{2}-[\d]{5}$/,
		message: '사업자번호는 숫자 3-2-5 자리로 이루어져야 합니다.',
	},
}

const passwordSchema = {
	step1: {
		pattern: /^(?=.*[a-zA-Z]).+$/,
	},
	step2: {
		pattern: /^(?=.*\d).+$/,
	},
	step3: {
		pattern: /^(?=.*[!?@#$%^&*_-]).+$/,
	},
	step4: {
		pattern: /^.{8,16}$/,
	},
}

export { accountSchema, personalInfoSchema, sellerInfoSchema, passwordSchema }
