import { StyledTable, StyledThead, StyledTbody } from './Table.style'

function ColumnTableBody({ contents, ...props }) {
	return (
		<StyledTbody role='rowgroup' {...props}>
			{contents.map((row, index) => (
				<tr key={index} role='row'>
					{row.map((content, index) => (
						<td key={index} role='cell'>
							{content}
						</td>
					))}
				</tr>
			))}
		</StyledTbody>
	)
}

function ColumnTableHead({ headers, ...props }) {
	return (
		<StyledThead role='rowgroup' {...props}>
			<tr role='row'>
				{headers.map(header => (
					<th key={header.field} scope='col' role='columnheader'>
						{header.header}
					</th>
				))}
			</tr>
		</StyledThead>
	)
}

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
					<tbody role='rowgroup'>
						{data.map(row => (
							<tr key={row.field} role='row'>
								<td scope='row'>{row.header}</td>
								{row.contents.map((content, index) => (
									<td key={index + content} role='cell'>
										{content}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</>
			)}
		</StyledTable>
	)
}

export { Table, ColumnTableHead, ColumnTableBody }
