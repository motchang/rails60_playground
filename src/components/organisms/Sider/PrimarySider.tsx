import React from 'react'
import { Menu } from 'antd'

type Group = {
  label: string
  groups: Group[]
}

type Organization = {
  label: string
  groups: Group[]
}

type Props = {
  className?: string
  isMobile?: boolean
  organizations?: Organization[]
  style?: React.CSSProperties
}

export const PrimarySider: React.FC<Props> = ({
  className,
  isMobile,
  style,
}) => {
  const menu = [
    <Menu.SubMenu title="内定者" key="内定者">
      <Menu.Item>内定者</Menu.Item>
    </Menu.SubMenu>,

    <Menu.SubMenu title="新入社員" key="新入社員">
      <Menu.SubMenu title="Aグループ">
        <Menu.Item>1班</Menu.Item>
        <Menu.Item>2班</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>,

    <Menu.SubMenu title="中堅社員" key="中堅社員">
      <Menu.SubMenu title="3年目〜5年目">
        <Menu.SubMenu title="Aグループ">
          <Menu.Item>1班</Menu.Item>
          <Menu.Item>2班</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu.SubMenu>,

    <Menu.SubMenu title="東京本社" key="東京本社">
      <Menu.SubMenu title="3年目〜5年目">
        <Menu.SubMenu title="Aグループ">
          <Menu.Item>1班</Menu.Item>
          <Menu.Item>2班</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu.SubMenu>,

    <Menu.SubMenu title="海外支社" key="海外支社">
      <Menu.SubMenu title="3年目〜5年目">
        <Menu.SubMenu title="Aグループ">
          <Menu.Item>1班</Menu.Item>
          <Menu.Item>2班</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
    </Menu.SubMenu>,
  ]

  return (
    <Menu mode="inline" className={className} style={style}>
      {isMobile ? (
        menu
      ) : (
        <Menu.SubMenu title="株式会社ほげ">{menu}</Menu.SubMenu>
      )}
    </Menu>
  )
}
