import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

type AuthUserProps = {
    children: React.ReactNode
}

const AuthUser = ({ children }: AuthUserProps) => {
    const isAuth: string | null = localStorage.getItem('pokeAccessToken')
    if (!isAuth) {
        swal({
            title: "Warning",
            text: `Access Denied, Please Login!`,
            icon: "error",
        });
        return (
            <Navigate to="/login" replace />
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default AuthUser