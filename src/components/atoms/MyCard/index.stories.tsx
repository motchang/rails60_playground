import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { lorem } from 'faker'

import MyCard from '.'

storiesOf('atoms/MyCard', module).add('default', () => (
  <MyCard isLoading={false} contents={lorem.paragraphs()} />
))
