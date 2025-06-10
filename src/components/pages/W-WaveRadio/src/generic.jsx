import styled from 'styled-components'

// w-wave-container
export const Container = styled.div`
  margin: 0 auto;
  padding: 94px 30px;
  max-width: 1170px;

  @media (max-width: 1200px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1024px;
  }
  @media (max-width: 1023px) {
    padding-left: 114px;
    padding-right: 114px;
    max-width: 992px;
  }
  @media (max-width: 766px) {
    padding: 54px 32px;
  }
`

export const Link = styled.a`
  position: relative;
  display: inline-flex;
  align-items: start;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: inherit;
  z-index: 1;
  transition: all 0.2s ease-in-out;
`

export const LinkBtn = styled(Link)`
  display: inline-block;
  padding: 17px 43px;
  border: 2px solid currentColor;
  border-radius: var(--border-big);
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 20px;
  }
  @media (max-width: 766px) {
    font-size: 16px;
  }
`

export const Btn = styled.button`
  display: flex;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`
// .w-wave-nav
export const Nav = styled.nav`
  display: flex;
  margin-right: auto;

  @media (max-width: 1200px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    margin-right: 0;
    border-top: 1px solid var(--color-athens-gray);
    border-bottom: 1px solid var(--color-athens-gray);
    width: 100%;
  }
  @media (max-width: 1023px) {
    padding-left: 114px;
    padding-right: 114px;
  }
  @media (max-width: 766px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`
// w-wave-list-reset
export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`
// w-wave-title
export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 48px;
  font-weight: 400;
  line-height: 100%;
  color: var(--color--mirage);

  @media (max-width: 766px) {
    margin-bottom: 12px;
    font-size: 24px;
  }
`
// w-wave-descr
export const Descr = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  color: var(--color--gray-chateau);

  @media (max-width: 766px) {
    font-size: 14px;
  }
`
// w-wave-span
export const Span = styled.span`
  box-sizing: border-box;
  display: block;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-gray-chateau);

  @media (max-width: 766px) {
    font-size: 14px;
  }
`

// @media (max-width: px) {
// background: url('assets/w-wave/vector-spiral.svg') no-repeat left 94%;
