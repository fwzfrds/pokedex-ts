import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

type AuthUserProps = {
    children: React.ReactNode
}

const AuthUser = ({ children }: AuthUserProps) => {
    const isAuth = localStorage.getItem('PokeDexAuth')
    if (!isAuth) {
        swal({
            title: "Good job!",
            text: `Access Denied, Please Login!`,
            icon: "error",
        });
        return (
            <Navigate to="/login" replace />
        )
    }
    return children
}

export default AuthUser