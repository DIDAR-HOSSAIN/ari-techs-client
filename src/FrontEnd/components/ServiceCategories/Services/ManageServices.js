import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../../Shared/ConfirmationModal/ConfirmationModal';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [deletingService, setDeletingService] = useState(null)
    
    const closeModal = ()=> {
        setDeletingService(null);
    }

    const { data: services= [], refetch } = useQuery({
        queryKey:['services'],
        queryFn: async ()=>{
            try{
                const res = await fetch('https://ari-techs-server.vercel.app/services',{
                    headers:{
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });

    const handleDeleteUser = service => {
        fetch(`https://ari-techs-server.vercel.app/services/${service._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
                refetch();
        })
    }
    
    return (
        <div className="">
        <div>
            <h1>Manage services: {services?.length}</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead>
                <tr>
                    <th></th>
                    <th>Service Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                
                {
                    services?.map((service, i)=><tr key={service?._id}>
                    <th>{i+1}</th>
                    <td>{service?.title}</td>
                    <td><p className='truncate w-96 text-md'>{service?.description}</p></td>
                    <td>
                    <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={service?.image} alt="" />
                    </div>
                    </div>
                    </td>
                    <td>
                        <Link to={`/dashboard/updateService/${service._id}`}><button className='btn btn-sm bg-red-700'>Update</button></Link>

                        <label onClick={()=>setDeletingService(service)} htmlFor="confirmation-modal" className="btn btn-sm bg-red-700">Delete</label>
                    </td>
                </tr>)
                }
                
                </tbody>
            </table>
            </div>
        </div>
        {
        deletingService  && <ConfirmationModal
        title = {`Ary you sure want to delete`}
        message = {`If you delete ${deletingService.title}.it cannot be undone`}
        successAction = {handleDeleteUser}
        successButtonName = "Delete"
        modalData = {deletingService}
        closeModal = {closeModal}
        >
        </ConfirmationModal>
        }
        </div>
        
    );
};

export default ManageServices;