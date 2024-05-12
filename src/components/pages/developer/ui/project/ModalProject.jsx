import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd, setIsShow } from '../../../../../store/StoreAction'

const ModalProject = ({position, info}) => {
    const {dispatch} = React.useContext(StoreContext)
    const handleCloseProject = () => dispatch(setIsShow(false));
  return (
    <>
      <ModalWrapper position={position}>
        <div className='bg-secondary p-8 max-w-[900px] w-full relative rounded-md'>
            <button className='absolute top-2 right-4'><LiaTimesSolid className='text-xl' onClick={handleCloseProject}/></button>
            <div className="grid grid-cols-2 gap-8">
                <img src="https://via.placeholder.com/400x400" alt=""  className='w-full h-[400px] object-cover'/>

                <div className='content'>
                    <h3>{info.portfolio_title}</h3>
                    <small>{info.portfolio_category}</small>
                    <p className='my-5'>{info.portfolio_description}</p>
                </div>

            </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalProject
