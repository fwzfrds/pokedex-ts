import React from 'react'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'

type AuthUserProps = {
    children: React.ReactNode
}

const IsUserLogin = ({ children }: AuthUserProps) => {
    const isAuth: string | null = localStorage.getItem('pokeAccessToken')

    if (isAuth) {
        swal({
            title: "Good job!",
            text: `Anda Sudah Login!`,
            icon: "error",
        });
        return (
            <Navigate to={'/'} replace />
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
}

export default IsUserLogin