import {
	GithubSvg,
	FacebookSvg,
	InstagramSvg,
	TwitterSvg,
	YoutubeSvg,
} from '../@svg'
import { StyledUl, StyledLi } from './FooterMain.style'

function SnsItem({ icon, url, ariaLabel, ...props }) {
	return (
		<StyledLi aria-label={ariaLabel} {...props}>
			<a href={url} target='_blank'>
				{icon}
			</a>
		</StyledLi>
	)
}

export function SnsList({ ...props }) {
	return (
		<StyledUl aria-label='sns links' {...props}>
			<SnsItem
				icon={<GithubSvg />}
				url='https://github.com/itso-wavy'
				ariaLabel='github link'
			/>
			<SnsItem
				icon={<FacebookSvg />}
				url='https://github.com/itso-wavy'
				ariaLabel='facebook link'
			/>
			<SnsItem
				icon={<InstagramSvg />}
				url='https://github.com/itso-wavy'
				ariaLabel='instagram link'
			/>
			<SnsItem
				icon={<TwitterSvg />}
				url='https://github.com/itso-wavy'
				ariaLabel='twitter link'
			/>
			<SnsItem
				icon={<YoutubeSvg />}
				url='https://github.com/itso-wavy'
				ariaLabel='youtube link'
			/>
		</StyledUl>
	)
}
