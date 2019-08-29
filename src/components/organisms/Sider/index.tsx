import React from 'react'
import { Layout, Drawer, Icon } from 'antd'
import { useToggle } from 'react-use'

import { PrimarySider } from './PrimarySider'
import { SecondarySider } from './SecondarySider'

type Props = {
  isMobile?: boolean
  visible?: boolean
  onClose?: React.ComponentProps<typeof Drawer>['onClose']
}

export const Sider: React.FC<Props> = ({ isMobile, visible, onClose }) => {
  const [childrenVisible, onChildrenDrawerToggle] = useToggle(false)

  if (isMobile) {
    return (
      <Drawer
        closable={false}
        onClose={onClose}
        placement="left"
        visible={visible}
        title={
          <>
            <Icon
              type="left"
              onClick={() => onChildrenDrawerToggle(true)}
              style={{ marginRight: 8 }}
            />
            <span>中堅社員</span>
          </>
        }
        width={320}
      >
        <SecondarySider style={{ borderRight: 0 }} isMobile />

        <Drawer
          closable={false}
          onClose={() => onChildrenDrawerToggle(false)}
          placement="left"
          style={{ padding: 0 }}
          visible={childrenVisible}
          title="株式会社ほげ"
        >
          <PrimarySider style={{ borderRight: 0 }} isMobile />
        </Drawer>
      </Drawer>
    )
  }

  return (
    <>
      <Layout.Sider width="240">
        <PrimarySider />
      </Layout.Sider>
      <Layout.Sider width="240" theme="light">
        <SecondarySider />
      </Layout.Sider>
    </>
  )
}
