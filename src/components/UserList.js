import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

function UserList() {

    const [userList, setUserList] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log(res.date)
                setUserList(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='userList-container'>
            {userList.map((el) => <User el={el} key = {el.id}/>)}
        </div>
    )
}

export default UserList
