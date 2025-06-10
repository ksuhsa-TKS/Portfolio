import styled from 'styled-components'
import { Container, Img, Input, Link } from '../src/generic'
import Storage from '../storage/Storage'
import Window from '../storage/Window'

const Header = () => {
  const searchInput = (value) => {
    Window.editLoading('table', true)
    setTimeout(() => {
      Storage.searchClients(value.trim())
      Window.editLoading('table', false)
    }, 300)
  }

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Link href="#">
          <Logo src="assets/crm/logotip.png" alt="Логотип компании skb" />
        </Link>

        <Form action="#" method="get">
          <InputHeader
            id="header-input"
            type="search"
            placeholder="Введите запрос"
            onChange={(el) => {
              searchInput(el.target.value)
            }}
          />
        </Form>
      </HeaderContainer>
    </HeaderWrap>
  )
}

export default Header

const HeaderWrap = styled.header`
  background-color: var(--white);
  box-shadow: 0px 3.39px 5.64px 0px rgba(176, 190, 197, 0.32),
    0px 9.03px 27.09px 0px rgba(176, 190, 197, 0.32);
`
const HeaderContainer = styled.div`
  ${Container}
  flex-flow: row;
  gap: 53px;
  padding: 20px 20px 18px;
  margin-bottom: 40px;

  @media (max-width: 577px) {
    justify-content: center;
    margin-bottom: 19px;
    padding: 7px 10px;
  }
`
const Logo = styled(Img)`
  height: clamp(24px, 7vw, 50px);
  width: clamp(24px, 7vw, 50px);
`
const Form = styled.form`
  position: relative;
  width: 100%;
`
const InputHeader = styled(Input)`
  width: clamp(300px, 66vw, 580px);
  font-weight: 400;
`
