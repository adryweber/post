//css={rowWrapper} css={row} css={metka}

const metka = css`
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 12px;
  font-family: Arial;
`

// Враппер ряда, что бы можно было делать ширину страницы ограниченной
const rowWrapper = css`
  display: flex;
  flex-directon: row;
  justify-content: center;
`

const mediaSwitch = css`
  @media (max-width: 1320px) {
    margin: 0 25px;
    --width: 1230px; /* 1280 - 50 */
    --col: 300px;
    --color: #ff9898;
    --gap: 10px;
  }

  @media (min-width: 1321px) and (max-width: 1440px) {
    margin: 0 30px;
    --width: 1260px; /* 1320 - 60 */
    --col: 300px;
    --color: #ffed4f;
    --gap: 20px;
  }

  @media (min-width: 1441px) and (max-width: 1600px) {
    margin: 0 35px;
    --width: 1370px; /* 1440 - 70 */
    --col: 320px;
    --color: #80af85;
    --gap: 30px;
  }

  @media (min-width: 1601px) and (max-width: 1920px) {
    margin: 0 35px;
    --width: 1530px; /* 1600 - 70 */
    --col: 360px;
    --color: #74a4eb;
    --gap: 30px;
  }

  @media (min-width: 1921px) {
    margin: 0 40px;
    --width: 1840px; /* 1920 - 80 */
    --col: 430px;
    --color: #e77ef0;
    --gap: 40px;
  }
`

// Ряд. В зависимости от ширины меняем цвет вложенных колонок
// (решил не прокидывать в компонент колонки, т.к. расчет цвета идет на css)
const row = css`
  position: relative;
  display: flex;
  flex-directon: row;
  min-width: 1230px;
  width: var(--width);

  ${mediaSwitch};

  & > div:not(:last-child) {
    margin-right: var(--gap);
  }

  & > div {
    ${this.props.isTrafaret && `background-color: var(--color);`}
  }
`
