export const createCartSlice = set => ({
	summary: {
		totalProductPrice: 0,
		totalShippingFee: 0,
		totalDiscount: 0,
		totalPayment: 0,
		totalQuantity: 0,
	},
	setSummary: change =>
		set(state => ({ summary: { ...state.summary, change } })),
})

/* 
  totalProductPrice // total_price
  totalShippingFee // total_shipping_fee
  totalDiscount 0,
  totalPayment // total_product_price
  totalQuantity: 0,
  
  combinedCartInfoList, // 카트상품정보+수량
  카트 수정, 
  카트 삭제
  */
