import React from 'react'
import { Layout, Menu, Divider, Icon, Avatar } from 'antd'

type Props = {
  title: string
  courses: string[]
  members: string[]
}

export const SecondarySider = () => (
  <Layout.Sider style={{ backgroundColor: '#fff' }} width="240" collapsible>
    <Menu mode="inline">
      <Menu.Item>
        <Icon type="menu" />
        <span>中堅社員</span>
      </Menu.Item>

      <Divider />

      <Menu.Item>
        <Icon type="dashboard" />
        <span>ダッシュボード</span>
      </Menu.Item>

      <Divider />

      <Menu.SubMenu
        title={
          <>
            <Icon type="file" />
            <span>コース</span>
          </>
        }
      >
        <Menu.Item>ビジネスマナー</Menu.Item>
        <Menu.Item>2019年度研修アンケート</Menu.Item>
        <Menu.Item>Excel スキル</Menu.Item>
        <Menu.Item>コンプライアンス</Menu.Item>
      </Menu.SubMenu>

      <Divider />

      <Menu.SubMenu
        title={
          <>
            <Icon type="user" />
            <span>メンバー</span>
          </>
        }
      >
        <Menu.Item>東 克樹</Menu.Item>
        <Menu.Item>阪口 皓亮</Menu.Item>
        <Menu.Item>石田 健大</Menu.Item>
        <Menu.Item>井納 翔一</Menu.Item>
        <Menu.Item>大貫 晋一</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </Layout.Sider>
)
