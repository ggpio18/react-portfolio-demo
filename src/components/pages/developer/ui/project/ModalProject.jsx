import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd, setIsShow } from '../../../../../store/StoreAction'
import { devBaseImgUrl } from '../../../../helpers/functions-general'

const ModalProject = ({position, info}) => {
    const {dispatch} = React.useContext(StoreContext)
    const handleCloseProject = () => dispatch(setIsShow(false));
  return (
    <>
      <ModalWrapper position={position}>
        <div className='bg-secondary p-8 max-w-[900px] w-full relative rounded-md'>
            <button className='absolute top-2 right-4'><LiaTimesSolid className='text-xl' onClick={handleCloseProject}/></button>
            <div className="grid grid-cols-2 gap-8">
                <img src={`${devBaseImgUrl}/${info.project_img}`} alt=""  className='w-full h-[400px] object-contain'/>

                <div className='content'>
                    <h3>{info.project_pl}</h3>
                    <small>{info.project_title}</small>
                    <p className='my-5'>{info.project_description}</p>
                </div>

            </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalProject
