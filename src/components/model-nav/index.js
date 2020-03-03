import React from "react"
import { Link } from "gatsby"
import "./model-nav.css"

class ModelNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    let action = this.state.isToggleOn ? " ↓ " : " ↑ "
    // Почему-то не работает параметр частичного совпадения текста ссылки  partiallyActive={true}
    // что бы отслеживать ссылки с хешами - по этому здесь я не использую to="/header-fluid/#person"
    // в компонент шапки стоит проверка на пустой хеш - который соотв. person
    return (
      <div className="modelNavigatorWrapper">
        <div
          className={"modelNavigator " + (this.state.isToggleOn ? "" : "none")}
        >
          <p>Прототип шапки v.1</p>
          <Link to="/header/" activeClassName="active" partiallyActive={true}>
            Фикс
          </Link>

          <Link
            to="/header-fluid/"
            activeClassName="active"
            partiallyActive={true}
          >
            Флюид
          </Link>

          <p>Прототип шапки v.2</p>
          <Link to="/header-2/" activeClassName="active">
            Фикс
          </Link>
          <Link to="/header-fluid-2/" activeClassName="active">
            Флюид
          </Link>

          <p>Прототип сетки</p>
          <Link to="/grid/" activeClassName="active">
            Респонсив
          </Link>
          <Link to="/grid-fluid/" activeClassName="active">
            Флюид
          </Link>

          <p>Другое</p>
          <Link to="/" activeClassName="active">
            Статья «История компании»
          </Link>
        </div>
        <div className="action" onClick={this.handleClick}>
          {action}
        </div>
      </div>
    )
  }
}

export { ModelNav }
