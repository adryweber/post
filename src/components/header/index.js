import React from "React"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import { LayoutRow, Col } from "../grid"
import dataPersonMenu from "./menu-person-data"
import dataBusinesnMenu from "./menu-businnes-data"
import { Ico } from "../ico"
import "./links.css"
import "./style.css"
import "./style-2.css"

const SecondLevMenu = ({ arr }) => {
  return (
    <div className="secondLevMenu">
      {arr.map((item, index) => (
        <span key={index} className="secondLevMenuItem">
          <a href="#" className="secondLevMenuLink">
            {item}
          </a>
        </span>
      ))}
    </div>
  )
}

const UserMenu = () => (
  <div className="userMenu">
    {[
      ["Отделения", "/points", "base/pin"],
      ["Помощь", "/hepl", "base/quest"],
      ["Войти", "/login", "base/user"],
    ].map((item, index) => (
      <span key={index} className="userMenuItem">
        <Ico size={16} baseSize={24} variant={item[2]} />
        <a href="#">{item[0]}</a>
      </span>
    ))}
  </div>
)

const SectionMenu = ({ path, currentSection }) => {
  return (
    <div className="sectionMenu">
      {[
        ["Частным лицам", "#person", 0],
        ["Бизнесу", "#business", 0],
      ].map((item, index) => (
        <span
          key={index}
          className={
            "sectionMenuItem" + (currentSection == item[1] ? " active" : "")
          }
        >
          {/* <a href={`http://localhost:8000${path}${item[1]}`}>{item[0]}</a> */}
          <Link to={`${path}${item[1]}`}>{item[0]}</Link>
        </span>
      ))}
    </div>
  )
}

// здесь ввести параметр - источник данных
// Зависит от внешней переменной с массивом пункто меню dataMenu
class MainMenu extends React.Component {
  componentDidMount() {
    const mainMenuItems = document.querySelectorAll(".mainMenuItem") // пункты главного меню
    const wrapperPanel = document.querySelector(".wrapperPanel") // место куда будем вписывать меню
    const panel = document.createElement("div")
    panel.className = "panel"

    // На каждый пункт меню назначаем обработчик события ховера
    mainMenuItems.forEach(item => {
      // Обработчик - ховер на пункте рисуем выпавшую панель с пунктами
      item.addEventListener("mouseover", () => {
        wrapperPanel.appendChild(panel)

        // Внутрь панели второго уровня каждый раз рендерим НОВЫЙ список
        ReactDOM.render(
          <SecondLevMenu arr={this.props.data[item.dataset.index][3]} />,
          document.querySelector(".panel")
        )

        // Удаляем ноду с панелью, если убран курсор с нее.
        panel.addEventListener("mouseout", e => {
          if (
            // вынужденная проверка что курсор внутри панели наезжает на внутренние элементы и как буд-то съезжает с панели
            e.relatedTarget.className !== "panel" && // без этого условия при перемещении курсора с панели на пункт - панель исчезала и появляалсь
            e.relatedTarget.className !== "secondLevMenu" &&
            e.relatedTarget.className !== "secondLevMenuItem" &&
            e.relatedTarget.className !== "secondLevMenuLink"
          ) {
            panel.remove()
            item.classList.remove("hover") // снимаем подсветку текущего (открытого панелью) пункта
          }
        })
      })

      item.addEventListener("mouseout", e => {
        // если убрали курсор с пункта
        if (e.relatedTarget.className !== "panel") {
          // если перевели вне панели - убиваем панель
          wrapperPanel.removeChild(panel)
        }
        if (e.relatedTarget.className === "panel") {
          // если перевели на панель - подсвечиваем пункт из которого панель
          item.classList.add("hover")
        }
      })
    })
  }

  render() {
    return (
      <div className="mainMenu">
        {this.props.data.map((item, index) => (
          <a
            href="#"
            key={index}
            className={
              "mainMenuItem" +
              (item[2] === 1 ? " active" : "") +
              (item[2] === 2 ? " tech" : "") // хак, что бы скрывать технический пункт
            }
            data-index={index}
          >
            {item[0]}
          </a>
        ))}
      </div>
    )
  }
}

// type - фиксированны / резиновый
// v - вариант компоновки шапки (1. Все меню справа от лого. 2. Полоска меню над логотипом)
// path - путь соответсвует v - варианту компоновки шапки (их два)
// section - какую секцию (частник, бизнес) нужно отрисовать

const Header = ({ type, v, path, section }) => {
  section = section === "" ? "#person" : section

  if (v == 2) {
    return (
      <>
        <LayoutRow fluid={type} className="headerWrapperTop v2">
          <Col s={1} className="topMenu">
            <SectionMenu path={path} currentSection={section} />
            <UserMenu />
          </Col>
        </LayoutRow>
        <LayoutRow fluid={type} className="headerWrapper v2">
          <Col s={1} className="menuWrapper">
            <img src="/logo.svg" id="logo" />
            <MainMenu
              data={section === "#business" ? dataBusinesnMenu : dataPersonMenu}
            />
          </Col>
        </LayoutRow>
        <LayoutRow className="headerWrapperPannel">
          <Col s={1} className="wrapperPanel" />
        </LayoutRow>
      </>
    )
  } else {
    return (
      <>
        <LayoutRow fluid={type} className="web headerWrapper">
          <Col s={1} className="header">
            <img src="/logo.svg" id="logo" />
            <div className="menuWrapper">
              <div className="topMenu">
                <SectionMenu path={path} currentSection={section} />
                <UserMenu />
              </div>
              <MainMenu
                data={
                  section === "#business" ? dataBusinesnMenu : dataPersonMenu
                }
              />
            </div>
          </Col>
        </LayoutRow>
        <LayoutRow className="headerWrapperPannel">
          <Col s={1} className="wrapperPanel"></Col>
        </LayoutRow>
      </>
    )
  }
}
export { Header }

// componentDidMount() {
//     const header = document.querySelector(".headerWrapper")
//     const mainMenu = document.querySelectorAll(".mainMenuItem")

//     mainMenu.forEach(item => {
//       const panel = document.createElement("div")
//       panel.className = "panelSubMenu"

//       item.addEventListener("mouseover", () => {
//         header.appendChild(panel)

//         // Внутрь созданной панели рендерим список
//         ReactDOM.render(
//           <SecondLevMenu arr={this.dataMenu[item.dataset.index][4]} />,
//           document.querySelector(".panelSubMenu")
//         )
//         // Если убираем курсор с панели
//         panel.addEventListener("mouseout", e => {
//           if (
//             e.relatedTarget.className !== "secondLevMenu" &&
//             e.relatedTarget.className !== "secondLevMenuItem" &&
//             e.relatedTarget.className !== "secondLevMenuLink"
//           ) {
//             panel.remove()
//           }
//         })
//       })

//       item.addEventListener("mouseout", e => {
//         if (e.relatedTarget.className !== "panelSubMenu") {
//           header.removeChild(panel)
//         }
//       })
//     })
//   }
