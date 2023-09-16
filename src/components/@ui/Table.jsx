import { StyledTable } from './Table.style'

function TableBody({ contents, ...props }) {
	return (
		<tbody role='rowgroup' {...props}>
			{contents.map((row, index) => (
				<tr key={index} role='row'>
					{row.map((content, index) => (
						<td
							key={index}
							// key={row.field}
							// headers={row.field}
							// data-cell={row.header}
							scope='row'
							role='cell'
						>
							{content}
						</td>
					))}
				</tr>
			))}
			{/* {row.map(cell => (
									<td key={cell.field} headers={cell.field} role='cell'>
										{cell.data}
									</td>
								))} */}
		</tbody>
	)
}

function TableHead({ headers, ...props }) {
	return (
		<thead role='rowgroup' {...props}>
			<tr role='row'>
				{headers.map(header => (
					<th
						key={header.field}
						id={header.field}
						scope='col'
						role='columnheader'
					>
						{header.header}
					</th>
				))}
			</tr>
		</thead>
	)
}

// const headers = useMemo(() => [{field: '', title: ''}], [])
// const data = useMemo(() => [{field: '', data: ''}], [])

// const data = useMemo(() => [{field: '', title: '', data: ''}], [])
function Table({
	caption,
	captionID,
	align = 'column',
	data,
	children,
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
			{children}
			{!children && (
				<>
					<thead role='rowgroup'>
						<tr role='row'>
							{data.map(header => (
								<th
									key={header.field}
									id={header.field}
									scope='col'
									role='columnheader'
								>
									{header.header}
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
									data-cell={row.header}
									scope='row'
									role='cell'
								>
									{row.content}
								</td>
							))}
							{/* {row.map(cell => (
    									<td key={cell.field} headers={cell.field} role='cell'>
    										{cell.data}
    									</td>
    								))} */}
						</tr>
					</tbody>
				</>
			)}
		</StyledTable>
	)
}

export { Table, TableHead, TableBody }
