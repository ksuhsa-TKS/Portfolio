import { BookOutlined, GithubOutlined, MailOutlined, SendOutlined } from '@ant-design/icons'
import { Title, Descr, Link } from '../generic'
import styled from 'styled-components'

const SupportInfo = () => {
  return (
    <>
      <Title>И еще пару слов</Title>

      <WrapDescr>
        <Descr>
          Спасибо, что посетили моё портфолио! Если у вас есть вопросы или предложения — буду рада обсудить.
        </Descr>

        <Descr>Несмотря на небольшой опыт, я подхожу к работе с полной отдачей и энтузиазмом.</Descr>
      </WrapDescr>

      <WrapLink>
        <LinkContacts href="https://t.me/Ksenia_TKS/" target="_blank">
          <SendOutlined />
          @Ksenia_TKS
        </LinkContacts>
        <LinkContacts href="mailto:ksuhsa293@gmail.com" target="_blank">
          <MailOutlined />
          ksuhsa293@gmail.com
        </LinkContacts>
        <LinkContacts href="https://github.com/ksuhsa-TKS" target="_blank">
          <GithubOutlined />
          GitHab
        </LinkContacts>
        <LinkContacts href="assets/main/Трахачева Ксения Резюме.pdf" target="_blank">
          <BookOutlined />
          Резюме
        </LinkContacts>
      </WrapLink>
    </>
  )
}

export default SupportInfo

const WrapDescr = styled.div`
  display: flex;
  gap: clamp(12px, 2vw, 22px);
`
const WrapLink = styled.div`
  display: flex;
  align-self: center;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 10px 36px;
  width: 80%;
`
const LinkContacts = styled(Link)`
  display: flex;
  align-items: center;
  gap: clamp(4px, 2vw, 12px);
`
