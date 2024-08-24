import *as request from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/comments`;

const create = async (eventId, text) => request.post(BASE_URL, {eventId, text});

const getAll = async (eventId) => {
    const params = new URLSearchParams({
        where: `eventId="${eventId}"`,
        load: `author=_ownerId:users`,
    })
    
    return request.get(`${BASE_URL}?${params.toString()}`);
}

const removeComments = async (comments, accessToken) => {
    const options = {
        method: 'DELETE',
        headers: {
            'X-Admin': accessToken
        }
    }
    comments.map(comment => {
        fetch(`${import.meta.env.VITE_API_URL}/data/comments/${comment._id}`, options)
     })
}

const commentsAPI = {
    getAll,
    create,
    removeComments
}

export default commentsAPI;