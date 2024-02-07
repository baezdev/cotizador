import axios from 'axios'

//const baseURL = 'https://ocr-ine.koalavsp.com:444'
const baseURL = 'https://api-nb.koalavsp.com:444'
const username = 'kl_globaltask'
const password = 't59_mSx.25'

export const performOcrRequest = async (jsonData) => {
    try {
        const basicAuth = 'Basic ' + btoa(username + ':' + password)
        const url = `${baseURL}/ocr/obtener_datos`

        const response = await axios.post(url, jsonData, {
            headers: {
                'Authorization': basicAuth,
                'Content-Type': 'application/json',
            },
        })

        return response.data
    } catch (error) {
        throw error
    }
}
