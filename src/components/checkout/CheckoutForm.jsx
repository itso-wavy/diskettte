import { Form } from 'react-router-dom'

function CheckoutForm({ cartItems, ...props }) {
	return (
		<Form>
			{/* <AccountLoginFieldset serverMessage={serverMessages.loginFail} />
        <Flexbox $direction='row'>
          <Button
            $style='secondary'
            type='button'
            onClick={() => navigate('../signup')}
          >
            회원가입
          </Button>
          <SubmitButton>로그인</SubmitButton>
        </Flexbox>
        <LinkField {...{ isBuyer }} /> */}
			<p>
				"product_id":625,"created_at":"2023-09-04T14:49:03.334793","updated_at":"2023-09-04T14:51:39.579995","product_name":"우사기","image":"https://openmarket.weniv.co.kr/media/products/2023/09/04/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-03_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_2.24.29_LyloW9B.png","price":23000,"shipping_method":"DELIVERY","shipping_fee":2500,"stock":10,"product_info":"우사기","seller":653,"store_name":"호두까기네","quantity":1,"order_kind":"direct_order"
			</p>
		</Form>
	)
}

export { CheckoutForm }
