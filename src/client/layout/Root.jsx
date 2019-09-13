import React, { Component } from "react"
import { renderRoutes } from "react-router-config"

class RootLayout extends Component {
  render() {
    return <div className="main">{renderRoutes(this.props.route.routes)}</div>
  }
}

export default RootLayout
