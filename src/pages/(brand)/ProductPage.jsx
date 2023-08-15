import { json, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import axios from 'axios'

export const productLoader = async ({ params, request }) => {
	const productId = params.productId

	const response = await axios(
		`https://openmarket.weniv.co.kr/products/${productId}/`
	)

	try {
		if (response.status === 200) return response.data
	} catch (err) {
		throw json({ message: `Couldn't fetch data from server.` }, { status: 500 })
	}
}

export function ProductPage() {
	const {
		seller,
		store_name,
		product_id,
		product_name,
		image,
		price,
		product_info,
		shipping_fee,
		shipping_method,
		stock,
		created_at,
		updated_at,
	} = useLoaderData()
	/* 
  seller: 405
  store_name: "anything else"
  product_id: 501
  product_name: "설산 아로마 디퓨저"
  image: "https://openmarket.weniv.co.kr/media/products/2023/04/18/B005189318.jpg"
  price: 18000
  product_info: "적은 용량으로 오랜 기간 동안 사용 가능한 고농축 프래그런스 오일입니다.\r\n- 은은한 발향: 2~3방울 (60일 사용 가능)\r\n- 넓은 발향: 4~5방울 (40일 사용 가능)"
  shipping_fee: 3000
  shipping_method: "PARCEL"
  stock: 0
  created_at: "2023-04-18T03:21:56.149250"
  updated_at: "2023-05-02T22:49:50.702972"
 */
	useTitle(product_name)

	return (
		<div>
			<p>{seller}</p>
			<p>{store_name}</p>
			<p>{product_id}</p>
			<p>{product_name}</p>
			<img src={image} />
			<p>{price}</p>
			<p>{product_info}</p>
			<p>{shipping_fee}</p>
			<p>{shipping_method}</p>
			<p>{stock}</p>
			<p>{created_at}</p>
			<p>{updated_at}</p>
		</div>
	)
}
