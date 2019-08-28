import React from 'react'
import { Layout, Menu } from 'antd'

type Group = {
  label: string
  groups: Group[]
}

type Organization = {
  label: string
  groups: Group[]
}

type Props = {
  organizations: Organization[]
}

export const PrimarySider = () => (
  <Layout.Sider breakpoint="lg" collapsedWidth="0" width="240">
    <Menu theme="dark" mode="inline">
      <Menu.SubMenu title="株式会社ほげ">
        <Menu.SubMenu title="内定者">
          <Menu.Item>内定者</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu title="新入社員">
          <Menu.SubMenu title="Aグループ">
            <Menu.Item>1班</Menu.Item>
            <Menu.Item>2班</Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.SubMenu title="中堅社員">
          <Menu.SubMenu title="3年目〜5年目">
            <Menu.SubMenu title="Aグループ">
              <Menu.Item>1班</Menu.Item>
              <Menu.Item>2班</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.SubMenu title="東京本社">
          <Menu.SubMenu title="3年目〜5年目">
            <Menu.SubMenu title="Aグループ">
              <Menu.Item>1班</Menu.Item>
              <Menu.Item>2班</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>

        <Menu.SubMenu title="海外支社">
          <Menu.SubMenu title="3年目〜5年目">
            <Menu.SubMenu title="Aグループ">
              <Menu.Item>1班</Menu.Item>
              <Menu.Item>2班</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu>
  </Layout.Sider>
)
