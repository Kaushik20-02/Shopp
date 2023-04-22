import React from 'react'

function Wrapper({children, className}) {
  return (
    <div className={`w-full px-5 md:px-10
    mx-auto gap-4 ${className || ""}`}>
      {children}
    </div>
  )
}

export default Wrapper
