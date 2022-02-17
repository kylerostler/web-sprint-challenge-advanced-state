import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Wheel(props) {
  const { wheel_id } = props
  return (
    <div id="wrapper">
      <div id="wheel">
       {wheel_id===0?<div className="cog active" style={{ "--i": 0 }}>B</div>:<div className="cog"></div>}
       {wheel_id===1?<div className="cog active" style={{ "--i": 1 }}>B</div>:<div className="cog"></div>}
       {wheel_id===2?<div className="cog active" style={{ "--i": 2 }}>B</div>:<div className="cog"></div>}
       {wheel_id===3?<div className="cog active" style={{ "--i": 3 }}>B</div>:<div className="cog"></div>}
       {wheel_id===4?<div className="cog active" style={{ "--i": 4 }}>B</div>:<div className="cog"></div>}
       {wheel_id===5?<div className="cog active" style={{ "--i": 5 }}>B</div>:<div className="cog"></div>}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

export default connect(state => state, actionCreators)(Wheel)