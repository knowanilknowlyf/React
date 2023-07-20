
import React from 'react';
// import {useParams} from 'react-router-dom'
import UsersList from '../components/UsersList';

const User = () => {
    const USERS=[{
        id:'u1',
        name:'Anil',
        image:'https://images.pexels.com/photos/6481558/pexels-photo-6481558.jpeg?cs=srgb&dl=pexels-shivam-%E2%80%8E-6481558.jpg&fm=jpg',
        places:3
    },
    {
        id:'u2',
        name:'Nishu',
        image:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        places:4
    }
]

    return (
       <UsersList items ={USERS}/> 
    );
}

export default User;
