export const gridHeader = (name: string): HTMLTableRowElement => {
	const row = <HTMLTableRowElement>document.createElement('tr')

	const team = <HTMLTableDataCellElement>document.createElement('th')
	team.innerHTML = name.toUpperCase()
	row.appendChild(team)

	for (let i = 1; i <= 6; i++) {
		const th = <HTMLTableDataCellElement>document.createElement('th')
		th.innerHTML = `B${i}`
		row.appendChild(th)
	}

	const total = <HTMLTableDataCellElement>document.createElement('th')
	total.innerHTML = 'TOTAL'
	row.appendChild(total)

	return row
}
