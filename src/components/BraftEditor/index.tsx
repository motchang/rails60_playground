import * as React from 'react'
import BraftEditorComp from 'braft-editor'
import 'braft-editor/dist/index.css'

// TODO: useState()する or 状態を注入できるようにする必要がある
const BraftEditor = () => (
  // TODO: language jpn がコントリビュートチャンス！！
  <BraftEditorComp language="en" controls={['bold', 'italic', 'underline']} />
)

export default BraftEditor
