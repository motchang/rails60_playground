import * as React from 'react'
import { Card as AntCard } from 'antd'
// eslint-disable-next-line import/no-extraneous-dependencies
import { lorem } from 'faker'

export type Props = {
  isLoading: boolean
}

const MyCard: React.FC<Props> = ({ isLoading }) => (
  <AntCard
    loading={isLoading}
    title="title"
    style={{ width: 500, margin: '10px' }}
  >
    {lorem.paragraphs()}
  </AntCard>
)

export default MyCard
