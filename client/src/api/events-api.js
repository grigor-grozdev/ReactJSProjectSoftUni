import *as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/cyclingEvents';

const getAll = async () => request.get(BASE_URL);

const getOne = async (eventId) => request.get(`${BASE_URL}/${eventId}`)

const create = (eventData) => request.post(BASE_URL, eventData);

const eventsAPI = {
    getAll,
    getOne,
    create
}

export default eventsAPI;