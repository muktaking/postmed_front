import React from 'react'
import { useSelector } from 'react-redux'
import { roleToString } from '../../utils/canActivate'
import Details from './details'

export default function Profile({isProfile, size="100"}) {
    const user= useSelector(state => state.user)
    return (
        <>
          <div className={"d-flex flex-column align-items-center text-center mb-3" + (isProfile ? '' : " bottom-border")}>
            <img src={"/assets/image/boy.png"} alt="Admin" className="rounded-circle" width={size} />
            <div className={isProfile ? "mt-3" : "mt-3 text-white"}>
              <h4>{user.userName}</h4>
              <p className="mb-1">{roleToString(user.role)}</p>
              <p className="font-size-sm">{user.address}</p>
            </div>
          </div>

         {isProfile && <Details firstName={user.firstName} lastName={user.lastName} email={user.email} userFrom={user.userFrom} mobile={user.mobile} address={user.address}
          />}

         </> 
    )
}
