import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import { PiArchive } from "react-icons/pi";
import { setError, setIsActive, setMessage, setSuccess } from '../../../store/StoreAction';
import { StoreContext } from '../../../store/StoreContext';
import { queryData } from '../../helpers/queryData';
import ModalWrapper from './ModalWrapper';


const ModalConfirmedProject= ({position, endpoint, queryKey, isArchiving}) => {
  const {dispatch} = React.useContext(StoreContext)
  const handleClose = () => dispatch(setIsActive(false))

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["project"] });

      if (data.success) {
        dispatch(setIsActive(false))
        dispatch(setSuccess(true))
        dispatch(setMessage(`Record successfully ${isArchiving ? "Restored" : "Archive"}.`))
      } else {
        dispatch(setError(true))
        dispatch(setMessage(data.error))
      }
    
    },
  });

  const handleConfirmed = async () => {
    mutation.mutate({
      isActive: isArchiving,
    });
  };

  return (
    <ModalWrapper position={position}>
    <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-warning text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Modal Confirmed</h4>
            <button onClick={handleClose}><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md  bg-secondary">
            <div className='flex gap-4 items-center '>
                <PiArchive className='text-4xl text-warning mb-3'/>
                <div>
                    <h2 className='mb-2'>{isArchiving === 1 ? "Restore" : "Archive"} Record</h2>
                    <p className='mb-5'>Are you sure you want to {isArchiving === 1 ? "restore" : "archive"} this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn--warning btn-form w-1/4' onClick={handleConfirmed}>Confirm</button>
                <button className='btn btn--cancel btn-form w-1/4' onClick={handleClose}>Cancel</button>
              </div>
          </div>
        </div>
</ModalWrapper>
  )
}

export default ModalConfirmedProject
