import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { FormState } from 'react-use-form-state'
import { action } from '@storybook/addon-actions'

import UserForm, { FormData } from './UserForm'

storiesOf('atoms/MyCard', module).add('default', () => {
  const onSubmit = (formState: FormState<FormData>) => (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    action('onSubmit')(formState.values)
  }
  return <UserForm onSubmit={onSubmit} title="user form test" />
})
