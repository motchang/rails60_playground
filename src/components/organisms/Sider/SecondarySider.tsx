import React from 'react'
import { Menu } from 'antd'

type Props = {
  className?: string
  courses?: string[]
  isMobile?: boolean
  members?: string[]
  style?: React.CSSProperties
  title?: string
}

export const SecondarySider: React.FC<Props> = ({
  className,
  isMobile,
  style,
}) => (
  <Menu className={className} mode="inline" style={style}>
    {!isMobile && <Menu.Item title="中堅社員">中堅社員</Menu.Item>}
    <Menu.Item>ダッシュボード</Menu.Item>
    <Menu.SubMenu title="コース">
      <Menu.Item>ビジネスマナー</Menu.Item>
      <Menu.Item>2019年度研修アンケート</Menu.Item>
      <Menu.Item>Excel スキル</Menu.Item>
      <Menu.Item>コンプライアンス</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="メンバー">
      <Menu.Item>東 克樹</Menu.Item>
      <Menu.Item>阪口 皓亮</Menu.Item>
      <Menu.Item>石田 健大</Menu.Item>
      <Menu.Item>井納 翔一</Menu.Item>
      <Menu.Item>大貫 晋一</Menu.Item>
    </Menu.SubMenu>
  </Menu>
)
