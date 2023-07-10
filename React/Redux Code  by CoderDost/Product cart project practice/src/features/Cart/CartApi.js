import axios from "axios";

export function getCartItem(){
    return axios.get(`http://localhost:8080/cart`)
}
export function postCartItem(item){
    return axios.post('http://localhost:8080/cart',item)
}
export function updateCartItem(id,item){
      return axios.patch(`http://localhost:8080/cart/${id}`,item)
}
export function deleteCartItem(id){
      return axios.delete(`http://localhost:8080/cart/${id}`)
}