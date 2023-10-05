import { useHeaderHeight, useTitle } from '../../hooks'
import {
	MinusPaddedWrapper,
	Grain,
	StyledSection,
	GridWrapper,
	Event1,
	Event2,
	Event3,
} from './EventPage.style'

export function EventPage() {
	const headerHeight = useHeaderHeight()
	const preventMove = e => {
		e.preventDefault()
	}

	useTitle('Event')

	return (
		<MinusPaddedWrapper>
			<Grain />
			<StyledSection $top={headerHeight}>
				<GridWrapper>
					<div className='title'>
						<h2>EVENT</h2>
						<div className='eyeball'>eye eye</div>
					</div>
					<div className='desc'>
						<p>
							Finally, <br />
							Our beloved <strong>Black Friday</strong> has returned!
						</p>
					</div>
					<Event1 href='.' onClick={preventMove}>
						<strong>30</strong>
						<span>New Member</span>
					</Event1>
					<Event2 href='.' onClick={preventMove}>
						<strong>BLACK FRIDAY</strong>
					</Event2>
					<Event3>
						<div></div>
						<a href='.' onClick={preventMove}>
							POPULAR
						</a>
						<a href='.' onClick={preventMove}>
							NEW ITEM
						</a>
						<a href='.' onClick={preventMove}>
							FLASH SALE
						</a>
					</Event3>
				</GridWrapper>
			</StyledSection>
		</MinusPaddedWrapper>
	)
}
