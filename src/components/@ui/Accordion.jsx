import { useState, useEffect } from 'react'
import { StyledDetails } from './Accordion.style'

function AccordionContent({ content, id, ...props }) {
	return (
		<div id={`${id}-content`} {...props} className='content'>
			{content}
		</div>
	)
}

function AccordionTitle({ title, expanded, icon, id, freeze, ...props }) {
	return (
		<summary
			aria-expanded={expanded}
			aria-controls={`${id}-content`}
			className={`${expanded ? 'active' : ''} ${freeze ? 'freeze' : ''}`}
			{...props}
		>
			{title}
			{icon && expanded ? icon[1] : icon[0]}
		</summary>
	)
}

/**
 * @returns <Accordion title, id, collapsed, freeze?, children />
 */
function Accordion({
	collapsed = false,
	freeze = false,
	title,
	icon = '',
	id,
	children,
	...props
}) {
	const [expanded, setExpanded] = useState(collapsed)

	useEffect(() => {
		collapsed ? setExpanded(collapsed) : setExpanded(freeze)
	}, [collapsed, freeze])

	const toggleHandler = e => {
		e.preventDefault()
		if (freeze) return
		setExpanded(expanded => !expanded)
	}

	return (
		<>
			<StyledDetails id={id} open={expanded} {...props}>
				<AccordionTitle
					title={title}
					icon={icon}
					id={id}
					expanded={expanded}
					onClick={toggleHandler}
					freeze={freeze}
				/>
				<AccordionContent content={children} id={id} />
			</StyledDetails>
		</>
	)
}

export { Accordion, AccordionContent }
// Accordion.Title = AccordionTitle;
// Accordion.Content = AccordionContent;

// export default Accordion;
