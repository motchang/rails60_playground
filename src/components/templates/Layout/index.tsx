import React from 'react'
import { Typography, Layout as AntLayout } from 'antd'

import { PrimarySider, SecondarySider } from 'components/organisms/Sider'

export const Layout: React.FC = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout.Header>
        <Typography.Title type="danger">Rails 60 Playground</Typography.Title>
      </AntLayout.Header>
      <AntLayout>
        <PrimarySider />
        <SecondarySider />
        <AntLayout.Content style={{ padding: 24 }}>
          {children}
        </AntLayout.Content>
      </AntLayout>
    </AntLayout>
  )
}
