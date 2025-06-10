import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 22px);
  width: 100%;
  flex-shrink: 0;
`

export const ListDecorations = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 6px;
  padding-left: 25px;

  & li {
    list-style-type: '❖ ';
  }
`

export const Title = styled.h2`
  font-size: clamp(18px, 3vw, 24px);
  line-height: 1.2;
`

export const Descr = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.2;
  white-space: pre-wrap;
`

export const MatteDescr = styled.span`
  display: block;
  opacity: 0.8;
`

export const Link = styled.a`
  color: #ffd666;
  text-decoration: inherit;
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.2;
  transition: all 0.2s ease-in-out;

  &:focus-visible,
  &:hover {
    outline: none;
    color: #ff7a45;
  }
  &:active {
    color: #fa541c;
  }
`

// ${({ $isAddition }) =>
//     $isAddition &&
//     css`
//       display: block;
//       opacity: 0.8;
//     `}

// background: no-repeat ${(props) => `url(${props.$backImg})`} center / cover;
