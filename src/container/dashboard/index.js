import React from 'react';
import { useSelector } from 'react-redux';
import { canActivate, rolePermitted } from '../../utils/canActivate';
import Admin from './admin';
import General from './dashboard';


export default function Dashboard() {
    const token = useSelector(state=> state.auth.token);
    return (
        <div>
            {canActivate(rolePermitted.mentor, token) 
                ? <Admin />
                : <General />
            }
            
        </div>
    )
}
