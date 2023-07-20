import React from 'react';
import './UserList.css';
import UserItem from './UserItem';
const UserList = (props) => {
    console.log(props.item)
    if (props.item.length === 0) {
        return <h2 className='center'>
            No User Found</h2>
    }
    return (<ul>
        {props.item.map((user) => {
                console.log(user);
                <UserItem
                key={user.id} 
                id={user.id}
                name={user.name} 
                image={user.image}
                placeCount={user.places}
                />
            })
        }
    </ul>)

}

export default UserList;
