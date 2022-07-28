import { FC } from 'react'
import './select.styles.scss'

export interface Option {
  text: string
  value: string
}

export interface SelectProps {
  options: Option[]
  value?: string
  onChange?: (e: any) => any
}

const Select: FC<SelectProps> = ({ options, value, onChange }) => (
  <select className="select text-small" onChange={onChange} value={value}>
    {options.map((option) => (
      <option v-for="option of options" key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
)

export default Select
