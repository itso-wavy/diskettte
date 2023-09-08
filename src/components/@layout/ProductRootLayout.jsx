import { Outlet, json } from 'react-router-dom'
import { useRedirect } from '../../hooks'
import { api, clientAPI, firebaseAPI } from '../../lib/api'

export const productsLoader = async ({ request }) => {
	//FIXME: 모든 카트를 불러와서 페이지네이션 로직을 클라이언트에서 처리할 수도.. 즉 한 페이지에 몇개의 아이템을 보여줄지 맘대로 변경할 수 있음. 이는 부하가 많은 일이므로 고민이 필요함
	//과부하 줄이기: **무한스크롤**을 이용하면 어떨까. 요소 끝에 다다를 때마다 다음 페이지를 불러옴. 아님 한번에 2페이지 결과물씩 보여줌. results 중에서 브랜드 아이디가 일치하는 것만 보여주고, 첫 결과물에 일치값이 없다면 일치값이 생길 때까지 로드해야 함
	const searchParams = new URL(request.url).searchParams
	const pageParam = searchParams.get('page') ?? '1'

	const firebase = firebaseAPI('banners.json')
	const client = clientAPI(`products/?page=${pageParam}`)

	const success = res => res.data // data || null
	const error = err => {
		throw json(
			{ message: err.message || err.response?.statusText },
			{ status: err.response.status }
		)
	}

	const banners = await api(firebase)(success, error)
	const products = await api(client)(success, error)

	return { currentPage: pageParam, banners, products }
}

export function ProductRootLayout() {
	useRedirect('categories', 'all')

	return (
		<>
			<Outlet />
		</>
	)
}
