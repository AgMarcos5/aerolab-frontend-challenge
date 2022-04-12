import {createContext, useState, useEffect} from 'react'
import { toastSuccess } from '../components/Toast/Toast';
import {addPoints, getUser, redeem} from '../config/api';

export const context = createContext();

export default function UserContext ({children}) {
    const [user,setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        getUser().then( (data) => {
            setUser(data);
            setIsLoading(false);
        })
    },[])

    const handleAddPoints = (amount) => {
        if(!user)
            return;
            
        setIsLoading(true);
        addPoints(amount).then(res => {
            console.log(res);
            setUser({...user, points: user.points + amount});
            setIsLoading(false);
        })
        .catch(error => console.error('Error:', error))

    }

    const handleRedeem = async (product) => {
        if(!user)
            return;
            
        setIsLoading(true);
        redeem(product["_id"]).then(res => {
            console.log(res);
            setUser({...user, points: user.points - product.cost});
            toastSuccess(product.name);
            setIsLoading(false);
        })
        .catch(error => console.error('Error:aaaaa', error))
    }

    const state = {
        user,
        isLoading,
    }
    const actions = {
        addPoints: handleAddPoints,
        redeem: handleRedeem
    }

    return (
        <context.Provider value={{
            state,
            actions
        }}>
            {children}
        </context.Provider>
    )
}