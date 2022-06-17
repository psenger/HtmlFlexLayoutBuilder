import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FlexLayoutPanel extends Component {
  render () {
    return (<div>Flex Layout panel</div>)
  }
}
FlexLayoutPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
}
FlexLayoutPanel.defaultProps = {
  items: []
}
FlexLayoutPanel.displayName = 'FlexLayoutPanel'
export default FlexLayoutPanel
