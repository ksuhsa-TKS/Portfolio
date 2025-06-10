import styled, { css } from 'styled-components'
import { Btn, Container, Descr, List, Span, Title } from '../src/generic'

export const AboutUs = () => {
  return (
    <SectionAboutUs id="about-us">
      <ContainerAboutUs>
        <WrapAboutUs>
          <TitleAboutUs>О&nbsp;нас</TitleAboutUs>
          <SpanAboutUs>Приём-приём! Как слышно? Мы&nbsp;уже в&nbsp;эфире? Отлично, поехали!</SpanAboutUs>
          <DescrAboutUs>
            Друзья, мы&nbsp;будем очень рады, если вы&nbsp;поможете стать нам лучше. Нам важен каждый
            слушатель, поэтому вы&nbsp;можете поделиться обратной связью о&nbsp;наших предеачах, темах,
            подборках и&nbsp;вообще обо всём! Это можно сделать либо написав нам в&nbsp;форме ниже, либо
            кликнув на&nbsp;наши соцсети в&nbsp;подвале сайта. Спасибо! Услышимся!:)
          </DescrAboutUs>
        </WrapAboutUs>

        <ListAboutUs>
          <ItemAboutUs>
            <picture>
              <source srcSet="assets/w-wave/leader-1-mobile-min.webp" media="(max-width: 425px)" />
              <source srcSet="assets/w-wave/leader-1.webp" media="(max-width: 1023px)" />
              <source srcSet="assets/w-wave/leader-1-tablet.webp" media="(max-width: 1200px)" />
              <img src="assets/w-wave/leader-1.webp" alt="Фото Дмитрия Гутенберга" aria-hidden="true" />
            </picture>
            <ItemWrapAboutUs>
              <ItemNameAboutUs>Дмитрий Гутенберг</ItemNameAboutUs>
              <ItemDescrAboutUs>Эксперт (ну, почти) по&nbsp;всем вопросам (почти)</ItemDescrAboutUs>
            </ItemWrapAboutUs>
          </ItemAboutUs>

          <ItemAboutUs>
            <picture>
              <source srcSet="assets/w-wave/leader-2-mobile-min.webp" media="(max-width: 425px)" />
              <source srcSet="assets/w-wave/leader-2.webp" media="(max-width: 1023px)" />
              <source srcSet="assets/w-wave/leader-2-tablet.webp" media="(max-width: 1200px)" />
              <img src="assets/w-wave/leader-2.webp" alt="Фото Анны Васильевой" aria-hidden="true" />
            </picture>
            <ItemWrapAboutUs>
              <ItemNameAboutUs>Анна Васильева</ItemNameAboutUs>
              <ItemDescrAboutUs>
                Как я&nbsp;здесь оказалась? А&nbsp;главное&nbsp;&mdash; зачем?
              </ItemDescrAboutUs>
            </ItemWrapAboutUs>
          </ItemAboutUs>

          <ItemAboutUs>
            <picture>
              <source srcSet="assets/w-wave/leader-3-mobile-min.webp" media="(max-width: 425px)" />
              <source srcSet="assets/w-wave/leader-3-tablet-min.webp" media="(max-width: 1023px)" />
              <source srcSet="assets/w-wave/leader-3-tablet.webp" media="(max-width: 1200px)" />
              <img src="assets/w-wave/leader-3.webp" alt="Фото Пётра Дмитриевского" aria-hidden="true" />
            </picture>
            <ItemWrapAboutUs>
              <ItemNameAboutUs>Пётр Дмитриевский</ItemNameAboutUs>
              <ItemDescrAboutUs>Господа! Внимание! Благодарю за&nbsp;внимание!</ItemDescrAboutUs>
            </ItemWrapAboutUs>
          </ItemAboutUs>

          <ItemAboutUs>
            <picture>
              <source srcSet="assets/w-wave/leader-4-mobile-min.webp" media="(max-width: 425px)" />
              <source srcSet="assets/w-wave/leader-4-tablet-min.webp" media="(max-width: 1023px)" />
              <source srcSet="assets/w-wave/leader-4-tablet.webp" media="(max-width: 1200px)" />
              <img src="assets/w-wave/leader-4.webp" alt="Фото Татьяны Флегановой" aria-hidden="true" />
            </picture>
            <ItemWrapAboutUs>
              <ItemNameAboutUs>Татьяна Флеганова</ItemNameAboutUs>
              <ItemDescrAboutUs>Одна я&nbsp;в&nbsp;пальто стою красивая, а&nbsp;вокруг...</ItemDescrAboutUs>
            </ItemWrapAboutUs>
          </ItemAboutUs>
        </ListAboutUs>

        <FormWrapAboutUs>
          <FormAboutUs action="#" method="post" aria-label="Форма для обратной связи">
            <TextareaAboutUs name="Сообщение" placeholder="Что скажете?" rows="5" required></TextareaAboutUs>
            <LableAboutUs>
              <InputAboutUs type="text" name="Name" placeholder="Имя" pattern="^[А-Яа-яЁё\s]+$" required />
              <ErrorAboutUs aria-hidden="true">Ошибка</ErrorAboutUs>
            </LableAboutUs>
            <LableAboutUs>
              <InputAboutUs type="email" name="Email" placeholder="Email" required />
              <ErrorAboutUs aria-hidden="true">Ошибка</ErrorAboutUs>
            </LableAboutUs>
          </FormAboutUs>

          <div>
            <BtnAboutUs aria-label="Отправить форму">Отправить</BtnAboutUs>
            <LableCheckboxAboutUs>
              <CheckboxAboutUs
                type="checkbox"
                name="consent"
                required
                aria-label="Согласен на обработку персональных данных"
              />
              <ConsentAboutUs className="check">
                Согласен на&nbsp;обработку персональных данных
              </ConsentAboutUs>
            </LableCheckboxAboutUs>
          </div>
        </FormWrapAboutUs>
      </ContainerAboutUs>
    </SectionAboutUs>
  )
}

const SectionAboutUs = styled.section`
  background-color: var(--color-mirage);
`
const ContainerAboutUs = styled(Container)`
  padding-bottom: 90px;

  @media (max-width: 1023px) {
    padding: 0;
  }
  @media (max-width: 766px) {
    padding: 54px 32px;
  }
`
const WrapAboutUs = styled.div`
  padding-right: 476px;
  padding-bottom: 29px;
  background: url('assets/w-wave/spiral.svg') no-repeat right top;

  @media (max-width: 1200px) {
    padding-right: 285px;
    padding-bottom: var(--indent);
    background: url('assets/w-wave/dawn.svg') no-repeat right 39%;
  }
  @media (max-width: 1023px) {
    padding: 94px 114px;
    padding-bottom: 171px;
    background: url('assets/w-wave/vector-spiral.svg') no-repeat left 94%;
  }
  @media (max-width: 766px) {
    padding: 0;
    margin-bottom: var(--indent);
    background: none;
  }
  @media (max-width: 425px) {
    margin-bottom: 28px;
  }
`
const TitleAboutUs = styled(Title)`
  margin-bottom: 12px;
  color: var(--color-white);
`
const SpanAboutUs = styled(Span)`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 766px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    margin-bottom: 3px;
  }
`
const DescrAboutUs = styled(Descr)`
  line-height: 160%;
  color: var(--color-gray-chateau);
`
const ListAboutUs = styled(List)`
  gap: 29px var(--indent);
  margin-bottom: var(--indent);

  @media (max-width: 1023px) {
    padding: 0 114px;
  }
  @media (max-width: 766px) {
    padding: 0;
  }
`
const ItemAboutUs = styled.li`
  max-width: 255px;

  @media (max-width: 1200px) {
    max-width: 397px;
  }
  @media (max-width: 1023px) {
    max-width: 255px;
  }
  @media (max-width: 425px) {
    max-width: 113px;
  }
`
const ItemWrapAboutUs = styled.div`
  padding-top: 25px;

  @media (max-width: 425px) {
    padding-top: 7px;
  }
`
const ItemNameAboutUs = styled(Descr)`
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--color-white);

  @media (max-width: px) {
    margin-bottom: 4px;
    line-height: 128%;
  }
`
const ItemDescrAboutUs = styled(DescrAboutUs)`
  font-size: 16px;
  line-height: 150%;

  @media (max-width: 766px) {
    font-size: 12px;
    line-height: 135%;
  }
`
const FormWrapAboutUs = styled.div`
  max-width: 920px;

  @media (max-width: 1023px) {
    padding: 0 114px 90px;
  }
  @media (max-width: 766px) {
    padding: 0;
  }
`
const FormAboutUs = styled.form`
  display: flex;
  flex-flow: row wrap;
  gap: 32px;
  padding-bottom: var(--indent);

  @media (max-width: 425px) {
    gap: 32px;
  }
`
const LableAboutUs = styled.label`
  position: relative;
  display: inline-block;

  @media (max-width: 1023px) {
    width: 100%;
  }
`
const FormFieldAboutUs = css`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  outline: 1px solid var(--color-white);
  font-size: 20px;
  font-weight: 400;
  color: var(--color-white);
  background-color: var(--color-mirage);
  transition: all 0.2s ease-in-out;

  &:focus-visible,
  &:focus-visible:invalid:placeholder-shown {
    outline: 1px solid var(--color-melrose);
    background-color: var(--color-charade);
  }
  &:hover,
  &:hover:invalid:placeholder-shown {
    outline: 1px solid var(--color-white);
    background-color: var(--color-charade);
  }
  &:active,
  &:active:invalid:placeholder-shown {
    outline: 1px solid var(--color-white);
    background-color: var(--color-charade);
  }

  @media (max-width: 766px) {
    padding: 15px 23px;
    border-radius: 20px;
    font-size: 16px;
  }
`
const TextareaAboutUs = styled.textarea`
  ${FormFieldAboutUs}

  padding: 30px 32px;
  border-radius: 30px;
  width: 100%;
  height: 150px;
  resize: none;

  @media (max-width: 766px) {
    height: 148px;
  }
`
const InputAboutUs = styled.input`
  ${FormFieldAboutUs}

  padding: 22px 32px;
  border-radius: var(--border);
  min-width: 444px;

  &:invalid {
    outline: 1px solid var(--color-thunderbrid);
  }
  &:invalid + span {
    opacity: 1;
  }
  &:invalid:placeholder-shown {
    outline: 1px solid var(--color-white);
  }
  &:invalid:placeholder-shown + span {
    opacity: 0;
  }

  @media (max-width: 1200px) {
    min-width: 396px;
  }
  @media (max-width: 1023px) {
    min-width: 100%;
  }
`
const ErrorAboutUs = styled(Span)`
  position: absolute;
  top: 8px;
  left: 32px;
  font-size: 12px;
  line-height: 100%;
  color: var(--color-thunderbrid);
  opacity: 0;
  transition: all 0.2s ease-in-out;

  @media (max-width: 766px) {
    top: 4px;
    left: 22px;
    font-size: 9px;
  }
`
const BtnAboutUs = styled(Btn)`
  margin-bottom: var(--indent);
  padding: 25px 54px;
  border-radius: var(--border);
  font-size: 20px;
  font-weight: 500;
  line-height: 100%;
  color: var(--color-white);
  background-color: var(--color-electric-violet);
  transition: all 0.2s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--color-daisy-bush);
    background-color: var(--color-melrose);
  }
  &:hover {
    background-color: var(--color-melrose);
  }
  &:active {
    background-color: var(--color-daisy-bush);
  }

  @media (max-width: 766px) {
    margin-bottom: 16px;
    padding: 17px 45px;
    font-size: 16px;
  }
`
const LableCheckboxAboutUs = styled.label`
  position: relative;
  display: inline-block;
  user-select: none;
  cursor: pointer;
`
const CheckboxAboutUs = styled.input`
  position: absolute;
  outline: none;
  width: 100%;
  appearance: none;
  transition: all 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 100%;
    height: 1px;
    background-color: var(--color-daisy-bush);
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }
  &:focus-visible::before {
    transform: scaleX(1);
  }
  &:checked + .check::after {
    opacity: 1;
  }
`
const ConsentAboutUs = styled(Span)`
  padding-left: 22px;
  font-size: 12px;
  font-weight: 500;
  line-height: 165%;
  color: var(--color-white);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 13px;
    height: 13px;
    border: 1px solid var(--color-white);
    opacity: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    background: url('assets/w-wave/check.svg') no-repeat center / cover;
    opacity: 0;
  }

  @media (max-width: 766px) {
    font-size: 9px;
  }
  @media (max-width: 425px) {
    &::before {
      width: 12px;
      height: 12px;
    }
  }
`
