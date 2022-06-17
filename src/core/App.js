import React, { useState } from 'react'
import styled from 'styled-components'

import ControlPanel from './layout/ControlPanel'
import PreviewPanel from './layout/PreviewPanel'
import FlexLayoutPanel from './layout/FlexLayoutPanel'

const ContainerDiv = styled.div`
  display: flex;
  align-items: stretch;
  & div {
    flex-grow:1;
  }
`

function App () {
  const [items, setItems] = useState([])
  const changeItem = (id, attr, value) => {
    const newItems = [...items]
    newItems[id][attr] = value
    setItems(newItems)
  }
  return (<>
    <ContainerDiv>
      <ControlPanel items={items}
                    increaseItems={() => setItems([...items, {
                      alignSelf: '',
                      order: '',
                      flexGrow: '',
                      flexShrink: '',
                      flexBasis: ''
                    }]) }
                    decreaseItems={() => setItems(items.slice(0, items.length - 1))}
                    changeItem={changeItem}/>
      <PreviewPanel items={items}/>
      <FlexLayoutPanel/>
    </ContainerDiv>
  </>)
}

export default App
