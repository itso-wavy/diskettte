import { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/seller'
import useStore from '../../store'

export function ProductEditPage() {
	const navigate = useNavigate()
	const { accountNumber } = useStore()
	const {
		seller: brandId,
		product_id,
		product_name,
		image,
		price,
		shipping_method,
		shipping_fee,
		stock,
		product_info,
	} = useLoaderData()

	// useEffect(() => {
	// 	if (accountNumber !== brandId) {
	// 		alert('권한이 없습니다.')
	// 		return navigate(-1)
	// 	}
	// }, [accountNumber, brandId])

	useTitle('상품 편집')

	return (
		<ProductAdminFormSection
			type='edit'
			sectionId='productEdit'
			sectionTitle='상품 수정'
			product={{
				productId: product_id,
				productName: product_name,
				image,
				sellingPrice: price,
				shippingMethod: shipping_method,
				shippingFee: shipping_fee,
				stock,
				productInfo: product_info,
			}}
		/>
	)
}

export const ProductEditAction = async ({ request, params }) => {}
