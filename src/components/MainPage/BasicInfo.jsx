import styled from 'styled-components'
import { Descr, Link, ListDecorations, MatteDescr } from '../generic'
import { BookOutlined, GithubOutlined, MailOutlined, SendOutlined } from '@ant-design/icons'

const BasicInfo = () => {
  return (
    <>
      <Title>
        <BigTitle>Привет, это Ксения и я frontend-разработчик :)</BigTitle> Добро пожаловать в мое протфолио!
      </Title>

      <WrapContent>
        <Descr>
          Опыт 1+ год в разработке. Специализируюсь на React.js, использую MobX для state-менеджмента и Vite
          для сборки проектов. Подробнее о стеке ниже.
        </Descr>

        <Descr>
          Уделяю внимание оптимизации производительности, доступности (a11y) и чистой поддерживаемой
          архитектуре кода. В работе придерживаюсь принципов осмысленного проектирования и масштабируемости
          (scalability).
        </Descr>

        <WrapList>
          <Descr>Развиваю свои навыки через пет-проекты, например:</Descr>

          <List>
            <li>«Коллекция тайн» - SPA с React Router и бэкенд-интеграцией</li>
            <li>Это портфолио - стилизация на styled-components + Ant Design</li>
          </List>
        </WrapList>
      </WrapContent>

      <Descr>Готова к сложным задачам, быстрому обучению и работе в команде :)</Descr>

      <WrapBlockLink>
        <WrapList>
          <Descr>Контакты для связи:</Descr>
          <ListLink>
            <li>
              <LinkList href="https://t.me/Ksenia_TKS/" target="_blank">
                <SendOutlined />
                @Ksenia_TKS
              </LinkList>
            </li>
            <li>
              <LinkList href="mailto:ksuhsa293@gmail.com" target="_blank">
                <MailOutlined />
                ksuhsa293@gmail.com
              </LinkList>
            </li>
          </ListLink>
        </WrapList>

        <WrapList>
          <Descr>Дополнительная информация:</Descr>
          <ListLink>
            <li>
              <LinkList href="https://github.com/ksuhsa-TKS" target="_blank">
                <GithubOutlined />
                GitHab
              </LinkList>
            </li>
            <li>
              <LinkList href="assets/main/Трахачева Ксения Резюме.pdf" target="_blank">
                <BookOutlined />
                Резюме
              </LinkList>
            </li>
          </ListLink>
        </WrapList>
      </WrapBlockLink>
    </>
  )
}

export default BasicInfo

const Title = styled.h1`
  font-size: clamp(18px, 3vw, 24px);
  line-height: 1.2;
`
const BigTitle = styled.span`
  display: block;
  font-size: clamp(20px, 3vw, 30px);
`
const WrapContent = styled.div`
  display: flex;
  flex-flow: column;
  gap: clamp(8px, 2vw, 16px);
`
const WrapList = styled(WrapContent)`
  gap: 6px;
`
const WrapBlockLink = styled(WrapContent)`
  flex-flow: row wrap;
  gap: 15px clamp(15px, 8vw, 60px);
`
const List = styled(ListDecorations)`
  gap: 8px;
`
const ListLink = styled(List)`
  padding: 0;

  & li {
    list-style-type: none;
  }
`
const LinkList = styled(Link)`
  display: flex;
  align-items: center;
  gap: clamp(4px, 2vw, 12px);
`
