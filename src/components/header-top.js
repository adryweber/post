import React from "react"

const HeaderTop = () => (

    <div class="header-container">
  <div
    class="portlet-boundary portlet-boundary_postIdLoginPortlet_WAR_portalportlet_ portlet-static portlet-static-end portlet-borderless "
    id="p_p_id_postIdLoginPortlet_WAR_portalportlet_"
  >
    <span id="p_postIdLoginPortlet_WAR_portalportlet"></span>
    <div class="portlet-borderless-container" style="">
      <div class="portlet-body">
        <!--<a href="https://passport.pochta.ru/oauth2/authorize?response_type=code&scope=openid+email&partyType=PHYSICAL&registration=false&client_id=h9ING4sB_FjPBzNgtuUCeWrSQA8a&redirect_uri=https%3A%2F%2Fwww.pochta.ru%2Fc%2Flogin%2Fpost_id_callback&group=portal&lang=ru" class="btn-login"><liferay-ui:message key="postid.login.enter"/></a> -->
        <script>
          $(function() {
            React.render(
              React.createElement(Header, {
                authorized: JSON.parse("false"),
                postIdLoginUrl:
                  "https://passport.pochta.ru/oauth2/authorize?response_type=code&scope=openid+email&partyType=PHYSICAL&registration=false&client_id=h9ING4sB_FjPBzNgtuUCeWrSQA8a&redirect_uri=https%3A%2F%2Fwww.pochta.ru%2Fc%2Flogin%2Fpost_id_callback&group=portal&lang=ru",
                userName: "",
                postIdUserAccountUrl:
                  "http://passport.pochta.ru/pochtaid-sso/ext/v2.0/form/profile.get?access_token=&lang=ru",
                postIdLogoutUrl:
                  "https://passport.pochta.ru/pochtaid-sso/logout.jsp?redirect_uri=https%3A%2F%2Fwww.pochta.ru%2Fc%2Fportal%2Flogout&lang=ru",
                getTrackItemsUpdatedCountUrl:
                  "https://www.pochta.ru:443/mission-and-strategy?p_p_auth=REAzsyhB&p_p_id=trackingPortlet_WAR_portalportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=getUpdatedCount&p_p_cacheability=cacheLevelPage",
                getPostIdUserAccountUrl:
                  "https://www.pochta.ru:443/mission-and-strategy?p_p_auth=d7HU5lX1&p_p_id=commonPortletV2_WAR_portalportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=postId.get-user-account-url&p_p_cacheability=cacheLevelPage",
                refreshTokenUrl:
                  "https://www.pochta.ru:443/mission-and-strategy?p_p_id=postIdLoginPortlet_WAR_portalportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=session.refresh-token&p_p_cacheability=cacheLevelPage",
              }),
              $(".header-container-custom")[0]
            )
          })
        </script>
        <div class="header-container-custom">
          <div data-reactid=".0">
            <div class="header" data-reactid=".0.0">
              <a class="header__logo" href="/" data-reactid=".0.0.0"></a>
              <div class="header__menu" data-reactid=".0.0.1">
                <span class="balloon-toggle-button " data-reactid=".0.0.1.0"
                  ><a class="header__btn-business" data-reactid=".0.0.1.0.0"
                    >Для бизнеса</a
                  ><span data-reactid=".0.0.1.0.1"></span></span
                ><i class="icon-help-circle" data-reactid=".0.0.1.1"></i
                ><a
                  href="/support"
                  class="header__btn-help"
                  data-reactid=".0.0.1.2"
                  >Помощь</a
                ><a
                  href="https://passport.pochta.ru/oauth2/authorize?response_type=code&amp;scope=openid+email&amp;partyType=PHYSICAL&amp;registration=false&amp;client_id=h9ING4sB_FjPBzNgtuUCeWrSQA8a&amp;redirect_uri=https%3A%2F%2Fwww.pochta.ru%2Fc%2Flogin%2Fpost_id_callback&amp;group=portal&amp;lang=ru"
                  class="header__btn-login"
                  data-reactid=".0.0.1.5"
                  >Войти</a
                >
              </div>
              <div class="header__mobile-menu-btn" data-reactid=".0.0.2">
                <div
                  class="header__mobile-menu-btn-icon"
                  data-reactid=".0.0.2.1"
                ></div>
              </div>
            </div>
            <div class="mobile-menu-wrapper" data-reactid=".0.1">
              <div class="mobile-menu" data-reactid=".0.1.0">
                <div class="mobile-menu__section" data-reactid=".0.1.0.1">
                  <a
                    href="https://passport.pochta.ru/oauth2/authorize?response_type=code&amp;scope=openid+email&amp;partyType=PHYSICAL&amp;registration=false&amp;client_id=h9ING4sB_FjPBzNgtuUCeWrSQA8a&amp;redirect_uri=https%3A%2F%2Fwww.pochta.ru%2Fc%2Flogin%2Fpost_id_callback&amp;group=portal&amp;lang=ru"
                    class="mobile-menu__section-button"
                    data-reactid=".0.1.0.1.0"
                    >Войти</a
                  >
                </div>
                <div class="mobile-menu__section" data-reactid=".0.1.0.2">
                  <a
                    href="/support"
                    class="mobile-menu__section-button"
                    data-reactid=".0.1.0.2.0"
                    >Помощь</a
                  >
                </div>
                <div
                  class="mobile-menu__section"
                  data-reactid=".0.1.0.3:$menu-item-0"
                >
                  <div
                    class="mobile-menu__section-title"
                    data-reactid=".0.1.0.3:$menu-item-0.0"
                  >
                    Услуги для вас
                  </div>
                  <div data-reactid=".0.1.0.3:$menu-item-0.1">
                    <a
                      href="https://www.pochta.ru/otslezivanie"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-0"
                      >Отслеживание</a
                    ><a
                      href="https://www.pochta.ru/pisma"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-1"
                      >Письма</a
                    ><a
                      href="https://www.pochta.ru/posylki-mobile"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-2"
                      >Посылки</a
                    ><a
                      href="https://www.pochta.ru/otkrytki1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-3"
                      >Открытки</a
                    ><a
                      href="https://www.pochta.ru/deneznye-perevody2"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-4"
                      >Денежные переводы</a
                    ><a
                      href="https://www.pochta.ru/otdelenia"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-5"
                      >Отделения</a
                    ><a
                      href="https://www.pochta.ru/kur-er"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-6"
                      >Курьер</a
                    ><a
                      href="https://www.pochta.ru/indeks"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-7"
                      >Индекс</a
                    ><a
                      href="https://www.pochta.ru/blanki-mobile"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-8"
                      >Бланки</a
                    ><a
                      href="https://zakaznoe.pochta.ru/"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-9"
                      >Электронные письма</a
                    ><a
                      href="https://podpiska.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-10"
                      >Подписка онлайн</a
                    ><a
                      href="https://market.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-11"
                      >ПочтаМаркет</a
                    ><a
                      href="https://telegramma.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-12"
                      >Телеграммы</a
                    ><a
                      href="https://www.pochtabank.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-13"
                      >Почта Банк</a
                    ><a
                      href="https://www.pochta.ru/claim"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-0.1.$sub-item-14"
                      >Электронные обращения</a
                    >
                  </div>
                </div>
                <div
                  class="mobile-menu__section"
                  data-reactid=".0.1.0.3:$menu-item-1"
                >
                  <div
                    class="mobile-menu__section-title"
                    data-reactid=".0.1.0.3:$menu-item-1.0"
                  >
                    Услуги доставки для бизнеса
                  </div>
                  <div data-reactid=".0.1.0.3:$menu-item-1.1">
                    <a
                      href="https://otpravka.pochta.ru/"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-0"
                      >Отправка посылок</a
                    ><a
                      href="https://www.pochta.ru/otpravka-i-polucenie-pisem-v-vasem-ofise1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-1"
                      >Отправка и получение писем в вашем офисе</a
                    ><a
                      href="https://zakaznoe.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-2"
                      >Получение писем от ГИБДД в электронном виде</a
                    ><a
                      href="https://www.pochta.ru/massovaa-otpravka-pisem-i-scetov1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-3"
                      >Массовая отправка писем и счетов</a
                    ><a
                      href="https://www.pochta.ru/abonementnyj-asik1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-4"
                      >Абонементный ящик</a
                    ><a
                      href="https://www.pochta.ru/fulfilment1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-5"
                      >Фулфилмент</a
                    ><a
                      href="https://www.pochta.ru/eksport-poctovyh-otpravlenij"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-1.1.$sub-item-6"
                      >Экспорт почтовых отправлений</a
                    >
                  </div>
                </div>
                <div
                  class="mobile-menu__section"
                  data-reactid=".0.1.0.3:$menu-item-2"
                >
                  <div
                    class="mobile-menu__section-title"
                    data-reactid=".0.1.0.3:$menu-item-2.0"
                  >
                    Рекламные услуги для бизнеса
                  </div>
                  <div data-reactid=".0.1.0.3:$menu-item-2.1">
                    <a
                      href="https://geo.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-2.1.$sub-item-0"
                      >Локальные рассылки</a
                    ><a
                      href="https://www.pochta.ru/targetirovannye-rassylki1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-2.1.$sub-item-1"
                      >Таргетированные рассылки</a
                    ><a
                      href="https://www.pochta.ru/reklama-v-otdeleniah1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-2.1.$sub-item-2"
                      >Реклама в отделениях</a
                    >
                  </div>
                </div>
                <div
                  class="mobile-menu__section"
                  data-reactid=".0.1.0.3:$menu-item-3"
                >
                  <div
                    class="mobile-menu__section-title"
                    data-reactid=".0.1.0.3:$menu-item-3.0"
                  >
                    Другие услуги для бизнеса
                  </div>
                  <div data-reactid=".0.1.0.3:$menu-item-3.1">
                    <a
                      href="https://www.pochta.ru/integracia-s-vasimi-prilozeniami-api-1"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-0"
                      >Интеграция с вашими приложениями (API)</a
                    ><a
                      href="https://izdatel.pochta.ru/"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-1"
                      >Подписное агентство</a
                    ><a
                      href="https://export.pochta.ru/"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-2"
                      >Упрощенный экспорт для юридических лиц</a
                    ><a
                      href="https://www.pochta.ru/arenda-pomesenij-dla-vasego-biznesa"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-3"
                      >Аренда помещений для вашего бизнеса</a
                    ><a
                      href="https://startup.pochta.ru/"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-4"
                      >Инновационный центр</a
                    ><a
                      href="https://edo.pochta.ru"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-3.1.$sub-item-5"
                      >Электронный документооборот</a
                    >
                  </div>
                </div>
                <div
                  class="mobile-menu__section"
                  data-reactid=".0.1.0.3:$menu-item-4"
                >
                  <div
                    class="mobile-menu__section-title"
                    data-reactid=".0.1.0.3:$menu-item-4.0"
                  >
                    Дополнительно
                  </div>
                  <div data-reactid=".0.1.0.3:$menu-item-4.1">
                    <a
                      href="https://www.pochta.ru/news"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-4.1.$sub-item-0"
                      >Пресс-центр</a
                    ><a
                      href="https://www.pochta.ru/about-company"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-4.1.$sub-item-1"
                      >О компании</a
                    ><a
                      href="https://www.pochta.ru/vacancy"
                      class="mobile-menu__section-button"
                      data-reactid=".0.1.0.3:$menu-item-4.1.$sub-item-2"
                      >Вакансии</a
                    >
                  </div>
                </div>
                <div class="mobile-menu__socials" data-reactid=".0.1.0.4">
                  <a
                    target="_blank"
                    href="http://vk.com/russianpost"
                    class="mobile-menu__socials-button mobile-menu__socials-button--vk"
                    data-reactid=".0.1.0.4.0"
                  ></a
                  ><a
                    target="_blank"
                    href="http://www.facebook.com/ruspost?filter=2"
                    class="mobile-menu__socials-button mobile-menu__socials-button--fb"
                    data-reactid=".0.1.0.4.1"
                  ></a
                  ><a
                    target="_blank"
                    href="https://www.instagram.com/ruspostofficial"
                    class="mobile-menu__socials-button mobile-menu__socials-button--inst"
                    data-reactid=".0.1.0.4.2"
                  ></a
                  ><a
                    target="_blank"
                    href="https://ok.ru/ruspostofficial"
                    class="mobile-menu__socials-button mobile-menu__socials-button--ok"
                    data-reactid=".0.1.0.4.3"
                  ></a
                  ><a
                    target="_blank"
                    href="https://twitter.com/ruspostofficial"
                    class="mobile-menu__socials-button mobile-menu__socials-button--twitter"
                    data-reactid=".0.1.0.4.4"
                  ></a>
                </div>
              </div>
            </div>
            <div class="header__business-menu-container" data-reactid=".0.2">
              <div class="header__business-menu" data-reactid=".0.2.0">
                <div
                  class="header__business-menu-column"
                  data-reactid=".0.2.0.$0"
                >
                  <div
                    class="header__business-menu-section"
                    data-reactid=".0.2.0.$0.$0"
                  >
                    <div
                      class="header__business-menu-section-title"
                      data-reactid=".0.2.0.$0.$0.0"
                    >
                      Услуги доставки
                    </div>
                    <div data-reactid=".0.2.0.$0.$0.1">
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$0"
                      >
                        <a
                          href="https://www.pochta.ru/business-parcels/dostavka-magazinam/"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$0.0"
                          >Доставка для интернет магазинов</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$0.$0.1.$0.1"
                        >
                          Специальные тарифы для интернет-магазинов и крупных
                          отправителей.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$1"
                      >
                        <a
                          href="https://www.pochta.ru/fulfillment"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$1.0"
                          >Фулфилмент</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$2"
                      >
                        <a
                          href="https://otpravka.pochta.ru"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$2.0"
                          >Отправка писем и посылок</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$0.$0.1.$2.1"
                        >
                          Упрощенная подготовка документов, ускоренный прием
                          отправлений в&nbsp;отделении, специальные тарифы для
                          интернет-магазинов и&nbsp;крупных отправителей.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$3"
                      >
                        <a
                          href="https://www.pochta.ru/support/corporate-services/box-service"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$3.0"
                          >Отправка и получение писем в&nbsp;вашем&nbsp;офисе</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$4"
                      >
                        <a
                          href="https://zakaznoe.pochta.ru"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$4.0"
                          >Получение писем от ГИБДД в электронном виде</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$5"
                      >
                        <a
                          href="https://www.pochta.ru/support/dostavka/massovaa-otpravka-pisem-i-scetov"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$5.0"
                          >Массовая отправка писем и&nbsp;счетов</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$6"
                      >
                        <a
                          href="https://www.pochta.ru/support/dostavka/arenda-abonementnogo-yaschika"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$6.0"
                          >Абонементный ящик</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$0.$0.1.$7"
                      >
                        <a
                          href="https://www.pochta.ru/export"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$0.$0.1.$7.0"
                          >Экспорт почтовых отправлений</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="header__business-menu-column"
                  data-reactid=".0.2.0.$1"
                >
                  <div
                    class="header__business-menu-section"
                    data-reactid=".0.2.0.$1.$0"
                  >
                    <div
                      class="header__business-menu-section-title"
                      data-reactid=".0.2.0.$1.$0.0"
                    >
                      Рекламные услуги
                    </div>
                    <div data-reactid=".0.2.0.$1.$0.1">
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$1.$0.1.$0"
                      >
                        <a
                          href="https://geo.pochta.ru"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$1.$0.1.$0.0"
                          >Локальные рассылки</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$1.$0.1.$0.1"
                        >
                          Ваша реклама в почтовых ящиках нужных вам домов.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$1.$0.1.$1"
                      >
                        <a
                          href="https://www.pochta.ru/support/reklama/direct-mail"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$1.$0.1.$1.0"
                          >Таргетированные рассылки</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$1.$0.1.$1.1"
                        >
                          Рассылки по всей России: выбирайте получателей по
                          полу, возрасту, интересам и&nbsp;месту жительства.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$1.$0.1.$2"
                      >
                        <a
                          href="https://www.pochta.ru/support/reklama/reklama-v-otdeleniyah"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$1.$0.1.$2.0"
                          >Реклама в отделениях</a
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="header__business-menu-section"
                    data-reactid=".0.2.0.$1.$1"
                  >
                    <div
                      class="header__business-menu-section-title"
                      data-reactid=".0.2.0.$1.$1.0"
                    >
                      Финансовые услуги
                    </div>
                    <div data-reactid=".0.2.0.$1.$1.1">
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$1.$1.1.$0"
                      >
                        <a
                          href="https://www.pochta.ru/support/finance/platezhi"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$1.$1.1.$0.0"
                          >Прием платежей от ваших клиентов</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$1.$1.1.$0.1"
                        >
                          Клиенты смогут оплатить счета за ваши услуги
                          в&nbsp;любом почтовом отделении.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$1.$1.1.$1"
                      >
                        <a
                          href="https://www.pochta.ru/support/finance/perevody"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$1.$1.1.$1.0"
                          >Денежные переводы</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="header__business-menu-column"
                  data-reactid=".0.2.0.$2"
                >
                  <div
                    class="header__business-menu-section"
                    data-reactid=".0.2.0.$2.$0"
                  >
                    <div
                      class="header__business-menu-section-title"
                      data-reactid=".0.2.0.$2.$0.0"
                    >
                      Другие услуги
                    </div>
                    <div data-reactid=".0.2.0.$2.$0.1">
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$0"
                      >
                        <a
                          href="https://www.pochta.ru/support/business/api"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$0.0"
                          >Интеграция с вашими приложениями&nbsp;(API)</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$2.$0.1.$0.1"
                        >
                          Встраивайте расчет стоимости и&nbsp;сроков,
                          отслеживание статуса доставки и&nbsp;другие сервисы
                          в&nbsp;ваши системы учета, сайты и&nbsp;приложения.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$1"
                      >
                        <a
                          href="https://izdatel.pochta.ru/"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$1.0"
                          >Подписное агентство</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$2"
                      >
                        <a
                          href="https://export.pochta.ru"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$2.0"
                          >Упрощенный экспорт для юридических лиц</a
                        >
                        <div
                          class="header__business-menu-section-item-description"
                          data-reactid=".0.2.0.$2.$0.1.$2.1"
                        >
                          Теперь можно отправить вещи&nbsp;за границу, используя
                          почтовые&nbsp;документы в качестве декларации&nbsp; на
                          товары.
                        </div>
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$3"
                      >
                        <a
                          href="https://www.pochta.ru/support/business/arenda?utm_source=pochta_ru&amp;utm_medium=business_menu&amp;utm_campaign=arenda"
                          target="_self"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$3.0"
                          >Аренда помещений для вашего бизнеса</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$4"
                      >
                        <a
                          href="https://startup.pochta.ru?utm_source=pochta_ru&amp;utm_medium=business_menu&amp;utm_campaign=startup"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$4.0"
                          >Инновационный центр</a
                        >
                      </div>
                      <div
                        class="header__business-menu-section-item"
                        data-reactid=".0.2.0.$2.$0.1.$5"
                      >
                        <a
                          href="https://edo.pochta.ru"
                          target="_blank"
                          class="header__business-menu-section-item-title"
                          data-reactid=".0.2.0.$2.$0.1.$5.0"
                          >Электронный документооборот</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)


export default HeaderTop;