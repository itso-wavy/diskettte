import { Button } from '../@ui/Button'
import { Img } from '../@ui/Img'

function SnsLoginButton({ src, text, ...props }) {
	return (
		<Button $style='secondary' type='button' {...props}>
			<Img src={src} style={{ marginLeft: 0 }} />
			{text}
		</Button>
	)
}

export { SnsLoginButton }
