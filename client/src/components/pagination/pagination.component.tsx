import { FC } from 'react'
import './pagination.styles.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  setPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setPage,
}) => {
  let pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <div
        className={`page${currentPage === i ? ' active' : ''}`}
        onClick={() => setPage(i)}
        key={i}
      >
        {i}
      </div>
    )
  }
  return <div className="pagination">{pages}</div>
}

export default Pagination
