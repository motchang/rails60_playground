import React from 'react'
import { Layout as AntLayout, Button, Drawer } from 'antd'
import { useWindowSize, useToggle } from 'react-use'

import { Sider } from 'components/organisms/Sider'

const { Header, Content } = AntLayout

export const Layout: React.FC = ({ children }) => {
  const { width } = useWindowSize()
  const isMobile = width < 576

  const [visible, onDrawerToggle] = useToggle(false)
  const onDrawerClose = () => onDrawerToggle(false)

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        {isMobile && <Button icon="menu" onClick={onDrawerToggle} />}
      </Header>
      <AntLayout>
        <Sider isMobile={isMobile} visible={visible} onClose={onDrawerClose} />
        <Content style={{ padding: 24 }}>{children}</Content>
      </AntLayout>
    </AntLayout>
  )
}
