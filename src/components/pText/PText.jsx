import React from 'react'
import "./pText.css"

const PText = ({children}) => {
  return (
    <div className="para">
      <p>{children}</p>
    </div>
  )
}

export default PText