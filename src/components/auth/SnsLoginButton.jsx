import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'
import GoogleImg from '/assets/icons/flat-color-icons_google.svg'
import KakaotalkImg from '/assets/icons/simple-icons_kakaotalk.svg'
import NaverImg from '/assets/icons/simple-icons_naver.svg'

function SnsLoginButton({ src, text, ...props }) {
	return (
		<Button $style='secondary' type='button' {...props}>
			<Img src={src} style={{ marginLeft: 0 }} />
			{text}
		</Button>
	)
}

function GoogleLoginButton() {
	return <SnsLoginButton src={GoogleImg} text='구글 계정으로 로그인' />
}
function KakaotalkLoginButton() {
	return <SnsLoginButton src={KakaotalkImg} text='카카오톡 계정으로 로그인' />
}
function NaverLoginButton() {
	return <SnsLoginButton src={NaverImg} text='네이버 계정으로 로그인' />
}

export {
	SnsLoginButton,
	GoogleLoginButton,
	KakaotalkLoginButton,
	NaverLoginButton,
}
