import React from 'react'
import floppyImg from '../../../public/floppy.png'
import styled from 'styled-components'
import Button from '../../components/@ui/Button'

const Wapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	gap: ${({ theme }) => theme.dx['2xl']};
	justify-content: center;
	align-items: center;
	text-align: center;

	img {
		width: 11rem;
		height: 11rem;
	}

	h1 {
		font-size: ${({ theme }) => theme.fs['3xl']};
		font-weight: ${({ theme }) => theme.fw.bold};
		line-height: ${({ theme }) => theme.lh.sm};
		margin-top: 1rem;
	}

	.info {
		height: ${({ theme }) => theme.height};
		width: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: ${({ theme }) => theme.colors.disabled};
		font-weight: ${({ theme }) => theme.fw.medium};
	}
`

export default function ErrorPage() {
	return (
		<Wapper>
			<img src={floppyImg} alt='' />
			<h1>
				Sorry!
				<br />
				Page not found.
			</h1>
			<p className='info'>ERROR CODE: {'404'}</p>
			<div>
				<p>존재하지 않거나 사용할 수 없는 페이지입니다.</p>
				<p>입력하신 페이지 주소를 다시 확인해주세요.</p>
			</div>
			<div>
				<Button>이전 페이지로</Button>
				<Button>메인으로</Button>
			</div>
		</Wapper>
	)
}
