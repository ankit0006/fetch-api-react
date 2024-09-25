import React from 'react'
import './UserData.css'
function UsersData({user}) {
  return (
    <div>
        {
            user.map((currUser)=>{
                const{id,name,email}=currUser;
    
                return(
                    <tr key={id} className='dataCont'>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                )
            })
        }

    </div>
  )
}

export default UsersData
