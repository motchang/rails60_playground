import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import IconDropdown from '.'

storiesOf('molecules/IconDropdown', module)
  .add('chapter', () => {
    const menuClickAction = (key: string) => {
      action(`onClickChapterMenu`)(key)
    }
    return <IconDropdown menuClickAction={menuClickAction} type="chapter" />
  })
  .add('content', () => {
    const menuClickAction = action('onClickContentMenu')
    return <IconDropdown menuClickAction={menuClickAction} type="content" />
  })
