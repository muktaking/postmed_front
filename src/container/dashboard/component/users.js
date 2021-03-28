import moment from 'moment'
import React from 'react'
import { Image, Table } from 'react-bootstrap'
import { roleToString } from '../../../utils/canActivate'

export default function Users({users}) {
    return (
        <div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Avatar</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>User From</th>
                    </tr>
                </thead>
                <tbody>                    
                    {users.map((user, ind)=><tr key={ind}>
                        <td>{ind+1}</td>
                        <td className="" >
                            <Image height="35" width="35" src={"/assets/image/avatar/" + user.avatar + '.png'} roundedCircle />
                        </td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{roleToString(user.role)}</td>
                        <td>{moment(user.createdAt).format('YYYY-MM-DD')}</td>
                    </tr>)}
                   
                </tbody>
            </Table>
                        
        </div>
    )
}
