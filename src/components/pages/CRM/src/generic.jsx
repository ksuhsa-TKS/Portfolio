import styled, { css } from 'styled-components'

// .crm-container
export const Container = css`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  padding: 0 18px;
  max-width: 1024px;
`
// .crm-link
export const Link = styled.a`
  line-height: 100%;
  text-decoration: none;
  color: currentColor;

  &:focus-visible {
    outline: none;
  }
`
// .crm-img
export const Img = styled.img`
  max-width: max-content;
  object-fit: cover;
`
// .crm-input
export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid var(--black-transparent);
  outline: none;
  background-color: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 135%;
  color: var(--black);

  &::placeholder {
    color: var(--txt-grey);
  }

  @media (max-width: 766px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 8px 10px;
  }
`
// .crm-title
export const Title = css`
  align-self: flex-start;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 138%;
`
export const TitleTable = css`
  align-self: flex-end;
  font-size: 12px;
  font-weight: 400;
  line-height: 133%;
  text-align: start;
  color: var(--txt-grey);

  ${({ $isElement }) => {
    switch ($isElement) {
      case 'id':
        return css`
          position: relative;
          padding: 0 6px 0 10px;
          min-width: 60px;
          font-size: 12px;
        `
      case 'name':
        return css`
          padding: var(--padding-table);
          width: clamp(217px, 26vw, 233px);
        `
      case 'data':
        return css`
          padding: var(--padding-table);
          width: clamp(99px, 15vw, 158px);
        `
      case 'link':
        return css`
          padding: 0 9px;
          width: clamp(127px, 10vw, 136px);
          cursor: auto;
        `
      case 'btn':
        return css`
          padding: var(--padding-table);
          width: clamp(110px, 20vw, 229px);
          cursor: auto;
        `
    }
  }}
`
// .crm-btn
export const Btn = styled.button`
  display: flex;
  flex-flow: row-reverse;
  padding: 0;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 135%;
  background: none;
  cursor: pointer;
  color: currentColor;

  &:focus {
    outline: none;
  }
  &:focus-visible {
    color: var(--firm-lighter);
  }
  &:hover {
    color: var(--firm);
  }
  &:active {
    color: var(--firm-darker);
  }
`

// animation loader

export const AnimationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;
  background-color: var(--white);
`
export const AnimationFormWrap = styled(AnimationWrap)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: var(--grey-lilac-transparent);
`
export const AnimationElement = styled.span`
  display: block;
  width: 40px;
  height: 40px;
  background-image: url('assets/crm/loading.svg');
  background-repeat: no-repeat;
  background-position: center;
  animation: crm-loading 1s linear infinite;
`
