import { redirect } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { ProductAdminFormSection } from '../../components/seller'
import { createProduct } from '../../lib/api'

export function ProductCreatePage() {
	useTitle('상품 등록')

	return (
		<ProductAdminFormSection
			type='create'
			sectionId='productCreate'
			sectionTitle='상품 등록'
		/>
	)
}

export const productCreateAction = async ({ request, params }) => {
	const {
		productName,
		productImage,
		sellingPrice,
		shippingMethod,
		shippingFee,
		stock,
		productInfo,
	} = Object.fromEntries(await request.formData())

	const productData = {
		product_name: productName,
		image: productImage,
		price: Number(sellingPrice),
		shipping_method: shippingMethod,
		shipping_fee: Number(shippingFee),
		stock: Number(stock),
		product_info: productInfo,
	}

	const seccess = () => redirect('/seller')

	return createProduct(productData, seccess)
}
