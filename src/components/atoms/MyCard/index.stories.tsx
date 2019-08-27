import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import { lorem } from 'faker'

import MyCard from '.'

storiesOf('atoms/MyCard', module).add('default', () => (
  <MyCard
    isLoading={boolean('isLoading', false)}
    contents={text('contents', lorem.paragraphs())}
  />
))
