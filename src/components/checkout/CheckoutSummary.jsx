import { useState } from 'react'
import { FormInput, SubmitButton } from '../@ui/Form'
import { Link } from 'react-router-dom'

function CheckoutSummary({ order, ...props }) {
	const [summary, setSummary] = useState({})

	/* const 전체주문 = {
		order_kind: 'cart_order',
		total_price: 227500,
		cart: {
			620: {
        quantity: 1
				created_at: "2023-09-03T16:10:16.136753"
        image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%92%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%85%E1%85%A6.jpeg"
        price: 10000
        product_id: 620
        product_info: "하치와레"
        product_name: "하치와레"
        seller: 653
        shipping_fee: 2500
        shipping_method: "DELIVERY"
        stock: 2
        store_name: "호두까기네"
        updated_at: "2023-09-10T22:06:01.549023"
			},
		},
	} 
 
	const 바로주문 = {
		order_kind: 'cart_one_order', 또는 "direct_order"
    total_price: 10000,
    product_id: 620,
    quantity: 1,
		cart: {
      quantity: 1
      created_at: "2023-09-03T16:10:16.136753"
      image: "https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%92%E1%85%A1%E1%84%8E%E1%85%B5%E1%84%8B%E1%85%AA%E1%84%85%E1%85%A6.jpeg"
      price: 10000
      product_id: 620
      product_info: "하치와레"
      product_name: "하치와레"
      seller: 653
      shipping_fee: 2500
      shipping_method: "DELIVERY"
      stock: 2
      store_name: "호두까기네"
      updated_at: "2023-09-10T22:06:01.549023"
		},
	}
  */

	return (
		<article>
			<FormInput
				required
				type='checkbox'
				id='termsAgree'
				name='termsAgree'
				info={
					<>
						주문 내용을 확인하였으며{' '}
						<Link to='' className='link'>
							필수 정보 제공
						</Link>
						에 동의합니다.
					</>
				}
			/>
			<SubmitButton>결제하기</SubmitButton>
		</article>
	)
}

export { CheckoutSummary }
