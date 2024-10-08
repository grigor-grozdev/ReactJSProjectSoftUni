import *as request from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/cyclingEvents`;

const getAll = async () => request.get(BASE_URL);

const getUpcoming = async (currentDate) => request.get(`${BASE_URL}?where=date>%22${currentDate}%22&sortBy=date`);

const getUserEvents = async (userId) => request.get(`${BASE_URL}?where=_ownerId%3D%22${userId}%22`);

const getUserCommentedEvents = async (userId) => request.get(`${import.meta.env.VITE_API_URL}/data/comments?where=_ownerId%3D%22${userId}%22&load=eventId%3DeventId%3AcyclingEvents`);

const getUserLikedEvents = async (userId) => request.get(`${import.meta.env.VITE_API_URL}/data/likes?where=_ownerId%3D%22${userId}%22&load=eventId%3DeventId%3AcyclingEvents`);

const getOne = async (eventId) => request.get(`${BASE_URL}/${eventId}`)

const create = async (eventData) => request.post(BASE_URL, eventData);

const remove = async (eventId) => request.del(`${BASE_URL}/${eventId}`); 

const update = async (eventId, eventData) => request.put(`${BASE_URL}/${eventId}`, eventData);

const searchAll = async (search) => request.get(`${BASE_URL}?where=title%20LIKE%20%22${search}%22%20OR%20location%20LIKE%20%22${search}%22`)


const eventsAPI = {
    getAll,
    getUpcoming,
    getUserEvents,
    getUserCommentedEvents,
    getUserLikedEvents,
    getOne,
    create,
    remove,
    update,
    searchAll
}

export default eventsAPI;