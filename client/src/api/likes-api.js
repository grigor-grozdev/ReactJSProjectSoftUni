import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/likes';

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

const likesAPI = {
    getAll,
    getOneLike,
    create
}

export default likesAPI;