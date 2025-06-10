import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import Portfolio from '../../assets/menuIcon/portfolio.svg?react'
import Mystery from '../../assets/menuIcon/mystery.svg?react'
import Skb from '../../assets/menuIcon/skb.svg?react'
import WWave from '../../assets/menuIcon/w-wave.svg?react'
import Evclid from '../../assets/menuIcon/evclid.svg?react'
import Lagoona from '../../assets/menuIcon/lagoona.svg?react'
import {
  BookOutlined,
  GithubOutlined,
  MailOutlined,
  PushpinOutlined,
  SendOutlined,
  SignatureOutlined,
} from '@ant-design/icons'

const SpanIcon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  fill: #fff;
`
const LinkStyle = css`
  line-height: 1;
`
const LinkRouter = styled(Link)`
  ${LinkStyle}
`
const LinkContact = styled.a`
  ${LinkStyle}
`

const Icon = (children) => <SpanIcon>{children}</SpanIcon>

export const items = [
  {
    key: 'Портфолио',
    icon: Icon(<Portfolio />),
    label: <LinkRouter to="/"> Портфолио </LinkRouter>,
  },
  {
    key: 'Проекты',
    label: 'Проекты',
    icon: <SignatureOutlined />,
    children: [
      {
        key: 'Collection Mystery',
        label: <LinkRouter to="/collection-mystery">Collection Mystery</LinkRouter>,
        icon: Icon(<Mystery />),
      },
      {
        key: 'CRM',
        label: <LinkRouter to="/crm">CRM</LinkRouter>,
        icon: Icon(<Skb />),
      },
      {
        key: 'W-WaveRadio',
        label: <LinkRouter to="/w-wave">W-WaveRadio</LinkRouter>,
        icon: Icon(<WWave />),
      },
      {
        key: 'Evclid',
        label: <LinkRouter to="/evclid">Evclid</LinkRouter>,
        icon: Icon(<Evclid />),
      },
      {
        key: 'Lagoona',
        label: <LinkRouter to="/lagoona">Lagoona</LinkRouter>,
        icon: Icon(<Lagoona />),
      },
    ],
  },
  {
    key: 'Контакты',
    label: 'Контакты',
    icon: <PushpinOutlined />,
    children: [
      {
        key: 'GitHab',
        label: (
          <LinkContact href="https://github.com/ksuhsa-TKS" target="_blank">
            GitHab
          </LinkContact>
        ),
        icon: <GithubOutlined />,
      },
      {
        key: 'Резюме',
        label: (
          <LinkContact href="https://hh.ru/resume/65f55edfff082ca82e0039ed1f54785252626b" target="_blank">
            Резюме
          </LinkContact>
        ),
        icon: <BookOutlined />,
      },
      {
        key: 'Telegram',
        label: (
          <LinkContact href="https://t.me/Ksenia_TKS/" target="_blank">
            @Ksenia_TKS
          </LinkContact>
        ),
        icon: <SendOutlined />,
      },
      {
        key: 'Mail',
        label: (
          <LinkContact href="mailto:ksuhsa293@gmail.com" target="_blank">
            ksuhsa293@gmail.com
          </LinkContact>
        ),
        icon: <MailOutlined />,
      },
    ],
  },
]
