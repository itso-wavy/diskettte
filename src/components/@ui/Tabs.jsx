import { useState } from 'react'
import { Wrapper, StyledLi, TabTrigger, TabContent } from './Tabs.style'

function TabItem({ id, tab, activeTab, onClickHandler, ...props }) {
	return (
		<StyledLi
			className={activeTab ? 'active' : ''}
			role='tab'
			aria-controls='tab-description'
			{...props}
		>
			<TabTrigger type='button' onClick={() => onClickHandler(id)}>
				{tab.title}
			</TabTrigger>
			<TabContent>{tab.content}</TabContent>
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
// function Tabs({ tabs, ...props }) {
// 	const [activeTab, setActiveTab] = useState(0)
// 	const onClickHandler = id => {
// 		setActiveTab(id)
// 	}

// 	return (
// 		<Wrapper {...props}>
// 			<ul role='tablist'>
// 				{tabs.map((tab, index) => (
// 					<TabItem
// 						key={index}
// 						id={index}
// 						activeTab={activeTab === index}
// 						onClickHandler={onClickHandler}
// 					>
// 						{tab.title}
// 					</TabItem>
// 				))}
// 			</ul>
// 			<TabContent>{tabs[activeTab].content}</TabContent>
// 		</Wrapper>
// 	)
// }

export { Tabs, TabItem }
