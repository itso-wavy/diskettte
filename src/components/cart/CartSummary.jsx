import { useSubmit } from 'react-router-dom'
import { Button } from '../@ui/Button'
import { StyledArticle, Wrapper, StyledFlexbox } from './CartSummary.style'

function CartSummary({ summary, ...props }) {
	const submit = useSubmit()
	const {
		totalProductPrice,
		totalShippingFee,
		totalDiscount,
		totalPayment,
		totalQuantity,
	} = summary
	//FIXME: strong 태그로 임시방편 부분 수정, 원/개 단위랑 쉼표 붙이기

	const orderHandler = e => {
		e.target.value = 'toCart'

		submit('data') // TODO:
	}

	return (
		<StyledArticle {...props}>
			<Wrapper>
				<StyledFlexbox>
					<h2>CART INFO</h2>
				</StyledFlexbox>
				<dl>
					<StyledFlexbox>
						<dt>총 주문 금액</dt>
						<dd>
							<strong>{totalProductPrice}</strong> 원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 배송비</dt>
						<dd>
							<strong>{totalShippingFee}</strong> 원
						</dd>
					</StyledFlexbox>
					<StyledFlexbox>
						<dt>총 할인 금액</dt>
						<dd>
							<strong>{totalDiscount}</strong> 원
						</dd>
					</StyledFlexbox>
				</dl>
				<dl>
					<StyledFlexbox>
						<dt>총 결제 금액</dt>
						<dd>
							<strong>{totalPayment}</strong> 원
						</dd>
					</StyledFlexbox>
				</dl>
			</Wrapper>
			<StyledFlexbox>
				<div className='amount-box'>
					총 <strong>{totalQuantity}</strong>개
				</div>
				<Button name='submitter' onClick={orderHandler}>
					주문하기
				</Button>
			</StyledFlexbox>
		</StyledArticle>
	)
}

export { CartSummary }
