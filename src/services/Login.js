import axios from "axios";
const url = 'http://localhost:5050/api';



// export async function getUser (data) {
//     try{
//         console.log(data.username)
//         return await axios.get(url+"/login",{body: {username: data.username, password: data.password} })
//     }catch(e){
//         console.log(e)
//     }
// }

export async function getUser (data) {
    try{
        console.log(data)
        return await axios({
            url: `${url}/login`,
            method: 'GET',
            headers:{
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            body: data
        })
    }catch(e){
        console.log(e)
    }
}