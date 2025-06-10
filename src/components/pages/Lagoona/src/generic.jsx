import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 24px;
`
// lagoona-link
export const Link = styled.a`
  border-radius: 3px;
  line-height: 100%;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`
// lagoona-btn
export const Btn = styled.button`
  padding: 13px 20px;
  border: none;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: var(--border-color);
    background-color: var(--border-color);
    color: var(--white-color);
  }
  &:hover {
    outline: var(--border-color);
    background-color: var(--border-color);
    color: var(--white-color);
  }
  &:active {
    outline: var(--dark-outline);
    background-color: var(--dark-outline);
    color: var(--white-color);
  }
`
// lagoona-section-title
export const Title = styled.h2`
  margin: 0 auto 20px 40px;
  font-weight: 400;
  font-size: 40px;
`
export const Descr = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 2;
`
