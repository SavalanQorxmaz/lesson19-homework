
import axios from "axios";


const GET = (url, header)=> {

    return new Promise((resolve, reject) => {
        axios.get(`${url}`,{header})
        .then((res) =>{
           
            resolve(res)
            return res
        })
        .then(res => console.log('ugurlu GET metodu, status: ', res.status))
        .catch(error => {
            reject(error)
        })
    })
}


const POST = (url, data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}`, data, {header})
        .then(res => {
            resolve(res)
            return res
        })
        .then(res=>
            console.log('ugurlu POST metodu, status: ',res.status))
        .catch(error => {
            reject(error)
        })
    })
}

const PUT = (url, data, header) => {
    return new Promise((resolve, reject) => {
        axios.post(`${url}`, data, {header})
        .then(res => {
            resolve(res)
        })
        .catch(error => {
            reject(error)
        })
    })
}

const DELETE = (url, header)=> {

    return new Promise((resolve, reject) => {
        axios.get(`${url}`,{header})
        .then((res) =>{
            resolve(res)
        })
        .catch(error => {
            reject(error)
        })
    })
}



export {GET, POST, PUT, DELETE, axios}