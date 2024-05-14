import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputFileUpload, InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import { devBaseImgUrl } from '../../../../helpers/functions-general'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'

const ModalAddProject = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext);
    const handleClose = () => dispatch(setIsAdd(false));
    //image
    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/project/${itemEdit.project_aid}` :`/v1/project`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["project"] });
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
        project_pl: itemEdit ? itemEdit.project_pl : "",
        project_title: itemEdit ? itemEdit.project_title : "",
        project_description: itemEdit ? itemEdit.project_description : "",
        project_img: itemEdit ? itemEdit.project_img : "",
    }

    const yupSchema = Yup.object({
        project_pl: Yup.string().required("Required g"),
        project_title: Yup.string().required("Required g"),
        project_description: Yup.string().required("Required g"),
    })

  return (
    <div>
      <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Project data</h2>
                    <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                         // image
                         onSubmit={async (values) => {
                            uploadPhoto()
                            mutation.mutate({...values, 
                                project_img:
                                (itemEdit && itemEdit.project_img === "") || photo
                                  ? photo === null
                                    ? itemEdit.project_img
                                    : photo.name
                                  : values.project_img,})
                          }}
                    >
                        {(props) => {
                            return (
                            <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                        <div className="input-wrap">
{/* drag and drop */}
{photo || (itemEdit && itemEdit.project_img !== "") ? (
<img
src={
photo
  ? URL.createObjectURL(photo) // preview
  : itemEdit.project_img // check db
  ? devBaseImgUrl + "/" + itemEdit.project_img
  : null
}
alt="Photo"
className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
/>
) : (
<span className="min-h-20 flex items-center justify-center">
<span className="text-accent mr-1">Drag & Drop</span>{" "}
photo here or{" "}
<span className="text-accent ml-1">Browse</span>
</span>
)}

{(photo !== null ||
(itemEdit && itemEdit.project_img !== "")) && (
<span className="min-h-10 flex items-center justify-center">
<span className="text-accent mr-1">Drag & Drop</span>{" "}
photo here or{" "}
<span className="text-accent ml-1">Browse</span>
</span>
)}

{/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
<InputFileUpload
label="Photo"
name="photo"
type="file"
id="myFile"
accept="image/*"
title="Upload photo"
onChange={(e) => handleChangePhoto(e)}
onDrop={(e) => handleChangePhoto(e)}
className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
/>



</div>
                        <div className="input-wrap">
                            <InputText
                                label="Programming language"
                                type="text"
                                name="project_pl"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Project title"
                                type="text"
                                name="project_title"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputTextArea
                                label="Description"
                                type="text"
                                name="project_description"
                                className='h-[15rem] resize-none'
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Image"
                                type="text"
                                name="project_img"
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

export default ModalAddProject
