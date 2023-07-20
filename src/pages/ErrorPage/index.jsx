import { useNavigate } from 'react-router-dom'
import Button from '../../components/@ui/Button'
import Img from '../../components/@ui/Img'
import floppyImg from '/floppy.png'
import styled from 'styled-components'

const Wapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		font-size: 2.25rem;
		line-height: 1.3em;
		font-weight: ${({ theme }) => theme.fw.bold};
		margin-top: 1rem;
	}

	.info {
		height: 3.125rem;
		width: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.color.disabled};
		font-weight: ${({ theme }) => theme.fw.medium};
	}

	.buttons {
		display: flex;
		width: 100%;
		padding: 1em;
		justify-content: space-between;
		gap: 1rem;
		min-width: 300px;
		max-width: 480px;
	}
`

export default function ErrorPage() {
	const navigate = useNavigate()
	const status = 404 // 수정 예정

	return (
		<Wapper>
			<Img src={floppyImg} $size='11rem' aria-hidden />
			<h1>
				Sorry!
				<br />
				Page not found.
			</h1>
			<p className='info'>ERROR CODE: {status}</p>
			<div>
				<p>존재하지 않거나 사용할 수 없는 페이지입니다.</p>
				<p>입력하신 페이지 주소를 다시 확인해주세요.</p>
			</div>
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
		</Wapper>
	)
}
