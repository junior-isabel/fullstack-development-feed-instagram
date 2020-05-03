import api from '../index'


export async function listPost() {
    let result
    try {
        result = await api.get('posts')
        return result.data
    } catch (error) {
        return result.response
    }
}

export async function create(data) {
    let result
    try {
        result = await api.post('posts', data)
        return result.data
    } catch (error) {
        return error.response
    }
}