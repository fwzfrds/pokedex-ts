import React from 'react'
import LoginForm from '../../module/loginForm/LoginForm'
import styles from './login.module.css'

const Login = () => {
    return (
        <div
            className={styles.loginPage}
        >
            <LoginForm />
        </div>
    )
}

export default Login