import { Link, useFetcher, useSubmit } from 'react-router-dom'
import { Checkbox } from '../@ui/Input'
import { QuantitySpinner } from '../product'
import { Button } from '../@ui/Button'
import DeleteImg from '/assets/icons/wavy_menu-close.svg'
import { StyledLi } from './CartItem.style'
function CartItem({ item, ...props }) {
	// const submit = useSubmit()
	const fetcher = useFetcher()
	/*   <fetcher.Form>
  </fetcher.Form> */

	/* 
  item {
    my_cart: 520,
    cart_item_id: 3499,
    product_id: 600,
    quantity: 9,
    is_active: true,
    product: {
      product_id: 600,
      created_at: '2023-08-24T17:17:12.997484',
      updated_at: '2023-08-24T17:17:12.997506',
      product_name: '에반 윌리엄스 허니',
      image: 
        'https://openmarket.weniv.co.kr/media/products/2023/08/24/%EC%97%90%EB%B0%98_%EC%9C%8C%EB%A6%AC%EC%97%84%EC%8A%A4_%ED%97%88%EB%8B%88.png',
      price: 27800,
      shipping_method: 'PARCEL',
      shipping_fee: 0,
      stock: 999,
      product_info: '에반 윌리엄스의 달콤한 버전',
      seller: 660,
      store_name: 'Goodshop'
    }
  } */
	const { cart_item_id, product_id, quantity, is_active, product } = item

	const {
		seller: brandId,
		store_name: brandName,
		product_name,
		image,
		price,
		stock,
		shipping_method,
		shipping_fee,
	} = product
	// 품절 상품 알리기! '이 상품은 품절입니다.'
	// TODO: form 없이 form context 사용하기?
	return (
		<StyledLi {...props}>
			<div className='checkbox'>
				<Checkbox />
			</div>
			<div className='img-box'>
				<Link to={`/product/${product_id}`}>
					<img src={image} alt='' />
				</Link>
			</div>
			<div className='info-box'>
				<Link to={`/brand/${brandId}`}>{brandName}</Link>
				<Link to={`/product/${product_id}`}>{product_name}</Link>
				<p>{price}원</p>
				{/* <QuantitySpinner name={product_name} stock={stock} /> */}
				<p>52,500원</p>
			</div>
			<div className='del-btn'>
				<Button $type='icon' $img={DeleteImg} />
			</div>
			<div className='checkout-btn' style={{ width: '150px' }}>
				<Button>바로 구매</Button>
			</div>
			<div className='shipping'>
				<p>상품 52,500원 + 배송비 0원 = 52,500원</p>
			</div>
		</StyledLi>
	)
}

export { CartItem }
