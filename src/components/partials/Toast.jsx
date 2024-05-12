import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { StoreContext } from '../../store/StoreContext'
import { setSuccess } from '../../store/StoreAction'

const Toast = ({setIsSuccess, message}) => {
  const {store, dispatch} = React.useContext(StoreContext)
  const handleClose = () => {
    setTimeout(()=>{
      dispatch(setSuccess(false))
    },1000)
  }

  handleClose()

  return (
    <div className='fixed top-3 left-1/2 -translate-x-1/2 p-1 px-3 bg-secondary rounded-md border border-green-500'>
        <div className='flex gap-2 items-center'>
          <FaCheckCircle className='text-green-500'/> 
          <p className='mb-0 text-xs'>{store.message}</p>
        </div>
    </div>
  )
}

export default Toast