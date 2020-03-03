import React from "react"
import { ModelNav } from "../components/model-nav"
import { LayoutRow, Col } from "../components/grid"

export default props => (
  <>
    <ModelNav />
    <div className="web">
      <LayoutRow isTrafaret h="100vh" fluid>
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
