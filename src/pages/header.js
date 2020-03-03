import React from "react"
import { ModelNav } from "../components/model-nav"
import { Header } from "../components/header"
import { LayoutRow, Col } from "../components/grid"
// props.location.pathname
// props.location.hash
export default props => {
  return (
    <>
      <ModelNav />
      <Header path={props.location.pathname} section={props.location.hash} />
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
}
