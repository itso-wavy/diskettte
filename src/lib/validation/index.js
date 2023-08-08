import {
	accountSchema,
	personalInfoSchema,
	sellerInfoSchema,
} from './auth-validation'

function validate(scheme) {
	scheme = { ...accountSchema, ...personalInfoSchema, ...sellerInfoSchema }[
		scheme
	]
	const validateScheme = value => {
		if (!scheme) return false
		return scheme.pattern.test(value) ? true : scheme.message
	}

	return validateScheme
}

export default validate

// const {
//   authValidation: {
//     accountSchema: { id, password,confirmPassword },
//     personalInfoSchema: {username, phoneNumber, email},
//     sellerInfoSchema:{brandName,businessNumber}
//   },
// } = authValidation;

// authValidation
