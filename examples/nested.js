/* eslint no-console:0 */

import React from 'react'
import ReactDOM from 'react-dom'
import Trigger from 'rc-trigger'
import 'rc-trigger/assets/index.less'

const builtinPlacements = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
}

const popupBorderStyle = {
  border: '1px solid red',
  padding: 10
}
class Test extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Trigger
            popupPlacement='left'
            popupTransitionName='slideup'
            action={['click']}
            builtinPlacements={builtinPlacements}
            popup={<div style={popupBorderStyle}>i am a click popup</div>}
          >
            <span href='#' style={{ margin: 20 }}>trigger</span>
          </Trigger>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <div style={{ margin: 200 }}>
    <Test />
  </div>
, document.getElementById('__react-content'))
