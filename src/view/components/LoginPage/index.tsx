import React, {useState} from "react";
import { css } from '../../../helpers/css'
import s from './index.module.scss'
import { useActions } from "../../../helpers/reduxHook";
import { UserActions } from "../../../store/reducers/user";

export const LoginPage = () => {
    const {setUserAction,setErrorAuthAction} = useActions(UserActions)
    const [login , setLogin] = useState<string>('')


    const onSubmit = (e:any) => {
        e.preventDefault()
        if (login.trim().length === 0) return
        setUserAction({login:login,role:'reqular'})
    }

    return (
        <div className={css(s.LoginPage)}>
            <div className={css(s.login)}>
                <h1>Вход</h1>
                <form className={css(s.form)} onSubmit={onSubmit}>
                    <input type="text" placeholder="Введите логин" value={login} onChange={e => setLogin(e.target.value)} />
                    <button>
                        Вход
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M19.845 13.28L12.27 18.965V27.38C12.27 28.82 14.01 29.54 15.03 28.52L22.8 20.75C24.045 19.505 24.045 17.48 22.8 16.235L19.845 13.28Z" fill="white" />
                            <path d="M12.27 9.62001V18.965L19.845 13.28L15.03 8.46501C14.01 7.46001 12.27 8.18001 12.27 9.62001Z" fill="white" />
                        </svg>
                    </button>
                </form>
            </div>
            <div className={css(s.image)}>
                <img src="./login.svg" alt="" />
            </div>
        </div>
    )
}