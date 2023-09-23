import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { Section } from '../../components/@motion'
import { Button } from '../../components/@ui/Button'

export function ExclusivePage() {
	const navigate = useNavigate()
	useEffect(() => {
		alert(
			'👷‍♂더 좋은 코드를 위해 공사 중입니다.🚧\n프로젝트 2차 진행시 백엔드 구축 후 구현 예정.'
		)
	}, [])

	useTitle('Exclusive')

	return (
		<>
			<Section
				sectionId='exclusiveHero'
				sectionTitle='exclusive hero'
				style={{
					background: 'black',
					height: '80vh',
					display: 'grid',
					placeItems: 'center',
					margin: '0 0 -200px',
				}}
			>
				<Button
					$style='secondary'
					style={{ width: '250px' }}
					onClick={() => navigate(-1)}
				>
					뒤로 가기
				</Button>
			</Section>
		</>
	)
}
