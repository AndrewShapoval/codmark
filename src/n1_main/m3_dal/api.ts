import axios from "axios"

const instance = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/`,
})

const API_KEY = "gTJAO48YcpmrADUyo4opy4ES4g7iDBxx"

export const appAPI = {
    getImage(tag: string) {
        return instance.get(`random?api_key=${API_KEY}&tag=${tag}`)
    }
}