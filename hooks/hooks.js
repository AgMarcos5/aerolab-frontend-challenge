import { context } from "../context/context"
import {useContext} from 'react'

export function usePoints(){
    const {
        state: {user, isLoading},
        actions: {addPoints}
    } = useContext(context);

    if(!isLoading)
    return [user.points,addPoints];
    else
    return [0,addPoints];
}

export function useUser(){
    const {
        state: {user, isLoading}
    } = useContext(context);

    return {user, isLoading}
}

export function useRedeem(){
    const {
        actions: {redeem}
    } = useContext(context);

    return redeem;
}