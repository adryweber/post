import React from "react"
import { ModelNav } from "../components/model-nav"
import { LayoutRow, Col } from "../components/grid"

export default props => (
  <>
    <ModelNav />
    {/* <LayoutRow isTrafaret h="100vh">
      <Col s={1}></Col>
    </LayoutRow> */}
    <div className="web">
      <LayoutRow isTrafaret h="100vh">
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
      </LayoutRow>
    </div>
    <div className="mob">
      <LayoutRow isTrafaret h="100vh">
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
        <Col s={1}></Col>
      </LayoutRow>
    </div>
  </>
)

{
  /* <Col s={2}></Col>
<Col s={2}></Col>
<Col s={2}></Col>
<Col s={2}></Col>
<Col s={2}></Col>
<Col s={2}></Col> */
}

{
  /* 
  У колонок можно указывать ширину в пикселях напрямую!
    <Col w={"200px"}></Col>
    <Col w={"200px"}></Col>
*/
}
