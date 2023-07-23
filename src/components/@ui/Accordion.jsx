import { useState } from 'react'
import { StyledDetails } from './Accordion.style'
import { useEffect } from 'react'

function AccordionContent({ content, id, ...props }) {
	return (
		<div id={`${id}-content`} {...props} className='content'>
			{content}
		</div>
	)
}

function AccordionTitle({ title, expanded, id, freeze, ...props }) {
	return (
		<summary
			aria-expanded={expanded}
			aria-controls={`${id}-content`}
			className={`trigger ${expanded ? 'active' : ''} ${
				freeze ? 'freeze' : ''
			}`}
			{...props}
		>
			{title}
		</summary>
	)
}

/**
 * @returns <Accordion title, id, freeze?, children />
 */
export function Accordion({ freeze, title, id, children, ...props }) {
	const [expanded, setExpanded] = useState(false)

	useEffect(() => {
		setExpanded(freeze)
	}, [freeze])

	const toggleHandler = e => {
		e.preventDefault()
		if (freeze) return
		setExpanded(expanded => !expanded)
	}

	return (
		<>
			<StyledDetails id={id} onClick={toggleHandler} {...props} open={expanded}>
				<AccordionTitle
					title={title}
					expanded={expanded}
					id={id}
					freeze={freeze}
				/>
				<AccordionContent content={children} id={id} />
			</StyledDetails>
		</>
	)
}
