import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = async (eventId, text) => request.post(BASE_URL, {eventId, text});

const getAll = async (eventId) => {
    const params = new URLSearchParams({
        where: `eventId="${eventId}"`,
        load: `author=_ownerId:users`,
    })
    
    return request.get(`${BASE_URL}?${params.toString()}`);
}



const commentsAPI = {
    getAll,
    create
}

export default commentsAPI;