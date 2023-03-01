import instance from '../axios/axios'

export const index = async (offset: number, limit: number): Promise<{}> => {
    const response = await instance({
        url: `/pokemon?offset=${offset}&limit=${limit}`,
        method: "GET"
    })

    return response
}

export const detail = async (url: string): Promise<{}> => {
    const response = await instance({
        url: url,
        method: "GET"
    })

    return response
}
