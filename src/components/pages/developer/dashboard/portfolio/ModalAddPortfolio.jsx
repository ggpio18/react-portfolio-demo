import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'

const ModalAddPortfolio = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/portfolio/${itemEdit.portfolio_aid}` :`/v1/portfolio`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["portfolio"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } 
        else {
            dispatch(setError(true))
            dispatch(setMessage(data.error));
        }
        },
    });

    const initVal ={
        portfolio_title: itemEdit ? itemEdit.portfolio_title : "",
        portfolio_category: itemEdit ? itemEdit.portfolio_category : "",
        portfolio_image: itemEdit ? itemEdit.portfolio_image : "",
        portfolio_description: itemEdit ? itemEdit.portfolio_description : "",
        portfolio_publish_date: itemEdit ? itemEdit.portfolio_publish_date : "",
    }

    const yupSchema = Yup.object({
        portfolio_title: Yup.string().required("Required g"),
        portfolio_category: Yup.string().required("Required g"),
        portfolio_image: Yup.string().required("Required g"),
        portfolio_description: Yup.string().required("Required g"),
        portfolio_publish_date: Yup.string().required("Required g"),
    })

  return (
    <div>
      <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Student</h2>
                    <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values) => {
                            mutation.mutate(values)
                        }}
                    >
                        {(props) => {
                            return (
                            <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                        <div className="input-wrap">
                            <InputText
                                label="Title"
                                type="text"
                                name="portfolio_title"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Category"
                                type="text"
                                name="portfolio_category"
                            />
                        </div>
          
                        <div className="input-wrap">
                        <InputText
                                label="Image"
                                type="text"
                                name="portfolio_image"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputTextArea
                                label="Description"
                                type="text"
                                name="portfolio_description"
                                className='h-[15rem] resize-none'
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Published Date"
                                type="text"
                                name="portfolio_publish_date"
                            />
                        </div>

                        </div>

                        <div className='form-action'>
                            <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                            <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                        </div>
                    </Form>)}}
                    
                    </Formik>
                </div>
        </div>
    </ModalWrapper>
    </div>
  )
}

export default ModalAddPortfolio
