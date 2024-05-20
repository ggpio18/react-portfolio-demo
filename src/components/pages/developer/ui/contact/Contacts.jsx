import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { StoreContext } from '../../../../../store/StoreContext'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import * as Yup from 'yup'
import { Formik, Form, useFormik } from 'formik'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { InputText } from '../../../../helpers/FormInputs'
import { setError, setMessage, setSuccess } from '../../../../../store/StoreAction'


const Contacts = () => {
    const {store, dispatch} = React.useContext(StoreContext)
  
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            "/v1/contact",
            "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["contact"] });
        if (data.success) {
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        } 
        },
    });

    const initVal  = {
        contact_fullname: "",
        contact_publicemail: "",
        contact_publicnumber: "",
   }

   const yupSchema = Yup.object({
     
    contact_fullname: Yup.string().required("Required"),
    contact_publicemail: Yup.string().required("Required"),
    contact_publicnumber: Yup.string().required("Required"),
 })
    
  return (
    <>
    <Header/>
    <div className="relative flex items-top justify-center h-[40rem] bg-white dark:bg-white sm:items-center sm:pt-0 md:mt-[10rem]" data-aos="fade-down">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-8 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-portprimary2 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                Acme Inc, Street, State,
                                Postal Code
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +44 1234567890
                            </div>
                        </div>

                        <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                piolo18aranza@gmail.com
                            </div>
                        </div>
                    </div>

                    <Formik
                         initialValues={initVal}
                         validationSchema={yupSchema}
                         onSubmit={async (values) => {
                             mutation.mutate(values),
                             resetform({values: ''});
                         }}
                    >
                        {(props) => {
                            return (
                    <Form className="p-6 flex flex-col justify-center">
                        <div className="flex flex-col">
                            <InputText
                                label="Contact fullname"
                                type="text"
                                name="contact_fullname"
                                placeholder="Full Name"
                            />
                            {/* <label htmlFor="name" className="hidden">Full Name</label>
                            <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-portprimary2 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/> */}
                        </div>

                        <div className="flex flex-col mt-2">
                        <InputText
                                label="Contact Email"
                                type="text"
                                name="contact_publicemail"
                                placeholder="Email"
                            />
                            {/* <label htmlFor="email" className="hidden">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-portprimary2 border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/> */}
                        </div>

                        <div className="flex flex-col mt-2">
                        <InputText
                                label="Contact Number"
                                type="number"
                                name="contact_publicnumber"
                                placeholder="Number"
                            />
                            {/* <label htmlFor="tel" className="hidden">Number</label>
                            <input type="tel" name="tel" id="tel" placeholder="Telephone Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-portprimary2 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"/> */}
                        </div>

                        <button className="md:w-32 mt-5 btnui" type='submit' >
                        {mutation.isPending ? <SpinnerButton/> : "Submit"}
                        </button>
                    </Form>)}}
                    </Formik>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts