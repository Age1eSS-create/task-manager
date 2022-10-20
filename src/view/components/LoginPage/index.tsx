import React from "react";
import {css} from '../../../helpers/css'
import s from './index.module.scss'

export const LoginPage = () => {
    return (
        <div className={css(s.LoginPage)}>
            <form>
                <input type="text" />
            </form>
            <div>AAAA</div>
        </div>
    )
}