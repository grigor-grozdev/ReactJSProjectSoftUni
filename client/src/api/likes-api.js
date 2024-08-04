import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/likes';

const create = (eventId, userId) => request.post(BASE_URL, {eventId, userId});

const getAll = (eventId) => {
    const params = new URLSearchParams({
        where: `eventId="${eventId}"`
    })
    console.log(params.toString())
    return request.get(`${BASE_URL}?${params.toString()}`);
}

const likesAPI = {
    getAll,
    create
}

export default likesAPI;