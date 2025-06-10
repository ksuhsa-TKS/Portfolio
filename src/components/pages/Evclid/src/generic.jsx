import styled, { css } from 'styled-components'

// evclid-container
export const Container = styled.section`
  margin: 0 auto 50px;
  padding: 0 75px;
  max-width: 1920px;

  @media (max-width: 1360px) {
    padding: 0 50px;
  }
  @media (max-width: 992px) {
    margin-bottom: 80px;
  }
  @media (max-width: 760px) {
    margin-bottom: 60px;
    padding: 0 15px;
  }
`
// evclid-title
export const Title = css`
  margin-bottom: var(--gap);
  font-size: 48px;
  font-weight: 400;

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
  @media (max-width: 520px) {
    font-size: 24px;
    font-weight: 400;
  }
`
// evclid-chapter
export const Chapter = styled.p`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 520px) {
    font-size: 18px;
    font-weight: 500;
  }
`
// evclid-descr
export const Descr = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 520px) {
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.25px;
  }
`
// evclid-list
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
// evclid-link
export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  color: inherit;
`
// evclid-btn
export const Btn = styled.button`
  display: inline-block;
  padding: 0;
  border: none;
  border-radius: var(--radius-min);
  font-size: 16px;
  background: none;
  background-color: var(--color-yellow);
  cursor: pointer;
  user-select: none;
  transition: all 0.3s ease-in-out;

  &:focus-visible {
    outline: none;
    background-color: var(--color-light-yellow);
  }
  &:hover {
    background-color: var(--color-light-yellow);
  }
  &:active {
    background-color: var(--color-orange);
  }

  @media (max-width: 520px) {
    border-radius: 8px;
    font-size: 12px;
  }
`

// @media (max-width: px) {
