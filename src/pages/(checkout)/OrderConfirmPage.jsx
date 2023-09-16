import { useEffect, useMemo } from 'react'
import { redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Table } from '../../components/@ui/Table'
import { Img } from '../../components/@ui/Img'
import DiskImg from '/assets/icons/wavy_floppy-disk-skew.svg'
import QRCodeImg from '/assets/images/qr-code.png'
import { getProduct } from '../../lib/api'
import {
	getOrderConfirm,
	removeOrderConfirm,
	removeOrderItems,
} from '../../lib/utils/storage'
import { formatNumber, formatDate } from '../../lib/utils/text-formatter'
import { StyledSection } from './OrderConfirmPage.style'

export const orderConfirmLoader = async () => {
	const receipt = getOrderConfirm()

	if (!receipt) {
		alert('비정상적인 접근입니다.')

		return redirect('/')
	}

	const firstProduct = await getProduct(receipt.order_items[0])

	return { ...receipt, firstProduct }
}

function OrderConfirmPage() {
	const receipt = useLoaderData()

	const {
		order_number,
		created_at,
		delivery_status,
		payment_method,
		total_price,
		order_items,
		receiver,
		receiver_phone_number,
		address,
		address_message,
		firstProduct,
	} = receipt

	const paymentMethod = (() => {
		switch (payment_method) {
			case 'CARD':
				return '신용/체크카드'
			case 'TOSSPAY':
				return '토스페이'
			case 'NAVERPAY':
				return '네이버페이'
			case 'KAKAOPAY':
				return '카카오페이'
			case 'SAMSUNGPAY':
				return '삼성페이'
			case 'PAYCO':
				return 'PAYCO'
			case 'SSGPAY':
				return 'SSG 페이'
			case 'BANKTRANSFER':
				return '실시간 계좌이체'
			case 'DEPOSIT':
				return '무통장 입금'
			case 'PHONE_PAYMENT':
				return '휴대폰 결제'
			default:
				return '신용/체크카드'
		}
	})()

	const dateOpts = { year: '2-digit', month: '2-digit', day: '2-digit' }
	const formattedOrderNumberDate = formatDate(created_at, dateOpts).replaceAll(
		/[.\s]/g,
		''
	)
	const orderNumber = `DSK${formattedOrderNumberDate}-
  ${String(order_number).padStart('6', '0')}`

	const tableData = useMemo(
		() => [
			{ field: 'created_at', title: '주문 일시', data: formatDate(created_at) },
			{
				field: 'delivery_status',
				title: '주문 상태',
				data: delivery_status === 'COMPLETE_PAYMENT' && '결제 완료',
			},
			{ field: 'paymentMethod', title: '결제 수단', data: paymentMethod },
			{
				field: 'total_price',
				title: '결제 금액',
				data: `${formatNumber(total_price)}원`,
			},
			{
				field: 'order_items',
				title: '주문 상품',
				data: `${firstProduct.product_name} 외 ${order_items.length - 1}종`,
			},
			{ field: 'receiver', title: '수령인', data: receiver },
			{
				field: 'receiver_phone_number',
				title: '수령인 휴대폰',
				data: receiver_phone_number,
			},
			{ field: 'address', title: '주소', data: address },
			{
				field: 'address_message',
				title: '배송 요청 사항',
				data: address_message,
			},
		],
		[]
	)

	useEffect(() => {
		return () => {
			removeOrderItems()
			removeOrderConfirm()
		}
	}, [])

	useTitle('주문 확인')

	return (
		<StyledSection aria-labelledby='checkout'>
			<h2>
				<span>thank</span> <span>you.</span>
			</h2>
			<div className='order-number'>
				<p>주문이 완료되었습니다.</p>
				<p>
					주문번호 <strong>{orderNumber}</strong>
				</p>
				<Img src={QRCodeImg} alt='qrcode' className='qr-code' $size='4.5em' />
			</div>
			<Table align='row' data={tableData} ariaLabel='주문 확인서' />
		</StyledSection>
	)
}

export { OrderConfirmPage }
