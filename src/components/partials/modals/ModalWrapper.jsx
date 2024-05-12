import React from 'react'

const ModalWrapper = ({children, position="right"}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-screen flex ${position === "center" ? "justify-center" : "justify-end"} items-center z-30`}>
      <div className="backdrop absolute top-0 left-0 h-full w-full bg-primary/90 -z-[10]"></div>
      {children}
    </div>
  )
}

export default ModalWrapper
