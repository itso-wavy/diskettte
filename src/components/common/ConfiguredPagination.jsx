import { Pagination } from '../@ui/Pagination'
import useStore from '../../store'

/**
 * <ConfiguredPagination title theme currentPage totalItemsCount />
 */
function ConfiguredPagination({ title, theme, currentPage, totalItemsCount }) {
	const { isMobile } = useStore()
	const pageRange = isMobile ? 5 : 10
	let ITEMS_PER_PAGE = 15 // 백엔드, 클라이언트 설정 통일

	return (
		<Pagination
			title={title}
			theme={theme}
			pageRange={pageRange}
			currentPage={Number(currentPage)}
			itemsPerPage={ITEMS_PER_PAGE}
			totalItemsCount={totalItemsCount}
		/>
	)
}

export { ConfiguredPagination }
