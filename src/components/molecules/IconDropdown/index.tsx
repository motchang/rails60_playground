import * as React from 'react'
import { Dropdown, Icon, Menu } from 'antd'

export type Props = {
  menuClickAction: (key: string) => void
  type: 'chapter' | 'content'
}

const createMenu = ({ type, menuClickAction }: Props) => {
  if (type === 'chapter') {
    return (
      <Menu onClick={({ key }) => menuClickAction(key)}>
        <Menu.Item key="0">テキスト</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">レッスン</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">課題</Menu.Item>
      </Menu>
    )
  }
  if (type === 'content') {
    return (
      <Menu onClick={({ key }) => menuClickAction(key)}>
        <Menu.Item key="0">扉ページ</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">作文</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">多肢選択問題</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">プルダウン式選択問題</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">複数回答問題</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="5">穴埋め問題</Menu.Item>
      </Menu>
    )
  }
  return null
}

const IconDropdown: React.FC<Props> = ({ menuClickAction, type }) => {
  const menu = createMenu({ type, menuClickAction })
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <Icon type="plus-circle" style={{ fontSize: 24 }} />
    </Dropdown>
  )
}

export default IconDropdown
