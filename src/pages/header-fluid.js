import React from "react"
import { ModelNav } from "../components/model-nav"
import { Header } from "../components/header"
import { LayoutRow, Col } from "../components/grid"

export default props => (
  <>
    <ModelNav />
    <Header
      type="fluid"
      path={props.location.pathname}
      section={props.location.hash}
    />
    <div className="web">
      <LayoutRow isTrafaret h="80vh">
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
  </>
)
