import {createContext, useState, useEffect} from 'react'
import  {toastError, toastSuccess, toastPointsSuccess}  from '../components/Toast/Toast.js';
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
            setUser({...user, points: user.points + amount});
            toastPointsSuccess();
            setIsLoading(false);
        })
        .catch(() => {
            toastError();
            setIsLoading(false);
        });
    }

    const handleRedeem = async (product) => {
        if(!user)
            return;
            
        setIsLoading(true);
        redeem(product["_id"]).then(res => {
            setUser({...user, points: user.points - product.cost});
            toastSuccess(product.name);
            setIsLoading(false);
        })
        .catch(() => {
            toastError();
            setIsLoading(false);
        });
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