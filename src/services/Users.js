const axios = require('axios');
const url = 'http://localhost:5050/api';



export async function getUsers () {
    console.log(localStorage.getItem('token'))
    try{
        // return await axios.get(url+"/getAllUsers")
        return await axios({
            url: `${url}/getAllUsers`,
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

export async function getUser (data) {
    try{
        // return await axios.get(url+"/getUser", {params: {id: data.id} })
        return await axios({
            url: `${url}/getAllUsers`,
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

export async function createUser (data) {
    try{
        return await axios({
            url: `${url}/createUser`,
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

export async function updateUsers (data) {
    try{
        return await axios({
            url: `${url}/updateUser`,
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

export async function deleteUser (data) {
    try{
        return await axios({
            url: `${url}/deleteUser`,
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