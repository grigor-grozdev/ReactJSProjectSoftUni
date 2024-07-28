import { useEffect, useState } from "react";
import eventsAPI from "../api/events-api.js"

export function useGetAllEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getAll();

            let events = Object.entries(result).map(e => e[1]);

            setLoading(false)
            setEvents(events);
        })();
    }, []);

    return [events, loading]
};

export function useGetOneEvent(eventId) {
    const [event, setEvent] = useState({});

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
}