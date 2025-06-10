import styled, { css } from 'styled-components'
import { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import { items } from './MenuPageItems'
import { useWidthDesktop } from '../../hooks/useWidthDesktop'

const MenuPage = () => {
  const { screenWidth } = useWidthDesktop()
  const [collapsed, setCollapsed] = useState(true)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const position = screenWidth > 768

  return (
    <WrapMenu>
      <CastomBtn onClick={toggleCollapsed} type="primary">
        {collapsed ? <MenuOutlined /> : <CloseOutlined />}
      </CastomBtn>

      <CastomMenu
        defaultSelectedKeys={['Портфолио']}
        mode={position ? 'inline' : 'horizontal'}
        inlineCollapsed={collapsed}
        items={items}
      />
    </WrapMenu>
  )
}

export default MenuPage

const WrapMenu = styled.article`
  position: fixed;
  left: 1vw;
  display: flex;
  flex-flow: column;
  align-items: start;
  gap: 8px;
  width: auto;
  z-index: 20;

  @media (min-width: 769px) {
    top: 1vw;
  }
  @media (max-width: 768px) {
    left: 0;
    right: 0;
    bottom: 0;
    height: min-content;
    width: 100%;
  }
`
const CastomBtn = styled(Button)`
  @media (max-width: 768px) {
    display: none;
  }
`
const CastomMenu = styled(Menu)`
  border-radius: 8px;

  @media (max-width: 768px) {
    justify-content: center;
    border-radius: 0;
    width: 100%;
  }
`
