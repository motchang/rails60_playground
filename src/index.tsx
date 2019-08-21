import React from 'react'
import ReactDOM from 'react-dom'
import { Card, version, Icon, Button } from 'antd'
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

const App = () => {
  return (
    <div>
      <div className="App">
        <h1>Please fork this codesandbox to reproduce your issue.</h1>
        <div>Current antd version: {version}</div>
        <div style={{ marginTop: '16px' }}>
          <Button type="primary">Example button</Button>
        </div>

        <div style={{ padding: '10px' }} />

        <SampleCards />
      </div>
    </div>
  )
}

if (document.querySelector('#root')) {
  ReactDOM.render(<App />, document.querySelector('#root') as HTMLElement)
}

console.log('Hello World from your main file!')
