import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import PrevImg from '/assets/icons/wavy_chevron-prev.svg'
import NextImg from '/assets/icons/wavy_chevron-next.svg'
import {
	Wrapper,
	StyledUl,
	StyledLi,
	Navigation,
	Indicator,
	IndicatorItem,
} from './Carousel.style'
import PropTypes from 'prop-types'

function NavigationArrows({ prevClick, nextClick }) {
	return (
		<Navigation>
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

function CarouselIndicator({ items, currentIndex, onClick }) {
	return (
		<Indicator>
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

function CarouselItem({ src, alt, url, ariaLabel }) {
	return (
		<StyledLi aria-label={ariaLabel}>
			<Link to={url}>
				<img src={src} alt={alt} draggable='false' />
			</Link>
		</StyledLi>
	)
}

function Carousel({ items, autoSlideInterval }) {
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

	return (
		<Wrapper>
			<StyledUl
				ref={containerRef}
				onMouseEnter={mouseEnterHandler}
				onMouseLeave={mouseLeaveHandler}
			>
				{items.map(item => (
					<CarouselItem key={item.id} {...item} />
				))}
			</StyledUl>
			<NavigationArrows
				prevClick={prevSlideHandler}
				nextClick={nextSlideHandler}
			/>
			<CarouselIndicator
				items={items}
				currentIndex={currentIndex}
				onClick={indicatorClickHandler}
			/>
		</Wrapper>
	)
}

Carousel.propTypes = {
	autoSlideInterval: PropTypes.number,
}

export { Carousel }
