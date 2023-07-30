import {
	GithubSvg,
	FacebookSvg,
	InstagramSvg,
	TwitterSvg,
	YoutubeSvg,
} from '../@svg'
import { StyledUl, StyledLi, StyledSection } from './FooterMain.style'

function SnsItem({ icon, url, ariaLabel, ...props }) {
	return (
		<StyledLi aria-label={ariaLabel} {...props}>
			<a href={url} target='_blank'>
				{icon}
			</a>
		</StyledLi>
	)
}

function SnsList({ ...props }) {
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

export function FooterMain({ ...props }) {
	return (
		<StyledSection
			aria-labelledby='footer-heading'
			className='block'
			{...props}
		>
			<SnsList />
			<h2 id='footer-heading' className='sr-only'>
				회사와 사이트 정보
			</h2>
			<address>
				<p>
					(주)diskettte / 대표이사: <span className='wavy'>wavy</span> /
					<span className='wave'>파도시 물결구 흐름길 11-22</span>
				</p>
				<p>
					<a href='tel:+8200000000'>Tel: 0000-0000</a> /
					<a href='tel:+020000000'>Fax: 02-000-0000</a> / 사업자등록번호:
					000-00-00000
				</p>
				<p>
					통신판매업신고번호: 제 0000-가나다라-00000호 / 호스팅 서비스:
					(주)diskettte
				</p>
			</address>
			<small>COPYRIGHT&copy; 2023 diskettte. ALL RIGHT RESERVED.</small>
		</StyledSection>
	)
}
