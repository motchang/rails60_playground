import * as React from 'react'
import { Card as AntCard } from 'antd'

export type Props = {
  isLoading: boolean
  contents: string
}

const MyCard: React.FC<Props> = ({ isLoading, contents }) => (
  <AntCard
    loading={isLoading}
    title="title"
    style={{ width: 500, margin: '10px' }}
  >
    {contents}
  </AntCard>
)

export default MyCard
