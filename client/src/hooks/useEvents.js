import { useEffect, useState } from "react";
import eventsAPI from "../api/events-api.js"

export function useGetAllEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getAll();

            //let events = Object.entries(result).map(e => e[1]);

            setLoading(false)
            setEvents(result);
        })();
    }, []);

    return [events, loading]
};

export function useGetUpcomingEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getUpcoming(currentDate);

            //let events = Object.entries(result).map(e => e[1]);

            setLoading(false)
            setEvents(result);
        })();
    }, []);

    return [events, loading]
};

export function useGetOneEvent(eventId) {
    const [event, setEvent] = useState({
        title: '',
        location: '',
        date: '',
        website: '',
        imageUrl: '',
        description: '',
    });

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getOne(eventId);
            setEvent(result);
        })();
    }, []);

    return [
        event,
        setEvent
    ]
};

export function useGetUserEvents(userId) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getUserEvents(userId);

            setLoading(false)
            setEvents(result);
        })();
    }, []);

    return [events, loading]
};

export function useGetUserCommentedEvents(userId) {
    const [events, setEvents] = useState([]);
    const [loadingCommented, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getUserCommentedEvents(userId);

            setLoading(false)
            setEvents(result);
        })();
    }, []);

    return [events, loadingCommented]
};

export function useCreateEvent() {
    const eventCreateHandler = (eventData) => eventsAPI.create(eventData);

    return eventCreateHandler;
};

export function useGetSearchEvents(search) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.searchAll(search);

            //let events = Object.entries(result).map(e => e[1]);

            setLoading(false)
            setEvents(result);
        })();
    }, [search]);

    return [events, loading]
};