import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import { FormContext, FormProvider } from '../../context/form-context'
import { useHeaderHeight } from '../../hooks'
import { Accordion } from '../@ui/Accordion'
import { FormInput } from '../@ui/Form'
import { Checkbox2 } from '../@ui/Input'
import { Button } from '../@ui/Button'
import { DoubleRangeSlider } from '../@ui/DoubleRangeSlider'
import { StyledAside } from './ProductFilter.style'
import useStore from '../../store'

function ProductFilterForm({ sortChangeHandler, ...props }) {
	const { values, onInitHandler } = useContext(FormContext)
	const freeShippingRef = useRef()
	const excludeSoldOutRef = useRef()
	const priceRangeRef = useRef()

	const order = useMemo(
		() => [
			{
				label: '낮은가격순',
				value: 'price_asc',
			},
			{
				label: '높은가격순',
				value: 'price_desc',
			},
			{
				label: '등록순',
				value: 'oldest',
			},
			{
				label: '신상품순',
				value: 'newest',
			},
		],
		[]
	)

	const resetFilter = () => {
		// freeShippingRef.current.setChecked(false)
		// excludeSoldOutRef.current.setChecked(false)
		priceRangeRef.current.initRangeSlider()
		onInitHandler()
	}

	useEffect(() => {
		sortChangeHandler(values)
	}, [values])

	return (
		<Form {...props}>
			<button type='button' className='filter-init' onClick={resetFilter}>
				필터 초기화
			</button>

			<div className='filter-box'>
				<p className='filter-title'>정렬 기준</p>
				<FormInput type='radio' option={order} name='order' />
			</div>
			<div className='filter-box'>
				<p className='filter-title'>가격대</p>
				<DoubleRangeSlider
					ref={priceRangeRef}
					id='priceRange'
					name='priceRange'
					min={values.minPrice}
					max={values.maxPrice}
				/>
			</div>

			<div className='filter-box'>
				<p className='filter-title'>상품 정보</p>
				<Checkbox2
					ref={freeShippingRef}
					id='freeShipping'
					name='freeShipping'
					info='무료배송'
					isChecked={false}
				/>
				<Checkbox2
					ref={excludeSoldOutRef}
					id='excludeSoldOut'
					name='excludeSoldOut'
					info='품절상품 제외'
					isChecked={false}
				/>
			</div>
		</Form>
	)
}

function ProductFilter({ initialState, sortChangeHandler, ...props }) {
	const { isMobile } = useStore()
	const headerHeight = useHeaderHeight()
	const previousYPositionRef = useRef(0)
	const [isScrollUp, setIsScrollUp] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const currentYPosition = window.scrollY

			currentYPosition > previousYPositionRef.current
				? setIsScrollUp(false)
				: setIsScrollUp(true)

			previousYPositionRef.current = currentYPosition
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<StyledAside $top={isScrollUp ? headerHeight : 0} {...props}>
			<Accordion
				collapsed={isMobile ? false : true}
				freeze={isMobile ? false : true}
				title={<Button>필터</Button>}
				id='product-filter'
			>
				<FormProvider initialState={initialState}>
					<ProductFilterForm sortChangeHandler={sortChangeHandler} />
				</FormProvider>
			</Accordion>
		</StyledAside>
	)
}

export { ProductFilter }
