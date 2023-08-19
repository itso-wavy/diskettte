import { useState } from 'react'
import { Wrapper, StyledLi, TabTrigger, TabContent } from './Tabs.style'

function TabItem({ id, tab, activeTab, onClickHandler, ...props }) {
	return (
		<StyledLi className={activeTab ? 'active' : ''} {...props}>
			<TabTrigger
				type='button'
				role='tab'
				id={`tab-title-${tab.title}`}
				aria-controls={`tab-${tab.title}`}
				onClick={() => onClickHandler(id)}
			>
				{tab.title}
			</TabTrigger>
			<TabContent
				role='tabpanel'
				id={`tab-${tab.title}`}
				aria-labelledby={`tab-title-${tab.title}`}
			>
				{tab.content}
			</TabContent>
		</StyledLi>
	)
}

function Tabs({ tabs, ...props }) {
	const [activeTab, setActiveTab] = useState(0)
	const onClickHandler = id => {
		setActiveTab(id)
	}

	return (
		<Wrapper {...props}>
			<ul role='tablist'>
				{tabs.map((tab, index) => (
					<TabItem
						key={index}
						id={index}
						tab={tab}
						activeTab={activeTab === index}
						onClickHandler={onClickHandler}
					/>
				))}
			</ul>
		</Wrapper>
	)
}

export { Tabs, TabItem }
