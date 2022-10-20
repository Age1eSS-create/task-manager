import React from "react";
import {css} from '../../../helpers/css'
import s from './index.module.scss'
import { useAppState } from "../../../store/reduxStore";
import { UserState } from "../../../store/reducers/user";
import { LoginPage } from "../LoginPage";


export const Auth = () => {
    const {user} = useAppState(UserState)

    switch (user.role) {
        case 'reqular':
            return <div>AAA</div>
        case 'guest':
            return <LoginPage />
        default:
            return null
    }
}