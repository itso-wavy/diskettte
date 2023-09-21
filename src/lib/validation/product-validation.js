const productInfoSchema = {
	productImage: {
		pattern: /\.(jpg|gif|png)$/i,
		message: '.jpg, .gif, .png 확장자만 업로드 가능합니다.',
	},
	productName: {
		pattern: /.*/,
		message: '상품명을 입력해주세요.',
	},
	sellingPrice: {
		pattern: /^\d{0,9}$/,
		message: '판매 가능 금액을 초과하였습니다.',
	},
	shippingMethod: {
		pattern: /^(PARCEL|DELIVERY)$/,
		message: '직배송, 택배배송만 선택 가능합니다.',
	},
	shippingFee: {
		pattern: /^\d{0,6}$/,
		message: '설정 가능한 배송비를 초과하였습니다.',
	},
	stock: {
		pattern: /^\d{0,5}$/,
		message: '설정 가능한 재고를 초과하였습니다.',
	},
	productInfo: {
		pattern: /^(?!.*트롤).*$/m,
		message: '바르고 고운 말을 사용해주세요...',
	},
}

export { productInfoSchema }
