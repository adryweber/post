import React, { Children } from "React"
import { css } from "@emotion/core"
import "./grid.css"

// ЦЕНТРИРОВАННЫЙ РЯД (с враппером)------------------------------------------------------------------------
// Как раз для построения страничной сетки - сетка занимает не всю ширину окна.
class LayoutRow extends React.Component {
  state = { maketParam: "" }

  // Считываем изменения параметров сетки, что бы вывести потом (вывзывается при изменении ширины)
  // Обновляем стейт (и соотв. обновляется вывод)
  updateMargins = () => {
    const row = document.querySelector("#row")
    const rowSt = window.getComputedStyle(row)

    const col = document.querySelector("#row > div")
    const colSt = window.getComputedStyle(col)

    this.setState({
      maketParam: `w:${parseInt(rowSt.width, 10) +
        parseInt(rowSt.marginRight, 10) * 2}    
        m:${parseInt(rowSt.marginLeft, 10)}     g:${parseInt(
        colSt.marginRight,
        10
      )}  c:${parseInt(colSt.width, 10)}`, //  //${isNaN(colSt.width) ? colSt.width : parseInt(colSt.width, 10)}
    })
  }

  componentDidMount() {
    if (this.props.isTrafaret) {
      this.updateMargins()
      window.addEventListener("resize", this.updateMargins)
    }
  }

  componentWillUnmount() {
    if (this.props.isTrafaret) {
      window.removeEventListener("resize", this.updateMargins)
    }
  }

  render() {
    const { isTrafaret = false, children, h, className } = this.props

    return (
      <div className={`gridRowWrapper ${className && className}`}>
        {this.props.isTrafaret && ( //  Вывод параметров сетки (при включенном isTrafaret
          <div className="gridInfo">{this.state.maketParam}</div>
        )}
        <div
          id="row"
          className={"gridRow" + (this.props.fluid ? " fluid" : "")}
        >
          {Children.map(children, (col, idx) => {
            if (col !== null) {
              return React.cloneElement(col, { isTrafaret, h })
            }
            return null
          })}
        </div>
      </div>
    )
  }
}
//
// ПРОСТОЙ РЯД (без враппера)------------------------------------------------------------------------
const Row = ({
  isTrafaret = false,
  gap = "20px", // геп между колонками
  ml = "20px", // отступ слева
  mr = "20px", // отступ справа
  w = "100%",
  children,
}) => {
  const row = css`
    display: flex;
    flex-directon: row;
    width: ${w};
    margin-left: ${ml};
    margin-right: ${mr};

    & > div:not(:last-child) {
      margin-right: ${gap};
    }
  `

  return (
    <div css={row}>
      {Children.map(children, (col, idx) => {
        if (col !== null) {
          return React.cloneElement(col, { isTrafaret })
        }
        return null
      })}
    </div>
  )
}

// КОЛОНКА ------------------------------------------------------------------------
const Col = ({ s, w, isTrafaret, h, children, className }) => {
  const col = css`
    flex-grow: ${s ? s : 0};
    flex-shrink: 0;
    flex-basis: ${w ? w : 0};
    height: ${h ? h : isTrafaret && !h ? `20px` : `auto`};
  `
  return (
    <div css={col}>
      <div
        className={`gridCol ${isTrafaret && "coloredBg"} ${className &&
          className}`}
      >
        {children}
      </div>
    </div>
  )
}

export { LayoutRow, Row, Col }
