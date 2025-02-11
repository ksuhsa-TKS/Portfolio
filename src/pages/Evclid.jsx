import './Evclid/css/normalize.css'
import './Evclid/css/style.css'
import './Evclid/css/media.css'

const Evclid = () => {
  return (
    <div className="evclid">
      <header className="evclid-header">
        <div className="evclid-container evclid-header__container">
          <a className="evclid-link evclid-header__logo" href="#">
            <picture>
              <source srcSet="assets/evclid/Logo-head-phone.png" media="(max-width: 992px)" />
              <source srcSet="assets/evclid/Logo-head-tablett.png" media="(max-width: 1360px)" />
              <img className="evclid-header__img" src="assets/evclid/Logo-head.png" alt="Логотип компании" />
            </picture>
          </a>

          <nav className="evclid-header__nav evclid-nav">
            <ul className="evclid-list evclid-nav__list">
              <li className="evclid-nav__bloc">
                <a className="evclid-link evclid-nav__link" href="#">О&nbsp;нас</a>
              </li>
              <li className="evclid-nav__bloc">
                <a className="evclid-link evclid-nav__link" href="#">Этапы</a>
              </li>
              <li className="evclid-nav__bloc">
                <a className="evclid-link evclid-nav__link" href="#">Вопросы</a>
              </li>
              <li className="evclid-nav__bloc">
                <a className="evclid-link evclid-nav__link" href="#">Оставить заявку</a>
              </li>
            </ul>
          </nav>

          <button className="evclid-btn evclid-header__btn" aria-label="Найти">
            <svg className="evclid-header__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="7.56126" height="1.89031"
                transform="matrix(0.713342 0.700816 -0.713342 0.700816 18.6064 17.3762)" />
              <path
                d="M20.9303 10.7726C20.9303 16.1533 16.4855 20.5452 10.9652 20.5452C5.44478 20.5452 1 16.1533 1 10.7726C1 5.39198 5.44478 1 10.9652 1C16.4855 1 20.9303 5.39198 20.9303 10.7726Z"
                strokeWidth="2" />
            </svg>
          </button>
        </div>
      </header>

      <main className="evclid-main">
        <section className="evclid-container evclid-banner">
          <div className="evclid-banner__wrap evclid-banner__img">
            <div className="evclid-banner__bloc">
              <h3 className="evclid-title evclid-banner__title">Проектные решения любой сложности</h3>

              <p className="evclid-chapter evclid-banner__text">Есть над чем задуматься: базовые сценарии поведения пользователей и&nbsp;по&nbsp;сей день остаются уделом проектантов</p>
              <button className="evclid-banner__btn evclid-btn">Заказать расчёт</button>
            </div>
          </div>
        </section>

        <section className="evclid-container evclid-key-info">
          <h1 className="evclid-title evclid-key-info__title">О&nbsp;нас</h1>

          <p className="evclid-descr evclid-key-info__text">Также как перспективное планирование создаёт необходимость включения в&nbsp;производственный план целого ряда внеочередных мероприятий с&nbsp;учётом комплекса экспериментов, поражающих по&nbsp;своей масштабности и&nbsp;грандиозности. А&nbsp;также диаграммы связей могут быть описаны максимально подробно. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что убеждённость некоторых оппонентов требует от&nbsp;нас анализа как&nbsp;самодостаточных, так и&nbsp;внешне зависимых концептуальных решений! Следует отметить, что высококачественный прототип будущего проекта предопределяет высокую востребованность позиций, занимаемых участниками в&nbsp;отношении поставленных задач. Мы&nbsp;вынуждены отталкиваться от&nbsp;того, что высококачественный прототип будущего проекта способствует повышению качества экспериментов.</p>

          <div className="evclid-key-info__bloc">
            <div className="evclid-key-info__wrap evclid-key-info__img">
              <div className="evclid-key-info__part">
                <p className="evclid-descr evclid-key-info__text evclid-key-info__text--white">Принимая во&nbsp;внимание показатели успешности, перспективное планирование способствует подготовке и&nbsp;реализации новых принципов</p>
                <a className="evclid-link evclid-key-info__link" href="#">Подробнее</a>
              </div>
            </div>

            <ul className="evclid-list evclid-key-info__list">
              <li className="evclid-key-info__wrap evclid-key-info__wrap--card">
                <div className="evclid-key-info__card evclid-key-info__icon evclid-key-info__icon--cube">
                  <p className="evclid-descr key-info__text evclid-key-info__text--card">
                    <span className="evclid-key-info__text evclid-key-info__text--decorative">Консультация с&nbsp;широким активом</span>
                    А&nbsp;также свежий взгляд на&nbsp;привычные вещи&nbsp;&mdash; безусловно открывает новые горизонты для как самодостаточных, так и&nbsp;внешне зависимых концептуальных решений
                  </p>
                </div>
              </li>
              <li className="evclid-key-info__wrap evclid-key-info__wrap--card">
                <div className="evclid-key-info__card evclid-key-info__icon evclid-key-info__icon--gear">
                  <p className="evclid-descr evclid-key-info__text evclid-key-info__text--card">
                    <span className="evclid-key-info__text evclid-key-info__text--decorative">В&nbsp;своём стремлении повысить</span>
                    Качество жизни, они забывают, что сплочённость команды профессионалов представляет собой интересный эксперимент проверки прогресса профессионального сообщества
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="evclid-container evclid-stages">
          <h2 className="evclid-title evclid-stages__title">Этапы</h2>

          <div className="evclid-stages__bloc">
            <article className="evclid-stages__wrap">
              <h3 className="evclid-chapter evclid-stages__title evclid-stages__title--min">Проводим консультацию</h3>

              <p className="evclid-descr evclid-stages__text">Влечёт за&nbsp;собой процесс внедрения и&nbsp;модернизации приоритизации разума над&nbsp;эмоциями. В&nbsp;рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. <br /> А&nbsp;также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с&nbsp;зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное&nbsp;производство, нанотехнологии освещают чрезвычайно интересные особенности картины в&nbsp;целом, однако конкретные выводы, разумеется, призваны к&nbsp;ответу.</p>

              <div className="evclid-stages__part">
                <a className="evclid-link evclid-stages__link evclid-stages__link--orange" href="#">Подробнее</a>
                <a className="evclid-link evclid-stages__link evclid-stages__link--empty" href="#" download="#">Договор</a>
              </div>
            </article>

            <picture>
              <source srcSet="assets/evclid/stages-phone-min.jpg" media="(max-width: 520px)" />
              <source srcSet="assets/evclid/stages-phone.jpg" media="(max-width: 992px)" />
              <source srcSet="assets/evclid/stages-laptop.jpg" media="(max-width: 1360px)" />
              <img className="evclid-stages__img" src="assets/evclid/stages.jpg" alt="Превью консультации" />
            </picture>
          </div>
        </section>

        <section className="evclid-container evclid-info">
          <h2 className="evclid-title evclid-info__title">
            Вопросы
          </h2>

          <ul className="evclid-list evclid-info__list">
            <li className="evclid-info__bloc">
              <h3 className="evclid-chapter evclid-info__title evclid-info__title--min">Из&nbsp;чего формируется конечная стоимость проекта?</h3>
              <p className="evclid-descr evclid-info__text">Приятно, граждане, наблюдать, как некоторые особенности внутренней политики могут быть призваны к&nbsp;ответу.</p>
            </li>
            <li className="evclid-info__bloc">
              <h3 className="evclid-chapter evclid-info__title evclid-info__title--min">У&nbsp;меня есть свой проект. Можно&nbsp;ли его реализовать?</h3>
              <p className="evclid-descr evclid-info__text">А&nbsp;ещё некоторые особенности внутренней политики, которые представляют собой яркий пример континентального типа.</p>
            </li>
            <li className="evclid-info__bloc">
              <h3 className="evclid-chapter evclid-info__title evclid-info__title--min">Я&nbsp;выбираю между разными компаниями. Почему&nbsp;вы?</h3>
              <p className="evclid-descr evclid-info__text">Явные признаки победы институционализации набирают популярность среди определённых слоёв населения.</p>
            </li>
          </ul>
        </section>
      </main>

      <footer className="evclid-container evclid-foot">
        <div className="evclid-foot__wrap">
          <div className="evclid-foot__left">
            <a className="evclid-link evclid-foot__logo" href="#">
              <picture>
                <source srcSet="assets/evclid/Logo-foot-phone-min.png" media="(max-width: 520px)" />
                <img className="evclid-foot__img" src="assets/evclid/Logo-foot.png" alt="Логотип компании" />
              </picture>
            </a>

            <nav className="evclid-foot__nav evclid-nav">
              <ul className="evclid-list evclid-nav__list evclid-nav__list--foot">
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">О&nbsp;нас</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Проекты</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Отзывы</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Договор оферты</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Договор подряда</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Конфиденциальность</a>
                </li>
                <li className="evclid-nav__bloc">
                  <a className="evclid-link evclid-nav__link evclid-nav__link--gray" href="#">Партнёрское соглашение</a>
                </li>
              </ul>

              <div className="evclid-foot__part">
                <a className="evclid-link evclid-foot__link" aria-label="Однокласники" href="#">
                  <svg className="evclid-foot__icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.7054 19.9812C25.7054 22.4546 27.7105 24.4598 30.1838 24.4598C32.6572 24.4598 34.6623 22.4546 34.6623 19.9812C34.6623 17.5079 32.6572 15.5028 30.1838 15.5028C27.7105 15.5028 25.7054 17.5079 25.7054 19.9812Z" />
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M30 60C46.5686 60 60 46.5685 60 30C60 13.4315 46.5686 0 30 0C13.4314 0 0 13.4315 0 30C0 46.5685 13.4314 60 30 60ZM19.35 19.9811C19.35 13.9978 24.2004 9.14729 30.1838 9.14729C36.1673 9.14729 41.0176 13.9978 41.0176 19.9811C41.0176 25.9645 36.1673 30.8154 30.1838 30.8154C24.2004 30.8154 19.35 25.9645 19.35 19.9811ZM41.0823 36.3881C40.9448 36.4983 38.3457 38.5522 34.0085 39.4358L40.5554 45.9243C41.7067 47.0738 41.7081 48.9389 40.5586 50.0902C39.4091 51.2414 37.5444 51.2432 36.3927 50.0935L30.0368 43.904L24.2639 50.0536C23.6859 50.6532 22.9149 50.9547 22.1431 50.9547C21.407 50.9547 20.6703 50.6808 20.0986 50.1296C18.9274 49.0003 18.8935 47.1355 20.0228 45.9643L26.2369 39.4701C21.7782 38.6073 19.0718 36.4998 18.9324 36.3881C17.6633 35.3702 17.4594 33.5163 18.4772 32.247C19.4949 30.9778 21.3487 30.7739 22.6182 31.7916C22.645 31.8133 25.4756 33.9398 30.0366 33.9429C34.5977 33.9398 37.3698 31.8133 37.3966 31.7916C38.666 30.7739 40.5198 30.9778 41.5375 32.247C42.5553 33.5163 42.3515 35.3702 41.0823 36.3881Z" />
                  </svg>
                </a>
                <a className="evclid-link evclid-foot__link" aria-label="ВКонтакте" href="#">
                  <svg className="evclid-foot__icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30 0C13.432 0 0 13.4314 0 30C0 46.5686 13.432 60 30 60C46.568 60 60 46.5686 60 30C60 13.4314 46.568 0 30 0ZM45.2176 33.2446C46.6159 34.6103 48.0951 35.8957 49.3504 37.4026C49.9065 38.0692 50.4307 38.7585 50.8297 39.5337C51.3993 40.6392 50.8849 41.8515 49.8954 41.9171L43.7494 41.9159C42.162 42.0473 40.8988 41.4071 39.8339 40.3218C38.9837 39.457 38.195 38.5332 37.3762 37.6389C37.0416 37.2718 36.6893 36.9262 36.2695 36.6543C35.4316 36.1093 34.7036 36.2762 34.2236 37.1515C33.7344 38.0421 33.6227 39.0292 33.5761 40.0205C33.5092 41.4697 33.0721 41.8484 31.618 41.9165C28.5109 42.062 25.5628 41.5906 22.8227 40.0241C20.4055 38.6425 18.5346 36.6924 16.9043 34.4845C13.7297 30.1805 11.2984 25.4566 9.11386 20.597C8.6222 19.5026 8.98189 18.917 10.1893 18.8943C12.1952 18.8557 14.2011 18.8606 16.2071 18.8925C17.0234 18.9054 17.5636 19.3725 17.8772 20.1428C18.9612 22.8098 20.2901 25.3473 21.9554 27.7007C22.3992 28.3274 22.8522 28.9522 23.4973 29.3948C24.2093 29.8834 24.7519 29.7219 25.0877 28.9271C25.3025 28.4219 25.3952 27.8817 25.4418 27.3404C25.6014 25.486 25.6205 23.6323 25.3442 21.7854C25.1724 20.6296 24.5224 19.8832 23.3702 19.6647C22.7834 19.5536 22.8694 19.3363 23.1548 19.0011C23.6501 18.4217 24.1142 18.0632 25.0416 18.0632L31.9857 18.062C33.0801 18.2768 33.3256 18.7679 33.4742 19.8703L33.4803 27.5871C33.4674 28.0137 33.6945 29.2782 34.4606 29.5574C35.0744 29.76 35.4795 29.2677 35.8465 28.8792C37.5118 27.112 38.6983 25.0263 39.7608 22.8675C40.2298 21.9155 40.6343 20.9303 41.0271 19.9433C41.3193 19.2135 41.7735 18.8544 42.5972 18.8667L49.2841 18.8747C49.4811 18.8747 49.6812 18.8765 49.8764 18.9103C51.0034 19.103 51.3121 19.5879 50.9635 20.6873C50.4147 22.4145 49.3485 23.8533 48.3063 25.2958C47.1892 26.8401 45.9977 28.3304 44.8917 29.8815C43.8752 31.2994 43.9556 32.0133 45.2176 33.2446Z" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>

          <div className="evclid-foot__center">
            <h3 className="evclid-title evclid-foot__title">Оставить заявку</h3>

            <form className="evclid-foot__form evclid-form" action="#" method="post">
              <input className="evclid-descr evclid-form__input evclid-form__input--window" type="text" name="Name" placeholder="Фамилия, имя и&nbsp;отчество*" required />
              <input className="evclid-descr evclid-form__input evclid-form__input--window" type="email" name="Email" placeholder="Email*" required />
              <textarea className="evclid-descr evclid-form__textarea evclid-form__textarea--window" rows="4" name="Message" placeholder="Сообщение"></textarea>

              <div className="evclid-form__bloc">
                <button className="evclid-form__btn evclid-btn">Отправить данные</button>

                <label className="evclid-form__label">
                  <input className="evclid-form__checkbox" type="checkbox" name="approval" />
                  <span className="evclid-descr evclid-form__span">Согласен на&nbsp;обработку данных</span>
                </label>
              </div>
            </form>
          </div>

          <div className="evclid-foot__right">
            <p className="evclid-descr evclid-foot__text">Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: разбавленное изрядной долей эмпатии, рациональное мышление позволяет оценить значение модели развития. Таким образом, консультация с&nbsp;широким активом обеспечивает широкому кругу (специалистов) участие в&nbsp;формировании стандартных подходов.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Evclid
