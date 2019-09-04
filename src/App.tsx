import React from 'react'
import { Card, version, Icon, Button } from 'antd'
import styled from '@emotion/styled'
import { hot } from 'react-hot-loader/root'

import 'antd/dist/antd.css'

import FroalaEditor from 'components/FroalaEditor'

const StyledCard = styled(Card)`
  width: 300px;
  && {
    margin: 20px 0;
  }
`

const StyledLargeCard = styled(Card)`
  width: 600px;
`

const SampleCards = () => {
  return (
    <div>
      <StyledCard
        title="Default size card"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        extra={<a href="#">More</a>}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </StyledCard>
      <StyledLargeCard
        size="default"
        title="Large size card"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        extra={<a href="#">More</a>}
      >
        <ButtonSize />
      </StyledLargeCard>
    </div>
  )
}

type Props = {
  size?: React.ComponentProps<typeof Button>['size']
}

const ButtonSize: React.FC<Props> = ({ size = 'small' }) => {
  return (
    <div>
      <Button type="primary" size={size}>
        Primary
      </Button>
      <Button size={size}>Normal</Button>
      <Button type="dashed" size={size}>
        Dashed
      </Button>
      <Button type="danger" size={size}>
        Danger
      </Button>
      <Button type="link" size={size}>
        Link
      </Button>
      <br />
      <Button type="primary" shape="circle" icon="download" size={size} />
      <Button type="primary" shape="round" icon="download" size={size}>
        Download
      </Button>
      <Button type="primary" icon="download" size={size}>
        Download
      </Button>
      <br />

      <Button.Group size={size}>
        <Button type="primary">
          <Icon type="left" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon type="right" />
        </Button>
      </Button.Group>
    </div>
  )
}

const Wrapper = styled('div')`
  padding: 16px;
`
const StyledButton = styled(Button)`
  margin: 16px 0;
`

const BaseApp: React.FC = () => {
  return (
    <Wrapper>
      <div className="App">
        <h1>Please fork this codesandbox to reproduce your issue.</h1>
        <div>Current antd version: {version}</div>
        <StyledButton type="primary">Example buttons</StyledButton>
        <SampleCards />
      </div>
      <FroalaEditor />
    </Wrapper>
  )
}

export const App = hot(BaseApp)
