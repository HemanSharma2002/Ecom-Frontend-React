import axios from 'axios'

const baseUrl=axios.create({
    baseURL:"http://localhost:8080"
})

export function urlConstruction(token){
    baseUrl.interceptors.request.use((config=>{
        console.log(token)
        config.headers.Authorization=token
        return config
    }))
}

export function urlDistruction(token){
    const intercept=axios.interceptors.request.use((config)=>{

    })
    baseUrl.interceptors.request.eject(intercept)
}
export const getProductByCategory=(category)=>baseUrl.get(`/api/product/${category}`)
export const getProductByid=(id)=>baseUrl.get(`/api/products/id/${id}`)
export const createUserApi=(prop)=>baseUrl.post(`/createNewUser`,prop)
export const loginApi=(prop)=>baseUrl.post(`/login`)
export const addToCartApi=(prop)=>baseUrl.post(`/user/cart`,prop)
export const getCartApi=()=>baseUrl.get(`/user/cart`)
export const updateCartApi=(prop)=>baseUrl.get(`/user/cart`,prop)
export const deleteCartItemApi=(id)=>baseUrl.delete(`/user/cart/${id}`)
export const postUserAddressApi=(prop)=>baseUrl.post(`/user/address`,prop)
export const getUserAllAddress=()=>baseUrl.get(`/user/address`)
export const putCartSelectedAddress=(address)=>baseUrl.put(`/user/address`,address)
