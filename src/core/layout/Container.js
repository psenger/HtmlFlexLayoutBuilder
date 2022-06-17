import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  background-color: #bbdefb;
  height: 100%;
  padding: 15px;
  gap: 5px;
`

class Container extends Component {
  render () {
    return (<Div>{this.props.children}</Div>)
  }
}
Container.displayName = 'Container'
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Container
