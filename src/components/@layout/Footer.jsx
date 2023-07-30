import { FooterMain, FooterNav } from '../footer'
import { StyledFooter } from './Footer.style'

export function Footer({ ...props }) {
	return (
		<StyledFooter {...props}>
			<FooterMain />
			<FooterNav />
		</StyledFooter>
	)
}
