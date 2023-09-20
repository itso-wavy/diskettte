import { useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/seller'
import useStore from '../../store'

export function ProductEditPage() {
	const navigate = useNavigate()
	const { accountNumber } = useStore()
	const product = useLoaderData()

	// useEffect(() => {
	// 	if (accountNumber !== product.seller) {
	// 		alert('권한이 없습니다.')
	// 		return navigate(-1)
	// 	}
	// }, [accountNumber, product.seller])

	useTitle('상품 편집')

	return (
		<ProductAdminFormSection
			type='edit'
			sectionId='productEdit'
			sectionTitle='상품 수정'
			product={product}
		/>
	)
}

export const ProductEditAction = async ({ request, params }) => {}
