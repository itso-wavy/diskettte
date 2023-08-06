import {
	accountSchema,
	personalInfoSchema,
	sellerInfoSchema,
} from './auth-validation'

function validate(scheme) {
	scheme = { ...accountSchema, ...personalInfoSchema, ...sellerInfoSchema }[
		scheme
	]
	const validateScheme = value =>
		scheme.pattern.test(value) ? null : scheme.message

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
