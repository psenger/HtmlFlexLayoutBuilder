import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  border: 3px solid #ffcc80;
  border-radius: 5px;
  padding: 8px;
  transition: all .1s ease-in;
  display: block;
  &.selected {
    background: var(--color4);
  }
`
class Item extends Component {
  render () {
    return (<Div>Item {this.props.name}</Div>)
  }
}
Item.displayName = 'Item'
Item.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
export default Item
