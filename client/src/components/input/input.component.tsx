import { forwardRef } from 'react'
import './input.styles.scss'

interface InputProps {
  value: string
  placeholder?: string
  onChange?: (e: any) => any
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, placeholder, onChange }, ref) => (
    <input
      ref={ref}
      v-if="type === 'input'"
      type="text"
      className="input text-small"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
)

export default Input
