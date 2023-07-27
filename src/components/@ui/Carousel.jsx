import { useState, useEffect, useRef } from 'react'
import { Button } from './Button'
import PrevImg from '/assets/icons/wavy_chevron-prev.svg'
import NextImg from '/assets/icons/wavy_chevron-next.svg'
import {
	Wrapper,
	ShowBox,
	StyledUl,
	StyledLi,
	Navigation,
	Indicator,
	IndicatorItem,
	Pagination,
} from './Carousel.style'
import PropTypes from 'prop-types'

function NavigationArrows({ prevClick, nextClick, ...props }) {
	return (
		<Navigation {...props}>
			<Button
				$type='icon'
				$size='2em'
				$img={PrevImg}
				onClick={prevClick}
				aria-label='previous slide'
				className='prevClick'
			/>
			<Button
				$type='icon'
				$size='2em'
				$img={NextImg}
				onClick={nextClick}
				aria-label='next slide'
				className='nextClick'
			/>
		</Navigation>
	)
}

function PageIndicator({ items, currentIndex, onClick, ...props }) {
	return (
		<Pagination {...props}>
			<p className='current'>{1555}</p>
			<span>/</span>
			<p>{items.length}</p>
		</Pagination>
	)
}

function CarouselIndicator({ items, currentIndex, onClick, ...props }) {
	return (
		<Indicator {...props}>
			{items.map((_, index) => (
				<IndicatorItem
					key={index}
					$active={currentIndex === index}
					onClick={() => onClick(index)}
				/>
			))}
		</Indicator>
	)
}

function CarouselItem({ ariaLabel, children, ...props }) {
	return (
		<StyledLi aria-label={ariaLabel} {...props}>
			{children}
		</StyledLi>
	)
}

/**
 * @return <Carousel items autoSlideInterval? $Arrows? $Indicator? >+<CarouselItem ariaLabel/>
 */
function Carousel({
	items,
	autoSlideInterval,
	$Arrows,
	$Indicator,
	children,
	...props
}) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isAutoSliding, setAutoSliding] = useState(autoSlideInterval)
	const containerRef = useRef(null)
	const intervalIdRef = useRef(null)

	const prevSlideHandler = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		)
	}

	const nextSlideHandler = () => {
		setCurrentIndex(prevIndex => (prevIndex + 1) % items.length)
	}

	const indicatorClickHandler = index => {
		setCurrentIndex(index)
	}

	const mouseEnterHandler = () => {
		setAutoSliding(false)
	}

	const mouseLeaveHandler = () => {
		if (autoSlideInterval) setAutoSliding(true)
	}

	const resizeHandler = () => {
		containerRef.current.scrollLeft = 0
	}

	useEffect(() => {
		if (isAutoSliding) {
			intervalIdRef.current = setInterval(nextSlideHandler, autoSlideInterval)
		}

		return () => {
			clearInterval(intervalIdRef.current)
		}
	}, [isAutoSliding])

	useEffect(() => {
		if (containerRef.current) {
			const containerWidth = containerRef.current.clientWidth
			containerRef.current.scrollLeft =
				(currentIndex % items.length) * containerWidth
		}
	}, [currentIndex])

	useEffect(() => {
		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	return (
		<Wrapper>
			<ShowBox>
				<StyledUl
					ref={containerRef}
					onMouseEnter={mouseEnterHandler}
					onMouseLeave={mouseLeaveHandler}
					{...props}
				>
					{children}
				</StyledUl>
				{$Arrows &&
					$Arrows({
						prevClick: prevSlideHandler,
						nextClick: nextSlideHandler,
					})}
			</ShowBox>
			{$Indicator &&
				$Indicator({
					items: items,
					currentIndex: currentIndex,
					onClick: indicatorClickHandler,
				})}
		</Wrapper>
	)
}

Carousel.propTypes = {
	autoSlideInterval: PropTypes.number,
}

export {
	Carousel,
	CarouselItem,
	NavigationArrows,
	CarouselIndicator,
	PageIndicator,
}
