import React from 'react'
import { Row, Col, Card, version, Icon, Button } from 'antd'
import { hot } from 'react-hot-loader/root'

import 'antd/dist/antd.css'

const SampleCards = () => {
  return (
    <div>
      <Card
        title="Default size card"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        extra={<a href="#">More</a>}
        style={{ width: 300, margin: '20px' }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card
        size="default"
        title="Large size card"
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        extra={<a href="#">More</a>}
        style={{ width: 600, margin: '20px' }}
      >
        <ButtonSize />
      </Card>
    </div>
  )
}

type Props = {
  size?: React.ComponentProps<typeof Button>['size']
}

const ButtonSize: React.FC<Props> = ({ size = 'small' }) => {
  return (
    <div>
      <Row>
        <Col span={24}>col-24</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>

      <Row>
        <Col span={6}>
          <Button type="primary" size={size}>
            Primary
          </Button>
        </Col>
        <Col span={6}>
          <Button size={size}>Normal</Button>
        </Col>
        <Col span={6}>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Col>
        <Col span={6}>
          <Button type="danger" size={size}>
            Danger
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <Button type="link" size={size}>
            Link
          </Button>
        </Col>
        <Col span={6}>
          <Button type="primary" shape="circle" icon="download" size={size} />
        </Col>
        <Col span={6}>
          <Button type="primary" shape="round" icon="download" size={size}>
            Download
          </Button>
        </Col>
        <Col span={6}>
          <Button type="primary" icon="download" size={size}>
            Download
          </Button>
        </Col>
      </Row>
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

const BaseApp: React.FC = () => {
  return (
    <div>
      <div className="App">
        <h1>Please fork this codesandbox to reproduce your issue.</h1>
        <div>Current antd version: {version}</div>
        <div style={{ marginTop: '16px' }}>
          <Button type="primary">Example buttons</Button>
        </div>

        <div style={{ padding: '10px' }} />

        <SampleCards />
      </div>
    </div>
  )
}

export const App = hot(BaseApp)
