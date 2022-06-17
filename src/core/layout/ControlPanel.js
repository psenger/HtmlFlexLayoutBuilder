import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../componets/Button'

const InputGridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  background-color: var(--color5);
  margin: .5rem;
  padding: .5rem;
  border-radius: .5rem;
`
const HeaderDiv = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 4;
`
const AsDiv = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;
`
const ODiv = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 3;
  grid-column-end: 4;
`
const FGDiv = styled.div`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
`
const FSDiv = styled.div`
  grid-row-start: 3;
  grid-column-start: 2;
  grid-row-end: 4;
  grid-column-end: 3;
`
const FBDiv = styled.div`
  grid-row-start: 3;
  grid-column-start: 3;
  grid-row-end: 4;
  grid-column-end: 4;
`

const StyledDivA = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledDivB = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledDivC = styled.div`
  display: flex;
  flex-direction: column;
`
const StyledSpanA = styled.span`
  min-width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

class ControlPanel extends Component {
  render () {
    const {
      items,
      increaseItems,
      decreaseItems,
      changeItem
    } = this.props
    return (<>
      <StyledDivC>
        <StyledDivA>
          <span>Flex Items:</span>
          <StyledDivB>
            <Button onClick={decreaseItems}>-</Button>
            <StyledSpanA>{items.length}</StyledSpanA>
            <Button onClick={increaseItems}>+</Button>
          </StyledDivB>
        </StyledDivA>
        <div>
          {
            items.map((item, index) => {
              return <InputGridDiv key={index}>
                <HeaderDiv>{index + 1}</HeaderDiv>
                <AsDiv>
                  <input type={'text'}
                         value={item.alignSelf}
                         onChange={(e) => {
                           changeItem(index, 'alignSelf', e.target.value)
                         }}
                         placeholder={'Align self'}/>
                </AsDiv>
                <ODiv>
                  <input
                    type={'text'}
                    value={item.order}
                    onChange={(e) => {
                      changeItem(index, 'order', e.target.value)
                    }}
                    placeholder={'Order'}
                  />
                </ODiv>
                <FGDiv>
                  <input type={'text'}
                         value={item.flexGrow}
                         onChange={(e) => {
                           changeItem(index, 'flexGrow', e.target.value)
                         }}
                         placeholder={'Flex grow'}/>
                </FGDiv>
                <FSDiv>
                  <input type={'text'}
                         value={item.flexShrink}
                         onChange={(e) => {
                           changeItem(index, 'flexShrink', e.target.value)
                         }}
                         placeholder={'Flex Shrink'}/>
                </FSDiv>
                <FBDiv>
                  <input type={'text'}
                         value={item.flexBasis}
                         onChange={(e) => {
                           changeItem(index, 'flexBasis', e.target.value)
                         }}
                         placeholder={'Flex Basis'}/>
                </FBDiv>
              </InputGridDiv>
            })
          }
        </div>
      </StyledDivC>
    </>)
  }
}

ControlPanel.displayName = 'ControlPanel'

ControlPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      alignSelf: PropTypes.string,
      order: PropTypes.string,
      flexGrow: PropTypes.string,
      flexShrink: PropTypes.string,
      flexBasis: PropTypes.string
    })
  ),
  increaseItems: PropTypes.func,
  decreaseItems: PropTypes.func,
  changeItem: PropTypes.func
}
export default ControlPanel
