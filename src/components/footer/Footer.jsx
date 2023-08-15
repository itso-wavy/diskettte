import { FooterMain, FooterNav } from '.'
import { StyledFooter } from './Footer.style'

export function Footer({ ...props }) {
	return (
		<StyledFooter {...props}>
			<FooterMain />
			<FooterNav />
		</StyledFooter>
	)
}
