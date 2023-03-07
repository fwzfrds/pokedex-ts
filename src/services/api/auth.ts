import instance from '../axios/axios'

export const login = async (email: string, password: string): Promise<{}> => {
    const response = await instance({
        url: `https://api.escuelajs.co/api/v1/auth/login`,
        method: "POST",
        data: {
            email,
            password
        }
    })

    return response
}

export const userDetail = async (token: string): Promise<{}> => {
    const response = await instance({
        url: 'https://api.escuelajs.co/api/v1/auth/profile',
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    return response
}