import React from 'react'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import NoData from '../../../../partials/NoData'
import TableLoader from '../../../../partials/TableLoader'
import ModalConfirmedContact from '../../../../partials/modalsContact/ModalConfirmedContact'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'

const ContactTable = ({isLoading, isFetching, contact, setItemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('');

   
    let counter = 1;

    const handleEdit = (item) => {
        dispatch(setIsAdd(true));
        setItemEdit(item);
    }

    // archive is here
    const handleActive = (item) => {
        dispatch(setIsActive(true));
        setId(item.contact_aid);
        setIsArchiving(0);
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.contact_aid);
        setIsArchiving(1);
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true));
        setId(item.contact_aid);
    }

  return (
    <>
          <div className="table-wrapper relative overflow-y-scroll h-[600px] bg-primary">
        {isFetching && <SpinnerFetching/>}
                    <table>
                        <thead className='sticky top-0 relative z-10 bg-primary'>
                            <tr>
                                <th className='w-[20px]'>#</th>
                                <th className='w-[80px]'>Contact Fullname</th>
                                <th className='w-[80px]'>Contact Email</th>
                                <th className='w-[80px]'>Contact Number</th>
                                <th className='w-[100px]'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {isLoading && ( 
                <tr>
                    <td colSpan={9}>
                        <TableLoader count="20" cols="4"/>
                    </td>
                </tr>)
                }

                {contact?.data.length === 0 && (
                    <tr>
                        <td colSpan={9}>
                            <NoData/>
                        </td>
                    </tr>
                )}
                    {contact?.data.map((item, key) => (
                        <tr key={key}>
                        <td>{counter++}</td>
                        <td>{item.contact_fullname}</td>
                        <td>{item.contact_publicemail}</td>
                        <td>{item.contact_publicnumber}</td>

                        
                        
                        <td className='table-action'>
                        <ul>
                            {item.contact_is_active ? (
                                <>
                                    <li><button className="tooltip" data-tooltip="Edit" onClick={()=>handleEdit(item)}><LiaEdit/></button></li>
                                    <li><button className="tooltip" data-tooltip="Archive" onClick={()=>handleActive(item)}><PiArchive /></button></li>
                                </>
                            ) : (
                                <>
                                <li><button className="tooltip" data-tooltip="Restore" onClick={()=>handleRestore(item)}><LiaHistorySolid/></button></li>
                                <li><button className="tooltip" data-tooltip="Delete" onClick={()=>handleDelete(item)} ><LiaTrashAltSolid/></button></li></>
                            )}
                        </ul>
                        </td>
                    </tr>
                    ))}
                        
                   

                        </tbody>
                    </table>
                </div>

                {store.isActive && <ModalConfirmedContact position="center"  queryKey="contact" endpoint={`/v1/contact/active/${id}`} isArchiving={isArchiving}/>}

                {store.isDelete && <ModalDeleteContact position="center"  queryKey="contact" endpoint={`/v1/contact/${id}`} />} 
    </>
  )
}

export default ContactTable
