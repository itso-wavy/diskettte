import { useEffect } from 'react'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/dashboard'
import { updateProduct } from '../../lib/api'
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

	useEffect(() => {
		if (accountNumber !== brandId) {
			alert('권한이 없습니다.')
			return navigate(-1)
		}
	}, [accountNumber, brandId])

	useTitle('상품 편집')

	return (
		<ProductAdminFormSection
			type='edit'
			sectionId='productEdit'
			sectionTitle='상품 수정'
			product={{
				productId: product_id,
				productName: product_name,
				productImage: image,
				sellingPrice: price,
				shippingMethod: shipping_method,
				shippingFee: shipping_fee,
				stock,
				productInfo: product_info,
			}}
		/>
	)
}

export const productEditAction = async ({ request, params }) => {
	const productId = params.productId
	const {
		productName,
		productImage,
		sellingPrice,
		shippingFee,
		stock,
		productInfo,
		submitter,
	} = Object.fromEntries(await request.formData())
	const shippingMethod = JSON.parse(submitter).shippingMethod

	const productData = {
		product_name: productName,
		price: Number(sellingPrice),
		shipping_method: shippingMethod,
		shipping_fee: Number(shippingFee),
		stock: Number(stock),
		product_info: productInfo,
	}

	if (productImage.name) productData.image = productImage

	const seccess = () => redirect('/seller')

	return updateProduct(productId, productData, seccess)
}
