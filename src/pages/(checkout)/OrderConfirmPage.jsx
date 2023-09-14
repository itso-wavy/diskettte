import { useNavigate } from 'react-router-dom'
import { Table } from '../../components/@ui/Table'
import {
	getOrderConfirm,
	removeOrderConfirm,
	removeOrderItems,
} from '../../lib/utils/storage'
import { Wrapper } from './OrderConfirmPage.style'

export const OrderConfirmLoader = async () => {}

function OrderConfirmPage() {
	const receipt = getOrderConfirm()
	const navigate = useNavigate()

	if (!receipt) {
		alert('비정상적인 접근입니다.')

		return navigate('/')
	}

	console.log('receipt: ', receipt)
	/* address: "03048 서울 종로구 청와대로 1 (세종로)"
  address_message: "."
  buyer: 666
  created_at: "2023-09-14T01:17:12.222503"
  delivery_status: "COMPLETE_PAYMENT"
  order_items: [620]
  order_number: 649
  order_quantity: [1]
  payment_method: "NAVERPAY"
  receiver: "김나나"
  receiver_phone_number: "01011111111"
  total_price: 12500 */

	removeOrderItems()
	removeOrderConfirm()

	// const headers = useMemo(() => [{ title: '', field: 'product' }], [])
	// const data = useMemo(
	// 	() => Array(cart.length).fill(item => ({ product: CartItem(item) })),
	// [
	// 	{
	// 		product: 'item1',
	// 	},
	// 	{
	// 		product: 'item2',
	// 	},
	// 	{
	// 		product: 'item3',
	// 	},
	// ]
	// []
	// )
	return (
		<>
			OrderConfirmPage
			{/* <Table checkbox headers={headers} data={data}></Table> */}
		</>
	)
}

export { OrderConfirmPage }
