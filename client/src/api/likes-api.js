import *as request from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/likes`;

const create = async (eventId, userId) => request.post(BASE_URL, {eventId, userId});

const getAll = async (eventId) => {
    const params = new URLSearchParams({
        where: `eventId="${eventId}"`
    })
    
    return request.get(`${BASE_URL}?${params.toString()}`);
}

const getOneLike = async (eventId, userId) => {
    
    return request.get(`${BASE_URL}?where=eventId%3D%22${eventId}%22%20AND%20userId%3D%22${userId}%22`);
}

const removeLikes = async (likes, accessToken) => {
    const options = {
        method: 'DELETE',
        headers: {
            'X-Admin': accessToken
        }
    }
    likes.map(like => {
        fetch(`${import.meta.env.VITE_API_URL}/data/likes/${like._id}`, options)
     })
}

const likesAPI = {
    getAll,
    getOneLike,
    create,
    removeLikes
}

export default likesAPI;