const axios = require('axios');
const url = 'http://localhost:5050/api';



export async function getProducts () {
    console.log(localStorage.getItem('token'))
    try{
        // return await axios.get(url+"/getAllProducts")
        return await axios({
            url: `${url}/getAllProducts`,
            method: 'GET',
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"

            },
        })
    }catch(e){
        console.log(e)
    }
}

export async function getProduct (data) {
    try{
        // return await axios.get(url+"/getProduct", {params: {id: data.id} })
        return await axios({
            url: `${url}/getAllProducts`,
            method: 'GET',
            data: data,
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
    }catch(e){
        console.log(e)
    }
}

export async function createProduct (data) {
    try{
        return await axios({
            url: `${url}/createProduct`,
            method: 'POST',
            data: data, 
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
    }catch(e){
        console.log(e)
    }
}

export async function updateProducts (data) {
    try{
        return await axios({
            url: `${url}/updateProduct`,
            method: 'PUT',
            data: data, 
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
    }catch(e){
        console.log(e)
    }
}

export async function deleteProduct (data) {
    try{
        return await axios({
            url: `${url}/deleteProduct`,
            method: 'DELETE',
            data: data, 
            headers: {
                "Accept": "*/*",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json"
            }
        })
    }catch(e){
        console.log(e)
    }
}