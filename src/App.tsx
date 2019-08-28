import React from 'react'
import { Card } from 'antd'
import { hot } from 'react-hot-loader/root'

import { TopPage } from 'components/pages/TopPage'

const BaseApp = () => (
  <TopPage>
    <Card>Hi</Card>
  </TopPage>
)

export const App = hot(BaseApp)
