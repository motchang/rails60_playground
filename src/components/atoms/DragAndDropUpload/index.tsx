import React from 'react'
import { Upload } from 'antd'
import { UploadProps } from 'antd/lib/upload/'

const { Dragger } = Upload

export type Props = {
  name: string
  action: string
  onChange: UploadProps['onChange']
}

const DragAndDropUpload: React.FC<Props> = ({ name, action, onChange }) => (
  <Dragger multiple={false} name={name} action={action} onChange={onChange}>
    <p className="ant-upload-text">
      ドラック&ドロップでExcelファイルをアップロードしてください。
    </p>
    <p className="ant-upload-text">
      またはクリックしてファイルを選択してください。
    </p>
  </Dragger>
)

export default DragAndDropUpload
