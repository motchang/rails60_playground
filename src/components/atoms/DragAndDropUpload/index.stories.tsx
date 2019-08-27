import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { message } from 'antd'
import { UploadChangeParam } from 'antd/lib/upload'

import DragAndDropUpload from '.'

storiesOf('atoms/DragAndDropUpload', module).add('default', () => {
  const name = 'name.jpg'
  const action =
    'http://www.mocky.io/v2/5d64ba5c3200003fc7ba20f0?mocky-delay=100ms'
  const onChange = (info: UploadChangeParam) => {
    const { status } = info.file
    if (status === 'done') {
      message.success(`${info.file.name} のアップロードが完了しました`)
    } else if (status === 'error') {
      message.error(`${info.file.name} のアップロードに失敗しました`)
    }
  }

  return <DragAndDropUpload name={name} action={action} onChange={onChange} />
})
