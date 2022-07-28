import { FC, useState, useEffect, useCallback } from 'react'
import { getItems } from '../../api/items'
import { Item } from '../../components/datatable/datatable.component'
import DataTable from '../../components/datatable/datatable.component'
import Loader from '../../components/loader/loader.component'
import Pagination from '../../components/pagination/pagination.component'
import Select from '../../components/select/select.component'
import Input from '../../components/input/input.component'
import './homepage.styles.scss'

type sortType = 'title' | 'count' | 'distance'
type filterOption = 'equals' | 'contains' | 'greater' | 'less'

const HomePage: FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [items, setItems] = useState<Item[]>([])
  const [sortType, setSortType] = useState<sortType>('count')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [filterField, setFilterField] = useState<sortType>('title')
  const [filterOption, setFilterOption] = useState<filterOption>('equals')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    let localFilterValue = filterValue
    if (['greater', 'less'].includes(filterOption) && filterField === 'title') {
      localFilterValue = ''
    } else if (filterOption === 'contains' && filterField !== 'title') {
      localFilterValue = ''
    }
    setIsLoading(true)
    getItems({
      page,
      sorttype: sortType,
      filterfield: filterField,
      filteroption: filterOption,
      filtervalue: localFilterValue,
    })
      .then((response) => {
        setIsLoading(false)
        setItems(response.data.items)
        setTotalPages(response.data.totalPages)
      })
      .catch((result) => {
        console.log('error loading data')
        setIsLoading(false)
        if (result?.data) {
          setError(result.data.error)
        } else {
          setError(result)
        }
      })
  }, [page, sortType, filterField, filterOption, filterValue])

  const onSortOrderChange = useCallback((e: Event) => {
    setPage(1)
    setSortType((e.target as HTMLSelectElement).value as sortType)
  }, [])

  return (
    <div className="homepage">
      <div className="top-container">
        <div className="row">
          <span className="description">Сортировка:</span>
          <Select
            options={[
              { value: 'title', text: 'По названию' },
              { value: 'count', text: 'По количеству' },
              { value: 'distance', text: 'По расстоянию' },
            ]}
            value={sortType}
            onChange={onSortOrderChange}
          />
        </div>
        <div className="row">
          <span className="description">Фильтрация:</span>
          <Select
            options={[
              { value: 'title', text: 'Название' },
              { value: 'count', text: 'Количество' },
              { value: 'distance', text: 'Расстояние' },
            ]}
            value={filterField}
            onChange={(e) => setFilterField(e.target.value)}
          />
          <Select
            options={[
              { value: 'equals', text: 'равно' },
              { value: 'contains', text: 'содержит' },
              { value: 'greater', text: 'больше' },
              { value: 'less', text: 'меньше' },
            ]}
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          />
          <Input
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DataTable items={items} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      )}
    </div>
  )
}

export default HomePage
