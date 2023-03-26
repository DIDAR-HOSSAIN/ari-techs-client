import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../BackEnd/Auth/contexts/AuthProvider/AuthProvider';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageContacts = () => {
const [deletingContact, setDeletingContact] = useState(null)

const closeModal = () => {
    setDeletingContact(null);
}
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/contacts?email=${user?.email}`;

    const {data: contacts = [], refetch } = useQuery({
        queryKey: ['contacts', user?.email],
        queryFn: async()=>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteUser = contact =>{
        fetch(`http://localhost:5000/contacts/${contact._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Deleted ${contact.name} Successfully`)
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl'>Manage Client Request</h1>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
            <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>email</th>
                <th>Mobile</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>

            {
                contacts?.map((contact, i) => <tr key={contact._id}>
                    <td>{i+1}</td>
                    <td>{contact?.name}</td>
                    <td>{contact?.email}</td>
                    <td>{contact?.mobile}</td>
                    <td>{contact?.message}</td>
                    <td>
                        <Link to={`/dashboard/update/${contact._id}`}><button className='btn btn-sm bg-red-700'>Update</button></Link>
                    
                        <label onClick={()=>setDeletingContact(contact)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-700">Delete</label>
                    </td>
                </tr>)
            }
            
            </tbody>
        </table>
</div>

{
    deletingContact  && <ConfirmationModal
    title = {`Ary you sure want to delete`}
    message = {`If you delete ${deletingContact.name}.it cannot be undone`}
    successAction = {handleDeleteUser}
    successButtonName = "Delete"
    modalData = {deletingContact}
    closeModal = {closeModal}
    >
    </ConfirmationModal>
}
        </div>
    );
};

export default ManageContacts;