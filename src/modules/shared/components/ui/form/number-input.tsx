import { NumericFormat } from 'react-number-format'

interface NumberInputProps extends React.ComponentProps<typeof NumericFormat> {}

export default function NumberInput(props: NumberInputProps) {
  return <NumericFormat {...props} />
}

NumberInput.displayName = 'NumberInput'
