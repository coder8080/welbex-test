import { FC } from 'react'
import ErrorIcon from '../../assets/icons/error.svg'
import './error.styles.scss'

interface ErrorProps {
  error: string
}

const Error: FC<ErrorProps> = ({ error }) => (
  <div className="error">
    <img src={ErrorIcon} alt="Error" className="error-icon" />
    <span className="text">{error}</span>
  </div>
)

export default Error
