import React from 'react';
import category1 from '../../../AriTechsResource/Category-image/it-project.jpg';
import category2 from '../../../AriTechsResource/Category-image/it-relocation service.jpg';
import category3 from '../../../AriTechsResource/Category-image/it-suport.jpg';
import category4 from '../../../AriTechsResource/Category-image/logo-design.jpg';
import category5 from '../../../AriTechsResource/Category-image/managed-it-services.jpg';
import category6 from '../../../AriTechsResource/Category-image/network-design.jpg';
import category7 from '../../../AriTechsResource/Category-image/software-design.jpg';
import category8 from '../../../AriTechsResource/Category-image/Web_Design.jpg';
import Service from './Service';

const Services = () => {
    const serviceData = [
           {
               id: 1,
               image: category1,
               title: 'IT project',
               description: 'Our IT project is a comprehensive solution for your business needs. We provide cutting-edge technology, expertly designed and implemented to optimize your operations and increase efficiency. Our team of experienced professionals will work closely with you to understand your requirements and deliver a customized solution that meets your unique needs. Whether its cloud computing, data management, or software development, we have the skills and expertise to help you succeed. With our project, you can expect seamless integration, increased productivity, and reduced costs.'
           }, {
               id: 2,
               image: category2,
               title: 'IT relocation services',
               description: 'AriTech provides professional IT relocation services for businesses looking to move their IT infrastructure to a new location. Our team of experts will handle every aspect of the relocation process, from planning and preparation to execution and post-move support. We understand the complexity and importance of IT infrastructure, and we take the necessary precautions to ensure that your data and equipment are moved safely and efficiently.'
           }, {
               id: 3,
               image: category3,
               title: 'IT Support.',
               description: 'We offer comprehensive IT Support services to help keep your technology running smoothly. Our experienced technicians are dedicated to providing you with prompt and efficient solutions for any technical issues you may encounter. From hardware and software support to network security and data backup, we have you covered. Trust us to help you stay connected and productive, no matter the challenge.'
           }, {
               id: 4,
               image: category4,
               title: 'Logo design',
               description: 'A logo design is a visual representation of your brand. It is the face of your company and the first thing people will see when they interact with your business. Your logo should reflect the values, mission, and personality of your company and be memorable and easily recognizable. Our team of designers will work closely with you to create a custom logo that accurately reflects your brand and sets you apart from the competition.'
           }, {
               id: 5,
               image: category5,
               title: 'Managed IT services',
               description: 'As a provider of Managed IT services, we offer a comprehensive solution for businesses looking to outsource their IT functions and responsibilities.'
           }, {
               id: 6,
               image: category6,
               title: 'Network Design & Implementation',
               description: 'We are a provider of Network Design & Implementation services, offering businesses a comprehensive solution for building and maintaining their network infrastructure. Our team of experts will work closely with you to design and implement a network that is tailored to your specific needs and requirements.'
           }, {
               id: 7,
               image: category7,
               title: 'Software design',
               description: 'Software design refers to the process of defining the architecture, components, modules, interfaces, and data for a software system to satisfy specified requirements. Our team specializes in creating customized software solutions that meet the unique needs of your business. Our software design process starts with understanding your requirements, followed by prototyping and iterative testing to ensure a high-quality and user-friendly product. Our goal is to deliver a reliable and efficient software solution that helps streamline your business processes and provides a competitive edge in todays market.'
           }, {
               id: 8,
               image: category8,
               title: 'Web Design.',
               description: 'As a provider of web designing services, we specialize in creating visually appealing and user-friendly websites that effectively represent our clients brand and message'
           }
    ]
    return (
        <div className=''>
            <div className="">
                <h1 className='text-center text-4xl text-white bg-black mt-4'>Our Services</h1> 
            </div>
           <div className="mt-4 gap-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {
                serviceData.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }

           </div>

        </div>
    );
};

export default Services;