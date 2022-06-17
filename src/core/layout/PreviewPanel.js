import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DisplayDiv = styled.button`
  display: ${props => props.display || 'flex'};
`

DisplayDiv.prototype = {
  display: PropTypes.string.isRequired
}

class PreviewPanel extends Component {
  render () {
    return (<DisplayDiv display={this.props.display}>
      {this.props.items.map((value, index) => <div key={`display-item-${index}`}>item</div>)}
    </DisplayDiv>)
  }
}

PreviewPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  display: PropTypes.string
}

PreviewPanel.defaultProps = {
  items: [],
  display: 'flex'
}

PreviewPanel.displayName = 'PreviewPanel'

export default PreviewPanel
