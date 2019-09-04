import * as React from 'react'
import { Card, Input, Form, Button, InputNumber, Checkbox } from 'antd'
import { CardProps } from 'antd/lib/card'
import styled from '@emotion/styled'
import { FormState, useFormState } from 'react-use-form-state'

type StyledCardProps = CardProps & {
  bgColor?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledCard = styled<React.FC<StyledCardProps>>(Card as any)`
  width: 500px;
  margin: 10px;
  background: ${props => props.bgColor};
`

export type FormData = UserFormData
type UserFormData = {
  name: string
  age: number
  isActive: boolean
}

type ActionProps = {
  onSubmit: (
    formState: FormState<FormData>
  ) => (event: React.FormEvent<HTMLFormElement>) => void
}

type ViewProps = {
  title: string
}

export type Props = ActionProps & ViewProps

// utility function
const createArrayWithNumbers = function createArrayWithNumbers(length: number) {
  return Array.from({ length }, (_, k) => k)
}

const ArrayFieldForm: React.FC<Props> = ({ title, onSubmit }) => {
  // TODO: should move to container
  const [formState, { text, number, checkbox }] = useFormState()
  const [size, setSize] = React.useState(1)

  return (
    <StyledCard title={title}>
      <Form onSubmit={onSubmit(formState)}>
        {createArrayWithNumbers(size).map(index => {
          return (
            <div key={index}>
              <div>
                <Input
                  placeholder="input your name"
                  {...text(`name[${index}]`)}
                />
              </div>

              <div>
                <InputNumber
                  step={1}
                  placeholder="age"
                  // {...number(`age[${index}]`)}
                  value={Number(number(`age[${index}]`).value)}
                  onChange={value => formState.setField(`age[${index}]`, value)}
                />
              </div>
              <div>
                <Checkbox
                  {...checkbox(`isActive[${index}]`)}
                  onChange={e =>
                    formState.setField(`isActive[${index}]`, e.target.checked)
                  }
                />
              </div>
              <hr />
            </div>
          )
        })}

        <Button
          style={{ background: '#ec598f' }}
          onClick={() => setSize(size + 1)}
        >
          Add Person
        </Button>
        <input type="submit" />
      </Form>
    </StyledCard>
  )
}

export default ArrayFieldForm
