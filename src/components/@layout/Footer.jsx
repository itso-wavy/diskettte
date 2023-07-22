import { SnsList } from '../footer'
import { StyledFooter, FooterMain } from './Footer.style'

export default function Footer({ children, ...props }) {
	return (
		<StyledFooter {...props}>
			<FooterMain aria-labelledby='footer-heading'>
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
				<small>COPYRIGHT 2023 diskettte. ALL RIGHT RESERVED.</small>
			</FooterMain>
			{children}
		</StyledFooter>
	)
}
