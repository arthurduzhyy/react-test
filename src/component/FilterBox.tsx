import { FC } from 'react'
import { Form } from 'react-bootstrap'

interface FilterBoxProps {
  value: string
  onChange: (value: string) => void
}

const FilterBox: FC<FilterBoxProps> = ({ value, onChange }) => {
  return <Form.Group className="mb-3">
    <Form.Control
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Look for it..."
    />
  </Form.Group>
}

export default FilterBox