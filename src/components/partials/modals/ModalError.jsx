import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { BiErrorCircle } from "react-icons/bi";
import { StoreContext } from '../../../store/StoreContext';
import { setError } from '../../../store/StoreAction';


const ModalError = ({position}) => {
  const {store, dispatch} = React.useContext(StoreContext)

  const handleClose = () => dispatch(setError(false))
  return (
    <ModalWrapper position={position}>
        <div className="modal-main max-w-[400px] w-full">
            <div className="modal-header bg-alert text-white flex justify-between items-center py-3 rounded-t-md ">
                <h4 className='mb-0 text-white'>Alert</h4>
                <button onClick={handleClose}><LiaTimesSolid/></button>
            </div>
            <div className="modal-body p-4 rounded-b-md text-center bg-secondary">
                <BiErrorCircle className='text-4xl mx-auto text-alert mb-3'/>
                <h2 className='mb-2'>Server Error</h2>
                <p className='mb-5'>{store.message}</p>
                <button className='btn btn--alert btn-form w-full' onClick={handleClose}>Okay</button>
            </div>
        </div>
    </ModalWrapper>
  )
}

export default ModalError
