import { IPosts } from '../model/IPosts';
import { IUser } from '../model/IUser';
import axios, { AxiosResponse } from "axios";

    let axiosCreater = axios.create({
        baseURL: "https://dummyjson.com",
        headers: {'Content-Type': 'application/json'},
    })

    const userServices = (): Promise<AxiosResponse<{users: IUser[]} >> =>{
        return axiosCreater.get('/users')
}

    const postServices = (userId:number): Promise<AxiosResponse<{posts: IPosts[]} >> =>{
        return axiosCreater.get(`/posts/user/${userId}`)
    }

export {userServices, postServices};

