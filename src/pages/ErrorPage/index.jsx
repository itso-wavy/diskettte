import { useNavigate, useRouteError } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Button } from '../../components/@ui/Button'
import { Img } from '../../components/@ui/Img'
import floppyImg from '/floppy.png'
import { Wrapper } from './ErrorPage.style'

export function ErrorPage() {
	useTitle('Page not found')

	const navigate = useNavigate()
	const error = useRouteError()

	const status = error.response?.status || error.status
	console.error('Error🥺:', error.message || error.error.message)

	return (
		<Wrapper>
			<Img src={floppyImg} $size='11rem' aria-hidden />
			<h1>
				Sorry!
				<br />
				Page not found.
			</h1>
			<div>
				<p>존재하지 않거나 사용할 수 없는 페이지입니다.</p>
				<p>입력하신 페이지 주소를 다시 확인해주세요.</p>
			</div>
			<p className='info'>ERROR CODE: {status}</p>
			<div className='buttons'>
				<Button
					$style='secondary'
					onClick={() => navigate(-1)}
					aria-label='go back to previous Page'
				>
					이전 페이지로
				</Button>
				<Button onClick={() => navigate('/')} aria-label='go to the main page'>
					메인으로
				</Button>
			</div>
		</Wrapper>
	)
}
