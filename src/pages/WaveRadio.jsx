import './W-WaveRadio/css/normalize.css'
import './W-WaveRadio/css/style.css'
import './W-WaveRadio/css/media.css'

const WaveRadio = () => {
  return (
    <div className='w-wave'>
      <header className="w-wave-header">
        <div className="w-wave-container w-wave-header__container">
          <div className="w-wave-header__wrap">
            <a className="w-wave-link w-wave-header__link" href="#">
              <picture>
                <source srcSet="assets/w-wave/logo-mobile-min.png" media="(max-width: 425px)" />
                <source srcSet="assets/w-wave/logo-tablet.png" media="(max-width: 1200px)" />
                <img className="w-wave-header__img" src="assets/w-wave/logo.png" alt="Логотип компании W-Wave Radio" />
              </picture>
            </a>
            <nav className="w-wave-nav">
              <ul className="w-wave-list-reset w-wave-nav__list">
                <li className="w-wave-nav__item">
                  <a className="w-wave-link w-wave-nav__link" href="#podcast">Подкасты</a>
                </li>
                <li className="w-wave-nav__item">
                  <a className="w-wave-link w-wave-nav__link" href="#broadcast">Передачи</a>
                </li>
                <li className="w-wave-nav__item">
                  <a className="w-wave-link w-wave-nav__link" href="#guest">Гости</a>
                </li>
                <li className="w-wave-nav__item">
                  <a className="w-wave-link w-wave-nav__link" href="#playlist">Плейлисты</a>
                </li>
                <li className="w-wave-nav__item">
                  <a className="w-wave-link w-wave-nav__link" href="#about-us">О нас</a>
                </li>
              </ul>
            </nav>

            <button className="w-wave-btn w-wave-nav__btn" aria-label="Поиск по сайту">
              <svg className="w-wave-nav__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L16.65 16.65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="w-wave-main">
        <section className="w-wave-banner">
          <div className="w-wave-container w-wave-banner__container">
            <div className="w-wave-banner__wrap w-wave-banner__image">
              <h1 className="w-wave-title banner__title">
                Радио
                <span className="w-wave-span w-wave-banner__title w-wave-banner__title--italic">W-Wave</span>
              </h1>
              <p className="w-wave-descr w-wave-banner__descr">
                Привет, на&nbsp;связи W-Wave! Раньше мы&nbsp;были
                <a className="w-wave-link w-wave-banner__link" href="#" target="_blank">изданием,</a>
                а&nbsp;теперь пробуем себя в&nbsp;разоворном жанре. Говорим о&nbsp;музыке, политике, истории, науке и&nbsp;культуре. Здесь, помимо прямого эфира&nbsp;&mdash; архив передач и&nbsp;многое другое:)</p>
              <a className="w-wave-link w-wave-link-btn banner__btn" href="#">Слушать эфир</a>
            </div>
          </div>
        </section>

        <section className="w-wave-podcast" id="podcast">
          <div className="w-wave-container w-wave-podcast__container">
            <h2 className="w-wave-title w-wave-podcast__title">Подкасты</h2>

            <ul className="w-wave-list-reset w-wave-podcast__list">
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-1-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Европа. XIX век" src="assets/w-wave/podcast-1.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">14&nbsp;июня</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">15:43</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Европа. XIX век</p>
                    <p className="w-wave-descr w-wave-podcast__name">Дмитрий Гутенберг</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-2-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: О музыке" src="assets/w-wave/podcast-2.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">11&nbsp;июня</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">5:32</span>
                    <p className="w-wave-descr w-wave-podcast__descr">О&nbsp;музыке</p>
                    <p className="w-wave-descr w-wave-podcast__name">Дмитрий Гутенберг</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-3-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Люди сегодня" src="assets/w-wave/podcast-3.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">8&nbsp;июня</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">8:54</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Люди сегодня</p>
                    <p className="w-wave-descr w-wave-podcast__name">Анна Васильева</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-4-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Хэллоу, Африка!" src="assets/w-wave/podcast-4.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">5&nbsp;июня</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">9:04</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Хэллоу, Африка!</p>
                    <p className="w-wave-descr w-wave-podcast__name">Пётр Дмитриевский</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-5-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Обо всём" src="assets/w-wave/podcast-5.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">2&nbsp;июня</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">7:03</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Обо всём</p>
                    <p className="w-wave-descr w-wave-podcast__name">Пётр Дмитриевский</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-6-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Физика цвета" src="assets/w-wave/podcast-6.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">28&nbsp;мая</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">9:15</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Физика цвета</p>
                    <p className="w-wave-descr w-wave-podcast__name">Татьяна Флеганова</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-7-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Источник звука" src="assets/w-wave/podcast-7.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">22&nbsp;мая</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">16:04</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Источник звука</p>
                    <p className="w-wave-descr w-wave-podcast__name">Пётр Дмитриевский</p>
                  </div>
                </div>
              </li>
              <li className="w-wave-podcast__item">
                <picture className="w-wave-podcast__picture">
                  <source srcSet="assets/w-wave/podcast-8-mobil-min.jpg" media="(max-width: 425px)" />
                  <img className="w-wave-podcast__img" alt="Подкаст: Правила этикета" src="assets/w-wave/podcast-8.jpg" aria-hidden="true" />
                </picture>
                <div className="w-wave-podcast__wrap">
                  <span className="w-wave-span w-wave-podcast__data">18&nbsp;мая</span>
                  <div className="w-wave-podcast__part">
                    <span className="w-wave-span w-wave-podcast__time" aria-hidden="true">6:55</span>
                    <p className="w-wave-descr w-wave-podcast__descr">Правила этикета</p>
                    <p className="w-wave-descr w-wave-podcast__name">Татьяна Флеганова</p>
                  </div>
                </div>
              </li>
            </ul>

            <a className="w-wave-link w-wave-link-btn w-wave-podcast__link" href="#">Ещё подкасты</a>
          </div>
        </section>

        <section className="w-wave-broadcast" id="broadcast">
          <div className="w-wave-container w-wave-broadcast__container">
            <h2 className="w-wave-title w-wave-broadcast__title">Передачи</h2>

            <ul className="w-wave-list-reset w-wave-broadcast__list">
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--1">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">О&nbsp;людях и&nbsp;книгах</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">Анонсируется отдельно</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--2">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">Графомания&nbsp;td</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">По&nbsp;понедельникам в&nbsp;10:00</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--3">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">Не&nbsp;Рим, не&nbsp;Троя</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">По&nbsp;вторникам в&nbsp;12:00</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--4">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">Эрудит</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">По&nbsp;пятницам в&nbsp;17:00</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--5">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">Тонкости эпох</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">По&nbsp;субботам в&nbsp;10:00</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
              <li className="w-wave-broadcast__item">
                <div className="w-wave-broadcast__wrap w-wave-broadcast__image w-wave-broadcast__image--6">
                  <h3 className="w-wave-title w-wave-broadcast__title w-wave-broadcast__title--min">Живые мысли</h3>
                  <span className="w-wave-span w-wave-broadcast__announce">По&nbsp;воскресеньям в&nbsp;15:30</span>
                  <a href="" className="w-wave-link w-wave-broadcast__link">
                    Подробнее
                    <svg className="w-wave-broadcast__arrow" width="28" height="12" viewBox="0 0 28 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24.3536 6.35355C24.5488 6.15829 24.5488 5.84171 24.3536 5.64645L21.1716 2.46447C20.9763 2.2692 20.6597 2.2692 20.4645 2.46447C20.2692 2.65973 20.2692 2.97631 20.4645 3.17157L23.2929 6L20.4645 8.82843C20.2692 9.02369 20.2692 9.34027 20.4645 9.53553C20.6597 9.7308 20.9763 9.7308 21.1716 9.53553L24.3536 6.35355ZM4 6.5H24V5.5H4V6.5Z" />
                    </svg>
                  </a>
                </div>
              </li>
            </ul>

            <div className="w-wave-broadcast__wrap w-wave-broadcast__wrap--standalone w-wave-broadcast__icon">
              <a className="w-wave-link w-wave-link-btn w-wave-broadcast__btn" href="#" target="_blank">Архив</a>
              <span className="w-wave-span w-wave-broadcast__descr">В&nbsp;архив попадают все передачи, которые вы&nbsp;пропустили! Enjoy:)</span>
            </div>
          </div>
        </section>

        <section className="w-wave-guest" id="guest">
          <div className="w-wave-container">
            <h2 className="w-wave-title w-wave-guest__title">Гости</h2>

            <span className="w-wave-span w-wave-guest__exeplanation">У&nbsp;нас бывают:</span>
            <p className="w-wave-descr w-wave-guest__descr">Блогеры, арт-критики и&nbsp;деятели искусства, музыканты, молодые учёные и&nbsp;люди науки, историки, филологи и&nbsp;много других интересных гостей!</p>

            <ul className="w-wave-list-reset w-wave-guest__list">
              <li className="w-wave-guest__item">
                <img className="w-wave-guest__image" alt="Фото Ольги Мартыновой" src="assets/w-wave/guest-1.jpg" aria-hidden="true" />
                <div className="w-wave-guest__part">
                  <p className="w-wave-descr w-wave-guest__name">Ольга Мартынова</p>
                  <p className="w-wave-descr w-wave-guest__descr w-wave-guest__descr--min">Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.</p>
                  <a className="w-wave-link w-wave-link-btn w-wave-guest__btn" href="#" target="_blank">Эфиры с&nbsp;гостем</a>
                </div>
              </li>
              <li className="w-wave-guest__item">
                <img className="w-wave-guest__image" alt="Фото Дениса Гришина" src="assets/w-wave/guest-2.jpg" aria-hidden="true" />
                <div className="w-wave-guest__part">
                  <p className="w-wave-descr w-wave-guest__name">Денис Гришин</p>
                  <p className="w-wave-descr w-wave-guest__descr w-wave-guest__descr--min">Однозначно, элементы политического процесса являются только методом политического участия и&nbsp;смешаны с&nbsp;не&nbsp;уникальными данными до&nbsp;степени совершённой неузнаваемости, из-за чего возрастает их&nbsp;статус бесполезности.</p>
                  <a className="w-wave-link w-wave-link-btn w-wave-guest__btn" href="#" target="_blank">Эфиры с&nbsp;гостем</a>
                </div>
              </li>
              <li className="w-wave-guest__item">
                <img className="w-wave-guest__image" alt="Фото Ольги Мартыновой" src="assets/w-wave/guest-3.jpg" aria-hidden="true" />
                <div className="w-wave-guest__part">
                  <p className="w-wave-descr w-wave-guest__name">Ольга Мартынова</p>
                  <p className="w-wave-descr w-wave-guest__descr w-wave-guest__descr--min">С&nbsp;другой стороны, высококачественный прототип будущего проекта выявляет срочную потребность дальнейших направлений развития. В&nbsp;рамках спецификации современных стандартов, реплицированные с&nbsp;зарубежных источников.</p>
                  <a className="w-wave-link w-wave-link-btn w-wave-guest__btn" href="#" target="_blank">Эфиры с&nbsp;гостем</a>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="w-wave-playlist" id="playlist">
          <div className="w-wave-container w-wave-playlist__container">
            <div className="w-wave-playlist__wrap w-wave-playlist__wrap--standalone">
              <h2 className="w-wave-title w-wave-playlist__title">Плейлисты</h2>
              <p className="w-wave-descr w-wave-playlist__descr">Раздел &laquo;Плейлисты&raquo; может содержать информацию, не&nbsp;предназначенную для несовершеннолетних</p>
              <span className="w-wave-span w-wave-playlist__copyright">&copy;&nbsp;2021&nbsp;l W-Wave</span>
              <span className="w-wave-span w-wave-playlist__limit">18+</span>
            </div>

            <ul className="w-wave-list-reset w-wave-playlist__list">
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Ploho" src="assets/w-wave/playlist-1.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Ploho</p>
                  <span className="w-wave-span w-wave-playlist__info">3&nbsp;последних альбома</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Molchat Doma" src="assets/w-wave/playlist-2.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Molchat Doma</p>
                  <span className="w-wave-span w-wave-playlist__info">Все песни</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Motorama" src="assets/w-wave/playlist-3.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Motorama</p>
                  <span className="w-wave-span w-wave-playlist__info">Все песни</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Human Tetris" src="assets/w-wave/playlist-4.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Human Tetris</p>
                  <span className="w-wave-span w-wave-playlist__info">3&nbsp;последних альбома</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Буерак" src="assets/w-wave/playlist-5.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Буерак</p>
                  <span className="w-wave-span w-wave-playlist__info">Все EP</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--rus"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Июльские Дни" src="assets/w-wave/playlist-6.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Июльские Дни</p>
                  <span className="w-wave-span w-wave-playlist__info">Альбом &laquo;Колокол&raquo;</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Joy Division" src="assets/w-wave/playlist-7.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Joy Division</p>
                  <span className="w-wave-span w-wave-playlist__info">Лучшее за&nbsp;всё время</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста The Cure" src="assets/w-wave/playlist-8.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">The Cure</p>
                  <span className="w-wave-span w-wave-playlist__info">Лучшее за&nbsp;всё время</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста The Smiths" src="assets/w-wave/playlist-9.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">The Smiths</p>
                  <span className="w-wave-span w-wave-playlist__info">Период 1984&ndash;1988</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста New Order" src="assets/w-wave/playlist-10.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">New Order</p>
                  <span className="w-wave-span w-wave-playlist__info">Хиты</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Bauhaus" src="assets/w-wave/playlist-11.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Bauhaus</p>
                  <span className="w-wave-span w-wave-playlist__info">Все синглы</span>
                </div>
              </li>
              <li className="w-wave-playlist__item">
                <span className="w-wave-playlist__icon w-wave-playlist__icon--brit"></span>
                <img className="w-wave-playlist__image" alt="Обложка плейлиста Gang Of Four" src="assets/w-wave/playlist-12.jpg" aria-hidden="true" />
                <div className="w-wave-playlist__part">
                  <p className="w-wave-descr w-wave-playlist__descr w-wave-playlist__descr--name">Gang Of Four</p>
                  <span className="w-wave-span w-wave-playlist__info">3&nbsp;последних альбома</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="w-wave-sale">
          <div className="w-wave-container w-wave-sale__container">
            <div className="w-wave-sale__part">
              <img className="w-wave-sale__image" alt="Фото Радиоприёмника-колонки W-Wave 1.0 xm" src="assets/w-wave/radio.png" />
              <span className="w-wave-span w-wave-sale__image w-wave-sale__image--new"></span>
            </div>

            <div className="w-wave-sale__wrap">
              <h3 className="w-wave-title w-wave-sale__title w-wave-sale__dekor">Будь с&nbsp;нами на&nbsp;одной волне!</h3>

              <p className="w-wave-descr w-wave-sale__descr">Друзья, рады представить вам продукт нашего производства! Да-да, несмотря на&nbsp;то, что мы&nbsp;только начали свой путь радиовещателей, нам хочется, чтобы вы&nbsp;могли как следует нас расслышать:)</p>
              <p className="w-wave-descr w-wave-sale__descr">Итак, встречайте! Портативный радиоприёмник-колонка W-Wave 1.0&nbsp;xm. Тщательный подбор всех деталей, ручная сборка, качественный звук. Пока доступно только 60&nbsp;штук в&nbsp;3&nbsp;цветах, но&nbsp;мы&nbsp;активно трудимся над новыми партиями и&nbsp;дизайном. Спешите приобрести!</p>
              <span className="w-wave-span w-wave-sale__price">2&nbsp;800&nbsp;₽</span>

              <a className="w-wave-link w-wave-link-btn w-wave-sale__link" href="#" target="_blank">
                <svg className="w-wave-sale__svg" width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_128601_385)">
                    <path
                      d="M10.5 20C16.0228 20 20.5 15.5228 20.5 9.99998C20.5 4.47714 16.0228 0 10.5 0C4.97724 0 0.5 4.47714 0.5 9.99998C0.5 15.5228 4.97724 20 10.5 20Z" />
                    <path
                      d="M17.4385 4.54391L13.7295 3.17676L8.3957 10.8637L8.92677 7.3751L6.02058 5.68219L0.67395 12.1141C0.924269 13.3858 1.4102 14.5718 2.08387 15.6239L5.27373 11.7711L4.09993 16.2962L7.73707 17.6271L13.1408 9.8464L11.9569 14.2958L14.9033 16.0179L20.558 10.3174C20.5592 10.2534 20.5599 10.1889 20.5599 10.1246C20.5599 8.78258 20.3017 7.50132 19.8329 6.32896L16.5482 9.6538L17.4385 4.54391Z" />
                  </g>
                  <defs>
                    <clippath id="clip0_128601_385">
                      <rect x="0.5" width="20" height="20" rx="10" fill="white" />
                    </clippath>
                  </defs>
                </svg>
                Купить на&nbsp;Яндекс.Маркет
              </a>
            </div>
          </div>
        </section>

        <section className="w-wave-about-us" id="about-us">
          <div className="w-wave-container w-wave-about-us__container">
            <div className="w-wave-about-us__wrap w-wave-about-us__dekor">
              <h2 className="w-wave-title w-wave-about-us__title">О&nbsp;нас</h2>
              <span className="w-wave-span w-wave-about-us__span">Приём-приём! Как слышно? Мы&nbsp;уже в&nbsp;эфире? Отлично, поехали!</span>
              <p className="w-wave-descr w-wave-about-us__descr">Друзья, мы&nbsp;будем очень рады, если вы&nbsp;поможете стать нам лучше. Нам важен каждый слушатель, поэтому вы&nbsp;можете поделиться обратной связью о&nbsp;наших предеачах, темах, подборках и&nbsp;вообще обо всём! Это можно сделать либо написав нам в&nbsp;форме ниже, либо кликнув на&nbsp;наши соцсети в&nbsp;подвале сайта. Спасибо! Услышимся!:)</p>
            </div>

            <ul className="w-wave-list-reset w-wave-about-us__list">
              <li className="w-wave-about-us__item">
                <picture>
                  <source srcSet="assets/w-wave/leader-1-mobile-min.jpg" media="(max-width: 425px)" />
                  <source srcSet="assets/w-wave/leader-1.jpg" media="(max-width: 1023px)" />
                  <source srcSet="assets/w-wave/leader-1-tablet.jpg" media="(max-width: 1200px)" />
                  <img className="w-wave-about-us__img" src="assets/w-wave/leader-1.jpg" alt="Фото Дмитрия Гутенберга" aria-hidden="true" />
                </picture>
                <div className="w-wave-about-us__part">
                  <p className="w-wave-descr w-wave-about-us__name">Дмитрий Гутенберг</p>
                  <span className="w-wave-span w-wave-about-us__descr w-wave-about-us__descr--min">Эксперт (ну, почти) по&nbsp;всем вопросам (почти)</span>
                </div>
              </li>
              <li className="w-wave-about-us__item">
                <picture>
                  <source srcSet="assets/w-wave/leader-2-mobile-min.jpg" media="(max-width: 425px)" />
                  <source srcSet="assets/w-wave/leader-2.jpg" media="(max-width: 1023px)" />
                  <source srcSet="assets/w-wave/leader-2-tablet.jpg" media="(max-width: 1200px)" />
                  <img className="w-wave-about-us__img" src="assets/w-wave/leader-2.jpg" alt="Фото Анны Васильевой" aria-hidden="true" />
                </picture>
                <div className="w-wave-about-us__part">
                  <p className="w-wave-descr w-wave-about-us__name">Анна Васильева</p>
                  <span className="w-wave-span w-wave-about-us__descr w-wave-about-us__descr--min">Как я&nbsp;здесь оказалась? А&nbsp;главное&nbsp;&mdash; зачем?</span>
                </div>
              </li>
              <li className="w-wave-about-us__item">
                <picture>
                  <source srcSet="assets/w-wave/leader-3-mobile-min.jpg" media="(max-width: 425px)" />
                  <source srcSet="assets/w-wave/leader-3-tablet-min.jpg" media="(max-width: 1023px)" />
                  <source srcSet="assets/w-wave/leader-3-tablet.jpg" media="(max-width: 1200px)" />
                  <img className="w-wave-about-us__img" src="assets/w-wave/leader-3.jpg" alt="Фото Пётра Дмитриевского" aria-hidden="true" />
                </picture>
                <div className="w-wave-about-us__part">
                  <p className="w-wave-descr w-wave-about-us__name">Пётр Дмитриевский</p>
                  <span className="w-wave-span w-wave-about-us__descr w-wave-about-us__descr--min">Господа! Внимание! Благодарю за&nbsp;внимание!</span>
                </div>
              </li>
              <li className="w-wave-about-us__item">
                <picture>
                  <source srcSet="assets/w-wave/leader-4-mobile-min.jpg" media="(max-width: 425px)" />
                  <source srcSet="assets/w-wave/leader-4-tablet-min.jpg" media="(max-width: 1023px)" />
                  <source srcSet="assets/w-wave/leader-4-tablet.jpg" media="(max-width: 1200px)" />
                  <img className="w-wave-about-us__img" src="assets/w-wave/leader-4.jpg" alt="Фото Татьяны Флегановой" aria-hidden="true" />
                </picture>
                <div className="w-wave-about-us__part">
                  <p className="w-wave-descr w-wave-about-us__name">Татьяна Флеганова</p>
                  <span className="w-wave-span w-wave-about-us__descr w-wave-about-us__descr--min">Одна я&nbsp;в&nbsp;пальто стою красивая, а&nbsp;вокруг...</span>
                </div>
              </li>
            </ul>

            <div className="w-wave-about-us__form">
              <form className="w-wave-form" action="#" method="post" aria-label="Форма для обратной связи">
                <textarea className="w-wave-form__textarea" name="Сообщение" placeholder="Что скажете?" rows="5" required></textarea>
                <label className="w-wave-form__part">
                  <input className="w-wave-form__input" type="text" name="Name" placeholder="Имя" pattern="^[А-Яа-яЁё\s]+$" required />
                  <span className="w-wave-span w-wave-form__error" aria-hidden="true">Ошибка</span>
                </label>
                <label className="w-wave-form__part">
                  <input className="w-wave-form__input" type="email" name="Email" placeholder="Email" required />
                  <span className="w-wave-span w-wave-form__error" aria-hidden="true">Ошибка</span>
                </label>
              </form>
              <div className="w-wave-form__wrap">
                <button className="w-wave-btn w-wave-form__btn" aria-label="Отправить форму">Отправить</button>
                <label className="w-wave-form__label">
                  <input className="w-wave-form__checkbox" type="checkbox" name="consent" required aria-label="Согласен на обработку персональных данных" />
                  <span className="w-wave-span w-wave-form__consent">Согласен на&nbsp;обработку персональных данных</span>
                </label>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-wave-footer">
        <span className="w-wave-span w-wave-footer__span"></span>

        <div className="w-wave-container w-wave-footer__container">
          <div className="w-wave-footer__top">
            <div className="w-wave-footer__wrap">
              <a className="w-wave-link w-wave-footer__logo" href="#">
                <img className="w-wave-footer__img" src="assets/w-wave/logo-foot.png" alt="Логотип компании W-Wave Radio" />
              </a>
              <ul className="w-wave-list-reset w-wave-footer__list">
                <li className="w-wave-footer__item">
                  <a className="w-wave-link w-wave-footer__link" href="#" aria-label="YouTube">
                    <svg className="w-wave-footer__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_24531_5372)">
                        <path
                          d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" />
                      </g>
                      <defs>
                        <clippath id="clip0_24531_5372">
                          <rect width="24" height="24" fill="white" />
                        </clippath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="w-wave-footer__item">
                  <a className="w-wave-link w-wave-footer__link" href="#" aria-label="Одноклассники">
                    <svg className="w-wave-footer__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_24531_5373)">
                        <path
                          d="M10.2338 8.14624C10.2338 9.0928 11.0569 9.86023 12.0724 9.86023C13.088 9.86023 13.9111 9.0928 13.9111 8.14624C13.9111 7.19968 13.088 6.43231 12.0724 6.43231C11.0569 6.43231 10.2338 7.19968 10.2338 8.14624Z" />
                        <path fillRule="evenodd" clipRule="evenodd"
                          d="M8 2C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2H8ZM7.62436 8.14617C7.62436 5.85633 9.61571 4 12.0724 4C14.5292 4 16.5206 5.85633 16.5206 8.14617C16.5206 10.4361 14.5292 12.2925 12.0724 12.2925C9.61571 12.2925 7.62436 10.4361 7.62436 8.14617ZM16.5472 14.4252C16.4907 14.4674 15.4236 15.2535 13.6427 15.5916L16.3307 18.0748C16.8034 18.5147 16.804 19.2285 16.3321 19.6691C15.8602 20.1097 15.0946 20.1104 14.6216 19.6704L12.012 17.3016L9.64177 19.6552C9.4046 19.8846 9.08805 20 8.77109 20C8.46897 20 8.16645 19.8952 7.93169 19.6842C7.45075 19.252 7.43691 18.5384 7.90062 18.0902L10.4519 15.6048C8.62134 15.2746 7.51009 14.468 7.45295 14.4252C6.93171 14.0357 6.84811 13.3262 7.26591 12.8404C7.6839 12.3547 8.44492 12.2767 8.96616 12.6662C8.97719 12.6744 10.1394 13.4883 12.012 13.4895C13.8847 13.4883 15.0228 12.6744 15.0338 12.6662C15.5551 12.2767 16.3163 12.3547 16.7341 12.8404C17.1519 13.3262 17.0683 14.0357 16.5472 14.4252Z" />
                      </g>
                      <defs>
                        <clippath id="clip0_24531_5373">
                          <rect width="24" height="24" fill="white" />
                        </clippath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="w-wave-footer__item">
                  <a className="w-wave-link w-wave-footer__link" href="#" aria-label="ВКонтакте">
                    <svg className="w-wave-footer__svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M2 8C2 4.68652 4.68652 2 8 2H16C19.3135 2 22 4.68652 22 8V16C22 19.3135 19.3135 22 16 22H8C4.68652 22 2 19.3135 2 16V8ZM17.3438 13.4473C17.7139 13.7778 18.0845 14.1089 18.4121 14.4795C18.5415 14.626 18.6665 14.7754 18.7769 14.9346C18.835 15.0181 18.8892 15.104 18.938 15.1934C19.0425 15.3848 19.0439 15.5859 18.9727 15.7383C18.9058 15.8809 18.7754 15.981 18.606 15.9917L16.4209 15.9912C15.8569 16.0356 15.4077 15.8208 15.0293 15.4575C14.7271 15.1675 14.4468 14.8584 14.1558 14.5586C14.0366 14.4355 13.9116 14.3198 13.7622 14.2285C13.5962 14.1265 13.4419 14.0991 13.3086 14.1455C13.2031 14.1821 13.1104 14.2656 13.0352 14.3955C12.8613 14.6938 12.8213 15.0244 12.8047 15.3564C12.7812 15.8418 12.6255 15.9688 12.1089 15.9917C11.0044 16.0405 9.95654 15.8823 8.98242 15.3574C8.12305 14.8945 7.45801 14.2417 6.87842 13.502C5.75 12.0601 4.88574 10.4775 4.10938 8.84912C3.93457 8.48242 4.0625 8.28662 4.4917 8.27881C5.20459 8.26611 5.91797 8.26758 6.63086 8.27832C6.9209 8.28271 7.11279 8.43896 7.22461 8.69727C7.60986 9.59082 8.08203 10.4409 8.67432 11.229L8.78369 11.3721C8.90918 11.5317 9.04541 11.6826 9.22217 11.7969C9.4751 11.9604 9.66797 11.9062 9.7876 11.6401C9.86377 11.4707 9.89697 11.2896 9.91357 11.1084C9.97021 10.4873 9.97705 9.86621 9.87891 9.24756C9.81787 8.86035 9.58643 8.61035 9.17725 8.53711C8.96826 8.49951 8.99902 8.42676 9.10059 8.31445C9.27637 8.12061 9.44141 8.00049 9.771 8.00049L12.2397 8C12.6284 8.07178 12.7158 8.23633 12.7686 8.60596L12.771 11.1909C12.7661 11.334 12.8472 11.7578 13.1191 11.8511C13.3374 11.9189 13.4814 11.7539 13.6118 11.624C14.2036 11.0317 14.6255 10.333 15.0034 9.60986C15.1699 9.29102 15.314 8.96094 15.4536 8.63037C15.5024 8.51562 15.5635 8.42822 15.6455 8.36816C15.7378 8.30029 15.8564 8.26758 16.0117 8.26953L18.3887 8.27246C18.4585 8.27246 18.5298 8.27295 18.5991 8.28418C18.8101 8.31836 18.9404 8.37939 18.9985 8.4834C19.0503 8.57666 19.0439 8.70508 18.9854 8.87939C18.7979 9.43555 18.4399 9.90283 18.0835 10.3677L18.041 10.4233C17.6436 10.9409 17.2202 11.4399 16.8271 11.96C16.4658 12.4346 16.4941 12.6738 16.9429 13.0864C17.0752 13.208 17.2095 13.3276 17.3438 13.4473Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-wave-nav w-wave-footer__nav">
              <ul className="w-wave-list-reset w-wave-nav__list w-wave-nav__list--white">
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Подкасты</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Передачи</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Гости</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Плейлисты</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Сетка</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">О нас</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Новости</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Блоги</a>
                </li>
                <li className="w-wave-nav__item w-wave-nav__item--min">
                  <a className="w-wave-link w-wave-nav__link w-wave-nav__link--min" href="#">Топы</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-wave-footer__bottom">
            <span className="w-wave-span w-wave-footer__trademark">W-WAVE ® 2023</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WaveRadio
