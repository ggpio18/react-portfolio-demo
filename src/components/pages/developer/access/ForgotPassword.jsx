import React from 'react'
import Logo from '../../../partials/svg/Logo'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import { StoreContext } from '../../../../store/StoreContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../helpers/queryData'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { InputText } from '../../../helpers/FormInputs'
import ModalError from '../../../partials/modals/ModalError'
import { setError, setMessage } from '../../../../store/StoreAction'
import SpinnerButton from '../../../partials/spinners/SpinnerButton'


const ForgotPassword = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [verifySuccess, setVerifySuccess] = React.useState(false);

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values) => queryData(`/v1/user/reset`, "post", values),
        onSuccess: (data) => {
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["user"] });
        // show error box
        if (!data.success) {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        } else {
            setVerifySuccess(true);
        }
        },
    });



    const initVal = { item :""};
    const yupSchema = Yup.object({
        item: Yup.string()
        .required("Required")
        .email('Invalid Email'),
    });


  return (
    <div className="h-screen w-full flex justify-center items-center bg-primary">
    <div className='max-w-[400px] w-full px-4 py-8 bg-secondary'>
        <Logo />
        {verifySuccess ? (
              <div className='text-center'>
              <FaCheckCircle className='text-accent block mx-auto my-5 text-4xl'/>    
              <h3>Reset Email Sent</h3>
              <p className='text-balance'>Please check your email to the reset password instruction</p>
  
          </div>

        ) : (
            <>
                <h2>Forgot Password</h2>
                <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                    mutation.mutate(values);
                    }}
                >
                    {(props) => {
                    return (
                        <Form className="w-full mt-5">
                            <div className="input-wrap mb-10">
                                <InputText 
                                    label="Registered Email"
                                    name="item"
                                    type="email"
                                />
                            </div>

                            <button className='btn btn--accent w-full p-4 justify-center' type="submit">{mutation.isPending ? <SpinnerButton/> : "Reset Password"}</button>
                            <button className='btn btn--cancel w-full p-4 justify-center mt-3'>Return</button>
                    </Form>
                    );
                    }}
                </Formik>
            </>
        )}
      
        
    </div>

    {store.error && <ModalError position="center"/>}
    </div>
    
  )
}

export default ForgotPassword