import { useMemo } from 'react'
import { Table } from '../../components/@ui/Table'
import { useTitle } from '../../hooks'
// import { StyledTable } from './ProductsPage.style'

export function ProductsPage() {
	useTitle('상품 목록')

	const data = useMemo(
		() => [
			{ field: '상품번호', header: '상품번호', contents: [111, 222, 333] },
			{ field: '상품', header: '상품', contents: ['상품1', '상품2', '상품3'] },
			{ field: '가격', header: '가격', contents: [1000, 2000, 3000] },
			{ field: '재고', header: '재고', contents: [5, 5, 5] },
			{ field: '등록일', header: '등록일', contents: [17, 18, 19] },
		],
		[]
	)

	return (
		<div>
			<Table $align='row' caption='test' data={data} />
			<br />
			<Table $align='column' data={data} />
		</div>
	)
}
