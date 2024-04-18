import axios from 'axios'

const url = "http://localhost:8080/"

export const LoginUsuario = async (login, endpoint) => {

    try { 
        const response = await axios.post(url + endpoint, login, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            LoginUsuario(login, endpoint)
        }
        if(response.data.token != null) {
            console.log(response.data)
        }
    } 
    catch (error) {
        console.log("Erro a fazer a requisição: " + error)
    }

}

