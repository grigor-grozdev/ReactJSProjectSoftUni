import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/jsonstore/cyclingEvents';

export const getAll = async () => request.get(BASE_URL);

export const getOne = async (eventId) => request.get(`${BASE_URL}/${eventId}`)

const eventsAPI = {
    getAll,
    getOne
}

export default eventsAPI;