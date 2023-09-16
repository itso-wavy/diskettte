import { StyledTable } from './Table.style'

// function TableBody({ data, ...props }) {
// 	return (
// 		<tbody {...props}>
// 			<tr role='row'>
// 				{data.map((cellData, index) => (
// 					<td key={index} role='cell'>
// 						{cellData}
// 					</td>
// 				))}
// 			</tr>
// 		</tbody>
// 	)
// }

// function TableHead({ headers, ...props }) {
// 	return (
// 		<thead {...props}>
// 			<tr>
// 				{headers.map((header, index) => (
// 					<th key={index} role='columnheader'>
// 						{header}
// 					</th>
// 				))}
// 			</tr>
// 		</thead>
// 	)
// }

// const headers = useMemo(() => [{field: '', title: ''}], [])
// const data = useMemo(() => [{field: '', data: ''}], [])

// const data = useMemo(() => [{field: '', title: '', data: ''}], [])
function Table({
	caption,
	captionID,
	align = 'column',
	data,
	ariaLabel,
	...props
}) {
	return (
		<StyledTable
			role='table'
			aria-label={ariaLabel}
			aria-describedby={caption ? captionID : null}
			$align={align}
			{...props}
		>
			{caption && <caption id={captionID}>{caption}</caption>}
			<thead role='rowgroup'>
				<tr role='row'>
					{data.map(header => (
						<th
							key={header.field}
							id={header.field}
							scope='col'
							role='columnheader'
						>
							{header.title}
						</th>
					))}
				</tr>
			</thead>
			<tbody role='rowgroup'>
				<tr role='row'>
					{data.map(row => (
						<td
							key={row.field}
							headers={row.field}
							data-cell={row.title}
							scope='row'
							role='cell'
						>
							{row.data}
						</td>
					))}
					{/* {row.map(cell => (
									<td key={cell.field} headers={cell.field} role='cell'>
										{cell.data}
									</td>
								))} */}
				</tr>
			</tbody>
		</StyledTable>
	)
}

export {
	Table,
	//  TableHead, TableBody
}
