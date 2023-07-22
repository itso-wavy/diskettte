import { Link } from 'react-router-dom'
import useStore from '../../store'
import { StyledSection, Wrapper } from './FooterNav.style'

function FooterMenuItem({ text, url, ...props }) {
	return (
		<li {...props}>
			<Link to={url}>{text}</Link>
		</li>
	)
}

function FooterNavMenu({ title, children, ...props }) {
	return (
		<StyledSection {...props}>
			<h3>{title.toUpperCase()}</h3>
			<nav>
				<ul>{children}</ul>
			</nav>
		</StyledSection>
	)
}

export function FooterNav({ title, children, ...props }) {
	const { isMobile } = useStore()

	return (
		<Wrapper {...props}>
			{isMobile ? (
				<>
					<FooterNavMenu title='my account'>
						{/* <FooterMenuItem text='회원정보수정' url='/' />
						<FooterMenuItem text='주문배송' url='/' />
						<FooterMenuItem text='취소/교환/반품 내역' url='/' />
						<FooterMenuItem text='리뷰내역' url='/' />
						<FooterMenuItem text='증빙서류발급' url='/' />
						<FooterMenuItem text='쿠폰' url='/' /> */}
					</FooterNavMenu>
					<FooterNavMenu title='help'>
						{/* <FooterMenuItem text='1:1 상담내역' url='/' />
						<FooterMenuItem text='Q&A내역' url='/' />
						<FooterMenuItem text='FAQ' url='/' />
						<FooterMenuItem text='공지사항' url='/' />
						<FooterMenuItem text='입점/제휴문의' url='/' />
						<FooterMenuItem text='대량주문문의' url='/' />
						<FooterMenuItem text='멤버십안내' url='/' /> */}
					</FooterNavMenu>
					<FooterNavMenu title='company'>
						{/* <FooterMenuItem text='회사소개' url='/' />
						<FooterMenuItem text='이용약관' url='/' />
						<FooterMenuItem text='인재채용' url='/' />
						<FooterMenuItem text='개인정보처리방침' url='/' />
						<FooterMenuItem text='전자금융거래약관' url='/' />
						<FooterMenuItem text='청소년보호정책' url='/' /> */}
						<FooterMenuItem
							text='FAMILY SITE +'
							url='https://github.com/itso-wavy'
							className='moveout-link'
						/>
					</FooterNavMenu>
				</>
			) : (
				<>
					<FooterNavMenu title='my account'>
						<FooterMenuItem text='회원정보수정' url='/' />
						<FooterMenuItem text='주문배송' url='/' />
						<FooterMenuItem text='취소/교환/반품 내역' url='/' />
						<FooterMenuItem text='리뷰내역' url='/' />
						<FooterMenuItem text='증빙서류발급' url='/' />
						<FooterMenuItem text='쿠폰' url='/' />
					</FooterNavMenu>
					<FooterNavMenu title='help'>
						<FooterMenuItem text='1:1 상담내역' url='/' />
						<FooterMenuItem text='Q&A내역' url='/' />
						<FooterMenuItem text='FAQ' url='/' />
						<FooterMenuItem text='공지사항' url='/' />
						<FooterMenuItem text='입점/제휴문의' url='/' />
						<FooterMenuItem text='대량주문문의' url='/' />
						<FooterMenuItem text='멤버십안내' url='/' />
					</FooterNavMenu>
					<FooterNavMenu title='company'>
						<FooterMenuItem text='회사소개' url='/' />
						<FooterMenuItem text='이용약관' url='/' />
						<FooterMenuItem text='인재채용' url='/' />
						<FooterMenuItem text='개인정보처리방침' url='/' />
						<FooterMenuItem text='전자금융거래약관' url='/' />
						<FooterMenuItem text='청소년보호정책' url='/' />
						<FooterMenuItem
							text='FAMILY SITE +'
							url='https://github.com/itso-wavy'
							className='moveout-link'
						/>
					</FooterNavMenu>
				</>
			)}
		</Wrapper>
	)
}
