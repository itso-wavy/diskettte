import {
	accountSchema,
	personalInfoSchema,
	sellerInfoSchema,
} from './auth-validation'
import { shippingInfoSchema } from './order-validation'

function validate(scheme) {
	scheme = {
		...accountSchema,
		...personalInfoSchema,
		...sellerInfoSchema,
		...shippingInfoSchema,
	}[scheme]

	const validateScheme = value => {
		if (!scheme) return false
		return scheme.pattern.test(value) ? true : scheme.message
	}

	return validateScheme
}

export default validate
