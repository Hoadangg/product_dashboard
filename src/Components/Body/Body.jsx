import React from 'react'
import "./Body.css"
import Bottom from './BottomSection/Bottom'
import Top from './TopSection/Top'

const Body = () => {
  return (
    <div className="body">
        <Top/>
        <Bottom/>
    </div>

    )
}

export default Body