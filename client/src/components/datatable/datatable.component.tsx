import { FC } from 'react'
import './datatable.styles.scss'

export interface Item {
  id: number
  date: string
  title: string
  count: number
  distance: number
}

interface DataTableProps {
  items: Item[]
}

const DataTable: FC<DataTableProps> = ({ items }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Дата</th>
        <th>Название</th>
        <th>Количество (шт.)</th>
        <th>Расстояние (м)</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item) => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.title}</td>
          <td>{item.count}</td>
          <td>{item.distance}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default DataTable
