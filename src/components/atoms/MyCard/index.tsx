import * as React from 'react'
import { Card } from 'antd'
import { CardProps } from 'antd/lib/card'
import styled from '@emotion/styled'

export type Props = {
  isLoading: boolean
  contents: string
}

type StyledCardProps = CardProps & {
  bgColor?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledCard = styled<React.FC<StyledCardProps>>(Card as any)`
  width: 500px;
  margin: 10px;
  background: ${props => props.bgColor};
`

const MyCard: React.FC<Props> = ({ isLoading, contents }) => (
  <StyledCard loading={isLoading} title="title">
    {contents}
  </StyledCard>
)

export default MyCard
