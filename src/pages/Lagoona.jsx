import './Lagoona/css/normalize.css'
import './Lagoona/css/style.css'

const Lagoona = () => {
  return (
    <div className="lagoona">
      <header className="lagoona-header lagoona-container-block">
        <div className="lagoona-container lagoona-flex lagoona-header__container">
          <a className="lagoona-link lagoona-header__logo" href="#">
            <img className="lagoona-header__logo" src="assets/lagoona/logo-Lagoona.svg" alt="логотип Lagoona" />
          </a>
          <a className="lagoona-link lagoona-header__contacts" href="tel:+74953225448">+7&nbsp;495 322-54-48</a>
          <a className="lagoona-link lagoona-header__link" href="#">
            <svg className="lagoona-header__svg" width="21" height="12" viewBox="0 0 21 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.59 1.41L14.17 5H0V7H14.17L10.58 10.59L12 12L18 6L12 0L10.59 1.41ZM19 0V12H21V0H19Z" />
            </svg>
            Личный кабинет
          </a>
        </div>

        <div className="lagoona-container lagoona-flex lagoona-header__container lagoona-header__container--color">
          <nav className="lagoona-header__nav lagoona-nav">
            <ul className="lagoona-list lagoona-nav__list lagoona-flex">
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#info">О&nbsp;нас</a>
              </li>
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#service">Услуги</a>
              </li>
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#benefit">Преимущества</a>
              </li>
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#space">Размещение</a>
              </li>
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#">Блог</a>
              </li>
              <li className="lagoona-nav__item">
                <a className="lagoona-link lagoona-header__link--nav" href="#contacts">Контакты</a>
              </li>
            </ul>
          </nav>

          <button className="lagoona-btn lagoona-header__btn">Хочу тур</button>
          <button className="lagoona-btn lagoona-header__btn">Обратный звонок</button>
        </div>
      </header>

      <main className="lagoona-main">
        <section className="lagoona-offer lagoona-container-block">
          <div className="lagoona-container">
            <h2 className="lagoona-section-title">Спецпредложения</h2>

            <ul className="lagoona-list lagoona-offer__list lagoona-flex">
              <li className="lagoona-offer__bloc">
                <div className="lagoona-offer__wrap">
                  <div className="lagoona-offer__card lagoona-flex lagoona-flex-rider lagoona-offer__img1">
                    <h3 className="lagoona-offer__title">Мальдивские острова</h3>
                    <p className="lagoona-offer__price">от&nbsp;55&nbsp;000&nbsp;₽</p>
                    <a className="lagoona-link lagoona-offer__link" href="#">
                      Подробнее
                      <svg className="lagoona-offer__arow" width="11" height="18" viewBox="0 0 11 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="lagoona-offer__wrap">
                  <div className="lagoona-offer__card lagoona-flex lagoona-flex-rider lagoona-offer__img2">
                    <h3 className="lagoona-offer__title">Горящий тур на&nbsp;остров Крит</h3>
                    <p className="lagoona-offer__price">от&nbsp;30&nbsp;000&nbsp;₽</p>
                    <a className="lagoona-link lagoona-offer__link" href="#">
                      Подробнее
                      <svg className="lagoona-offer__arow" width="11" height="18" viewBox="0 0 11 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
              <li className="lagoona-offer__bloc">
                <div className="lagoona-offer__wrap lagoona-offer__wrap--big">
                  <div className="lagoona-offer__card lagoona-offer__card--big lagoona-flex lagoona-flex-rider lagoona-offer__img3">
                    <h3 className="lagoona-offer__title lagoona-offer__title--big">Номера категории люкс</h3>
                    <p className="lagoona-offer__price lagoona-offer__price--big">от&nbsp;5&nbsp;000&nbsp;₽</p>
                    <a className="lagoona-link lagoona-offer__link" href="#">
                      Подробнее
                      <svg className="lagoona-offer__arow" width="11" height="18" viewBox="0 0 11 18"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <article id="info" className="lagoona-info clagoona-ontainer-block">
          <div className="lagoona-container">
            <h1 className="lagoona-section-title">О&nbsp;нас</h1>

            <p className="lagoona-info-descr">
              Идейные соображения высшего порядка, а&nbsp;также сложившаяся структура организации влечёт за&nbsp;собой процесс внедрения и&nbsp;модернизации системы обучения кадров, соответствует насущным потребностям. Идейные  интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации требуют определения и&nbsp;уточнения существенных финансовых и&nbsp;административных условий.
            </p>
          </div>
        </article>

        <section id="service" className="lagoona-service lagoona-container-block">
          <div className="lagoona-container">
            <h2 className="lagoona-section-title">Услуги</h2>

            <ul className="lagoona-list lagoona-service-list lagoona-flex">
              <li className="lagoona-service-wrap">
                <div className="lagoona-service-bloc lagoona-flex lagoona-service-img-1">
                  <a className="lagoona-link lagoona-service-link-list" href="#">
                    Эксклюзивное обслуживание
                    <svg className="lagoona-service-arow" width="11" height="18" viewBox="0 0 11 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                    </svg>
                  </a>
                  <p className="lagoona-service-descr-list">Равным образом постоянный количественный рост и&nbsp;сфера нашей активности</p>
                </div>
              </li>
              <li className="lagoona-service-wrap">
                <div className="lagoona-service-bloc lagoona-flex lagoona-service-img-2">
                  <a className="lagoona-link lagoona-service-link-list" href="#">
                    Аренда банкетных залов
                    <svg className="lagoona-service-arow" width="11" height="18" viewBox="0 0 11 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                    </svg>
                  </a>
                  <p className="lagoona-service-descr-list">Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм</p>
                </div>
              </li>
              <li className="lagoona-service-wrap">
                <div className="lagoona-service-bloc lagoona-flex lagoona-service-img-3">
                  <a className="lagoona-link lagoona-service-link-list" href="#">
                    Сауны, бассейны, бани, фитнес-залы
                    <svg className="lagoona-service-arow" width="11" height="18" viewBox="0 0 11 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                    </svg>
                  </a>
                  <p className="lagoona-service-descr-list">Не&nbsp;следует, однако забывать, что начало повседневной работы по&nbsp;формированию позиции</p>
                </div>
              </li>
              <li className="lagoona-service-wrap">
                <div className="lagoona-service-bloc lagoona-flex lagoona-service-img-4">
                  <a className="lagoona-link lagoona-service-link-list" href="#">
                    Охраняемые автомобильные стоянки
                    <svg className="lagoona-service-arow" width="11" height="18" viewBox="0 0 11 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.49998 1.00002L9.27815 8.7782L1.49998 16.5564" strokeWidth="2" />
                    </svg>
                  </a>
                  <p className="lagoona-service-descr-list">Не&nbsp;следует, однако забывать, что начало повседневной работы по&nbsp;формированию позиции</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="benefit" className="lagoona-benefit lagoona-container-block">
          <div className="lagoona-container">
            <h2 className="lagoona-section-title">Преимущества</h2>

            <ul className="lagoona-list lagoona-benefit-list lagoona-flex">
              <li className="lagoona-benefit-bloc lagoona-benefit-img-1">
                <p className="lagoona-benefit-descr-list">Идейные соображения высшего порядка, а&nbsp;также постоянный количественный рост</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-2">
                <p className="lagoona-benefit-descr-list">Значимость этих проблем настолько очевидна, что вопрос остаётся открытым</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-3">
                <p className="lagoona-benefit-descr-list">Таким образом реализация плановых заданий играет важную роль для понимания</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-4">
                <p className="lagoona-benefit-descr-list">Повседневная практика показывает, что сложившаяся структура организации</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-5">
                <p className="lagoona-benefit-descr-list">Равным образом рамки и&nbsp;место обучения кадров способствует подготовки сотрудника</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-6">
                <p className="lagoona-benefit-descr-list">Консультация с&nbsp;активом влечёт за&nbsp;собой процесс внедрения услуг нашего сервиса</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-7">
                <p className="lagoona-benefit-descr-list">Повседневная практика показывает, что дальнейшее развитие различных</p>
              </li>
              <li className="lagoona-benefit-bloc lagoona-benefit-img-8">
                <p className="lagoona-benefit-descr-list">Значимость этого настолько очевидна, что консультация наших экспертов помогает</p>
              </li>
            </ul>
          </div>
        </section>

        <section id="space" className="lagoona-space container-block">
          <div className="lagoona-container">
            <h2 className="lagoona-section-title">Размещение</h2>

            <ul className="lagoona-list lagoona-space-list lagoona-flex">
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-1.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">4&nbsp;698&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 4&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-null-img" src="assets/lagoona/Star-null.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona espa&ntilde;ola</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-2.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">5&nbsp;148&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 4&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-null-img" src="assets/lagoona/Star-null.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona son t&iacute;picas</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-3.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;254&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 5&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-4.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;320&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 5&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-5.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;457&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 4&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-null-img" src="assets/lagoona/Star-null.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-6.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;320&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 4&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-null-img" src="assets/lagoona/Star-null.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-7.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;505&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 5&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap">
                <div className="lagoona-space-bloc">
                  <img className="lagoona-space-img-list" src="assets/lagoona/photo-8.jpg" alt="Фото отеля" />
                  <div className="lagoona-space-bloc-main">
                    <div className="lagoona-space-bloc-card lagoona-flex">
                      <p className="lagoona-space-price-list">
                        <span className="lagoona-space-transparent">от&nbsp;</span>
                        <span className="lagoona-space-bold">6&nbsp;824&nbsp;₽</span>
                        <span className="lagoona-space-normal">&nbsp;/ ночь</span>
                      </p>
                      <div className="lagoona-space-container-star">
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="Рейтинг отеля 4&nbsp;из&nbsp;5" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-img" src="assets/lagoona/Star.svg" alt="" />
                        <img className="lagoona-space-star-null-img" src="assets/lagoona/Star-null.svg" alt="" />
                      </div>
                    </div>
                    <p className="lagoona-space-descr-en">Lagoona de&nbsp;la&nbsp;guerra</p>
                    <p className="lagoona-space-descr-ru lagoona-space-transparent">Барселона, Испания</p>
                    <button className="lagoona-btn lagoona-space-btn">Номера</button>
                  </div>
                </div>
              </li>
              <li className="lagoona-space-wrap lagoona-flex">
                <div className="lagoona-space-bloc-link lagoona-lex">
                  <a className="lagoona-link lagoona-space-link-list lagoona-lex" href="#">
                    Посмотреть все варианты
                    <svg className="lagoona-space-arrow" width="10" height="18" viewBox="0 0 10 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.778175 1.22183L8.55635 9L0.778175 16.7782" strokeWidth="2" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="lagoona-trip lagoona-container-block">
          <div className="lagoona-container">
            <div className="lagoona-trip-block">
              <h2 className="lagoona-section-title lagoona-trip-title">Хочу тур</h2>

              <form className="lagoona-trip-form lagoona-flex" action="https://postman-echo.com/post" method="post">
                <label className="lagoona-trip-label lagoona-flex">
                  Город вылета
                  <select className="lagoona-trip-select" name="city">
                    <option value="Санкт-Петербург" selected>Санкт-Петербург</option>
                    <option value="Москва">Москва</option>
                    <option value="Нижний Новгород">Нижний Новгород</option>
                  </select>
                </label>
                <label className="lagoona-trip-label lagoona-flex">
                  Страна
                  <select className="lagoona-trip-select" name="country">
                    <option value="Австалия" selected>Австралия</option>
                    <option value="Испания">Испания</option>
                  </select>
                </label>
                <label className="lagoona-trip-label lagoona-flex">
                  Дата прибытия
                  <input type="date" name="date" className="lagoona-trip-input lagoona-input-date" />
                </label>
                <label className="lagoona-trip-label lagoona-flex">
                  Ночей
                  <input type="number" name="night" className="lagoona-trip-input" />
                </label>
                <label className="lagoona-trip-label lagoona-flex">
                  Туристы
                  <input type="number" name="tourists" className="lagoona-trip-input" required />
                </label>

                <button type="submit" className="lagoona-btn lagoona-trip-btn">Найти</button>
              </form>
            </div>
          </div>
        </section>

        <section id="contacts" className="lagoona-contacts">
          <div className="lagoona-container">
            <h2 className="lagoona-section-title">Контакты</h2>

            <div className="lagoona-contacts__main lagoona-flex">
              <ul className="lagoona-list lagoona-contacts__list lagoona-flex">
                <li className="lagoona-contacts__bloc lagoona-flex">
                  <h3 className="lagoona-contacts__title">Адрес</h3>
                  <p className="lagoona-contacts__text">Москва, улица Юности, дом 5&nbsp;строение&nbsp;4, офис&nbsp;2</p>
                </li>
                <li className="lagoona-contacts__bloc lagoona-flex">
                  <h3 className="lagoona-contacts__title">Телефоны</h3>
                  <div className="lagoona-contacts__part-bloc lagoona-flex">
                    <a className="lagoona-link lagoona-contacts__link" href="tel:+74995356434">+7&nbsp;499 535-64-34</a>
                    <a className="lagoona-link lagoona-contacts__link" href="tel:+74950050544">+7&nbsp;495 005-05-44</a>
                  </div>
                </li>
                <li className="lagoona-contacts__bloc lagoona-flex">
                  <h3 className="lagoona-contacts__title">Email</h3>
                  <div className="lagoona-contacts__part-bloc">
                    <a className="lagoona-link lagoona-contacts__link" href="mailto:lg.oona@mail.ru">lg.oona@mail.ru</a>
                    <p className="lagoona-contacts__descr">по&nbsp;вопросам бронирования</p>
                    <a className="lagoona-link lagoona-contacts__link" href="mailto:hotels.ln@mail.ru">hotels.ln@mail.ru</a>
                    <p className="lagoona-contacts__descr">по&nbsp;вопросам сотрудничества</p>
                  </div>
                </li>
                <li className="lagoona-contacts__bloc lagoona-flex">
                  <h3 className="lagoona-contacts__title">График</h3>
                  <p className="lagoona-contacts__text">Понедельник-пятница, с&nbsp;10:00 до&nbsp;19:00</p>
                </li>
                <li className="lagoona-contacts__bloc lagoona-flex">
                  <button className="lagoona-btn lagoona-contacts__btn">Построить маршрут</button>
                </li>
              </ul>
              <img className="lagoona-contacts-photo-list" src="assets/lagoona/ReceptionPhoto.jpg" alt="Фото ресепшена Lagoona" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="lagoona-container lagoona-footer lagoona-flex">
          <img className="lagoona-footer__logo" src="assets/lagoona/logo-part.svg" alt="Лого компании" />

          <div className="lagoona-footer__info lagoona-flex">
            <small className="lagoona-footer__text">&copy;&nbsp;2012&ndash;2020 Управляющая компания Объединённой сети &laquo;Лагуна Хотелс&raquo;</small>
            <small className="lagoona-footer__text">Представленная на&nbsp;сайте информация носит справочный характер и&nbsp;не&nbsp;является публичной офертой</small>
            <a className="lagoona-link lagoona-footer__text lagoona-footer__text--download" href="#">Пользовательское соглашение</a>
          </div>

          <div className="lagoona-footer__link lagoona-flex">
            <ul className="lagoona-list lagoona-footer__list lagoona-flex">
              <li className="lagoona-footer__bloc">
                <p className="lagoona-footer__address">11710, улица Юности, дом 5&nbsp;строение&nbsp;4, офис&nbsp;2</p>
              </li>
              <li className="lagoona-footer__bloc">
                <a className="lagoona-link lagoona-footer__contacts" href="tel:+74995356434">+7&nbsp;499 535-64-34</a>
                <a className="lagoona-link lagoona-footer__contacts" href="tel:+74950050544">+7&nbsp;495 005-05-44</a>
              </li>
              <li className="lagoona-footer__bloc">
                <a className="lagoona-link lagoona-footer__contacts" href="mailto:lg.oona@mail.ru">lg.oona@mail.ru</a>
                <a className="lagoona-link lagoona-footer__contacts" href="mailto:hotels.ln@mail.ru">hotels.ln@mail.ru</a>
              </li>
            </ul>
          </div>

          <div className="lagoona-footer__icon lagoona-flex">
            <ul className="lagoona-list lagoona-footer__icon-link">
              <li className="lagoona-footer__icon-bloc">
                <a className="lagoona-link lagoona-footer__img" href="#">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.1779 11.7844C16.3343 11.7844 15.6441 12.449 15.6441 13.2926C15.6441 14.1362 16.3343 14.8263 17.1523 14.8263C17.9959 14.8263 18.6605 14.1362 18.6605 13.3182C18.6861 12.449 18.0214 11.7844 17.1779 11.7844ZM17.1779 14.0595C16.7433 14.0595 16.411 13.7272 16.411 13.2926C16.411 12.858 16.7433 12.5257 17.1779 12.5257C17.6124 12.5257 17.9447 12.8836 17.9447 13.2926C17.9447 13.7272 17.5869 14.0595 17.1779 14.0595Z" />
                    <path
                      d="M7.7965 9.58598C5.77707 9.56042 4.01327 11.2475 4.06439 13.3948C4.08996 15.3886 5.75151 17.1013 7.84762 17.0757C9.89261 17.0502 11.5542 15.3886 11.5542 13.3436C11.5542 11.2731 9.89261 9.58598 7.7965 9.58598ZM7.84762 15.6187C6.49282 15.6698 5.39364 14.5962 5.39364 13.2925C5.39364 11.9633 6.49282 10.9408 7.71981 10.9663C8.99793 10.9663 10.046 11.9888 10.046 13.2925C10.0715 14.5962 9.04905 15.5676 7.84762 15.6187Z" />
                    <path
                      d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM19.683 17.3568C18.9161 17.8425 18.0726 18.0726 17.1779 18.0726C16.7945 18.0726 16.411 18.0215 16.0532 17.9192C15.1585 17.6891 14.3916 17.229 13.7525 16.5644C13.6759 16.4877 13.5992 16.3855 13.4969 16.2832C13.1646 16.7945 12.8323 17.2801 12.5 17.7914C12.1677 17.2801 11.8354 16.7945 11.5031 16.3088C11.4775 16.3088 11.4775 16.3343 11.4775 16.3343L11.4519 16.3599C10.6851 17.2801 9.71369 17.817 8.53782 18.0215C7.8732 18.1237 7.23414 18.0981 6.59509 17.9192C5.7004 17.6636 4.93353 17.2035 4.29447 16.4877C3.68098 15.7975 3.3231 15.0051 3.16973 14.0849C3.01636 13.2413 3.19529 12.4233 3.24642 12.2188C3.39979 11.6309 3.62985 11.1196 3.98773 10.6339C4.01329 10.6084 4.01329 10.5317 4.01329 10.5061C3.88548 9.99488 3.62985 9.53475 3.34867 9.07463C3.27198 8.97238 3.19529 8.87013 3.11861 8.74232V8.71676C3.14417 8.71676 3.14417 8.71676 3.16973 8.71676C4.11554 8.71676 5.06134 8.71676 6.00715 8.71676C6.05828 8.71676 6.08384 8.6912 6.13496 8.66564C6.79958 8.23108 7.51533 7.89876 8.25664 7.64314C8.79345 7.4642 9.33026 7.31083 9.89263 7.20858C10.4294 7.10633 10.9662 7.02964 11.5286 7.00408C12.8579 6.90183 13.9315 7.02964 14.6472 7.13189C15.184 7.20858 15.6953 7.33639 16.2065 7.48977C17.1012 7.77095 17.9192 8.15439 18.7116 8.64007C18.7628 8.66564 18.8394 8.6912 18.9161 8.6912C19.8364 8.6912 20.7566 8.6912 21.6769 8.6912C21.7536 8.6912 21.8302 8.6912 21.9069 8.6912C21.9069 8.71676 21.9069 8.71676 21.9069 8.71676C21.8558 8.79345 21.8302 8.84457 21.7791 8.92126C21.4724 9.40694 21.1912 9.89263 21.0378 10.455C21.0122 10.5061 21.0122 10.5572 21.0634 10.6339C21.8814 11.8098 22.137 13.1135 21.8047 14.5194C21.4468 15.7208 20.7566 16.6667 19.683 17.3568Z" />
                    <path
                      d="M7.71982 11.7844C6.90182 11.7844 6.21164 12.4746 6.21164 13.2926C6.21164 14.1362 6.90182 14.8008 7.74538 14.8008C8.56338 14.8008 9.25356 14.1106 9.25356 13.267C9.25356 12.449 8.58894 11.7844 7.71982 11.7844ZM7.74538 14.085C7.31082 14.085 6.95295 13.7527 6.95295 13.2926C6.95295 12.858 7.28526 12.5257 7.71982 12.5257C8.15438 12.5257 8.48669 12.858 8.51225 13.2926C8.53781 13.7272 8.17994 14.0595 7.74538 14.085Z" />
                    <path
                      d="M17.1012 9.61152C15.0562 9.66264 13.4458 11.2986 13.4202 13.3436C13.4202 15.4142 15.1073 17.1268 17.1779 17.1013C19.2484 17.1013 20.9356 15.4397 20.9356 13.3436C20.9356 11.1964 19.1718 9.56039 17.1012 9.61152ZM17.2801 15.6187C15.9253 15.6698 14.8517 14.5962 14.8517 13.2925C14.8517 11.9633 15.9509 10.9408 17.1779 10.9663C18.456 10.9663 19.5041 11.9888 19.5041 13.2925C19.5041 14.5706 18.4816 15.5675 17.2801 15.6187Z" />
                    <path
                      d="M13.9826 9.86723C14.8006 9.10035 15.7975 8.71692 16.9223 8.61467C15.593 8.02674 14.1871 7.77111 12.73 7.74555C11.094 7.71999 9.48361 7.95005 7.97543 8.58911C9.12574 8.6658 10.1227 9.04923 10.9662 9.8161C11.8098 10.583 12.2955 11.5543 12.4744 12.6791C12.6789 11.5799 13.1646 10.6341 13.9826 9.86723Z" />
                  </svg>
                </a>
              </li>
              <li className="lagoona-footer__icon-bloc">
                <a className="lagoona-link lagoona-footer__img" href="#">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.7106 8.32552C10.7106 9.35607 11.546 10.1916 12.5766 10.1916C13.6071 10.1916 14.4426 9.35607 14.4426 8.32552C14.4426 7.29496 13.6071 6.4595 12.5766 6.4595C11.546 6.4595 10.7106 7.29496 10.7106 8.32552Z" />
                    <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59643 0 0 5.59644 0 12.5C0 19.4036 5.59643 25 12.5 25ZM8.06251 8.32546C8.06251 5.83243 10.0835 3.81137 12.5766 3.81137C15.0697 3.81137 17.0907 5.83243 17.0907 8.32546C17.0907 10.8185 15.0697 12.8397 12.5766 12.8397C10.0835 12.8397 8.06251 10.8185 8.06251 8.32546ZM17.1176 15.1617C17.0604 15.2076 15.9774 16.0634 14.1702 16.4316L16.8981 19.1351C17.3778 19.6141 17.3784 20.3912 16.8994 20.8709C16.4205 21.3506 15.6435 21.3514 15.1636 20.8723L12.5153 18.2933L10.1099 20.8557C9.86912 21.1055 9.54789 21.2311 9.22631 21.2311C8.91959 21.2311 8.61261 21.117 8.37443 20.8873C7.88644 20.4168 7.87231 19.6398 8.34283 19.1518L10.932 16.4459C9.07424 16.0864 7.94659 15.2083 7.88852 15.1617C7.3597 14.7376 7.27476 13.9651 7.69885 13.4362C8.12288 12.9074 8.8953 12.8225 9.42424 13.2465C9.4354 13.2556 10.6148 14.1416 12.5153 14.1429C14.4157 14.1416 15.5707 13.2556 15.5819 13.2465C16.1109 12.8225 16.8833 12.9074 17.3073 13.4362C17.7314 13.9651 17.6464 14.7376 17.1176 15.1617Z" />
                  </svg>
                </a>
              </li>
              <li className="lagoona-footer__icon-bloc">
                <a className="lagoona-link lagoona-footer__img" href="#">
                  <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5 0C5.59815 0 0 5.59815 0 12.5C0 19.4018 5.59815 25 12.5 25C19.4018 25 25 19.4018 25 12.5C25 5.59815 19.4018 0 12.5 0ZM18.8394 13.8548C19.4274 14.4172 20.0409 14.954 20.5521 15.593C20.7822 15.8742 21.0122 16.1554 21.1656 16.4877C21.3957 16.9478 21.1912 17.4591 20.7822 17.4846H18.226C17.5613 17.5358 17.0501 17.2801 16.59 16.82C16.2321 16.4622 15.8998 16.0787 15.5675 15.6953C15.4397 15.5419 15.2863 15.3885 15.1073 15.2863C14.7495 15.0562 14.4427 15.1329 14.2638 15.4908C14.0593 15.8742 14.0082 16.2832 13.9826 16.6922C13.957 17.3057 13.7781 17.4591 13.1646 17.4846C11.8609 17.5358 10.6339 17.3568 9.50919 16.6922C8.51226 16.1043 7.71983 15.3118 7.05521 14.3916C5.72597 12.6022 4.72903 10.6339 3.80879 8.61451C3.60429 8.15439 3.75767 7.92433 4.26891 7.89876C5.11247 7.8732 5.93046 7.8732 6.77402 7.89876C7.10633 7.89876 7.33639 8.10326 7.46421 8.41001C7.92433 9.50919 8.46114 10.5828 9.15132 11.5542C9.33026 11.8098 9.53475 12.0654 9.79038 12.2699C10.0971 12.4744 10.3016 12.3977 10.455 12.0654C10.5317 11.8609 10.5828 11.6309 10.6084 11.4008C10.6851 10.6339 10.6851 9.86707 10.5572 9.10019C10.4806 8.58895 10.2249 8.2822 9.73925 8.17995C9.48363 8.12883 9.53476 8.05214 9.637 7.89876C9.8415 7.6687 10.046 7.51533 10.4294 7.51533H13.318C13.7781 7.61758 13.8804 7.79652 13.9315 8.25664V11.4775C13.9315 11.6564 14.0082 12.1932 14.3405 12.2955C14.5961 12.3722 14.775 12.1677 14.9284 12.0143C15.6186 11.273 16.1043 10.4039 16.5644 9.50919C16.7689 9.10019 16.9223 8.6912 17.1012 8.2822C17.229 7.97545 17.408 7.82208 17.7658 7.82208H20.5521C20.6288 7.82208 20.7055 7.82208 20.8078 7.84764C21.2679 7.92433 21.3957 8.12883 21.2679 8.58895C21.0378 9.30469 20.6033 9.91819 20.1687 10.5061C19.7086 11.1452 19.1973 11.7587 18.7372 12.4233C18.2771 13.0368 18.3026 13.3435 18.8394 13.8548Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Lagoona
