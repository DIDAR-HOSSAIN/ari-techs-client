import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../../../Shared/ConfirmationModal/ConfirmationModal';

const AllUser = () => {
    const [deletingUser, setDeletingUser] = useState(null)
    
    const closeModal = ()=> {
        setDeletingUser(null);
    }

    const {data: users= [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await fetch('https://ari-techs-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id =>{
        fetch(`https://ari-techs-server.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make Admin successfully')
                refetch();
            }
        } )

    }

    const handleDeleteUser = user =>{
        fetch(`https://ari-techs-server.vercel.app/users/${user._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Deleted ${user.name} Successfully`)
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl'>All Users {users?.length}</h1>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
            <thead>
            <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>email</th>
                <th>Admin Action</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                
            {
                users?.map((user, i) => <tr key={user._id}>
                    <td>{i+1}</td>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    {
                    user?.role !== 'admin' ?
                    <td> <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary'>Make Admin</button></td>
                    :
                    <td><button className='btn btn-primary'>Admin</button></td>
                    }
                    <td><label onClick={()=>setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-700">Delete</label></td>
                </tr>)
            }
            
            </tbody>
        </table>
</div>

{
    deletingUser  && <ConfirmationModal
    title = {`Ary you sure want to delete`}
    message = {`If you delete ${deletingUser.name}.it cannot be undone`}
    successAction = {handleDeleteUser}
    successButtonName = "Delete"
    modalData = {deletingUser}
    closeModal = {closeModal}
    >
    </ConfirmationModal>
}
        </div>
    );
};

export default AllUser;