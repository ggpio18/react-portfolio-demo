import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import useQueryData from '../../../../custom-hook/useQueryData'
import Header from '../../../../partials/Header'
import Navigation from '../../../../partials/Navigation'
import Toast from '../../../../partials/Toast'
import ModalErrorContact from '../../../../partials/modalsContact/ModalErrorContact'
import ContactTable from './ContactTable'
import ModalAddContact from './ModalAddContact'

const Contact = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSeach] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');
    const [itemEdit, setItemEdit] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: contact,
      } = useQueryData(
        isSearch ? "/v1/contact/search" : "/v1/contact", // endpoint
        isSearch ? "post" : "get", // method
        "contact", // key
        {
            searchValue: keyword
        }
      );

      //addbtn
      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)
      }

  return (
    <>

      <section className='flex overflow-x-hidden bg-primary'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

        <div className='flex relative'>
            <div className={`main-wrapper transition-all px-4 py-3 max-h-[calc(100vh - 65px)] w-full `}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl mb-4'>Contact Database</h1>
                    {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                </div>
            

                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8 '>
                   <h1>Search</h1>

                    {/* <button className='btn btn--accent' onClick={handleAdd}>
                        <FiPlus/> New
                    </button> */}
                </div>
                    {/* table here */}
                    <ContactTable  isLoading={isLoading} contact={contact} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
             {/* database info */}
        </div>

        </main>

        {store.isAdd && <ModalAddContact itemEdit={itemEdit}/>}
        {store.success && <Toast/>}
        {store.error && <ModalErrorContact position="center"/>}
    </section>

    </>
  )
}

export default Contact
