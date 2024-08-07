import { useEffect, useState } from "react";
import eventsAPI from "../api/events-api.js"

export function useGetAllEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const result = await eventsAPI.getAll();

                //let events = Object.entries(result).map(e => e[1]);
                setError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                setError(err.message)
                setLoading(false)

            }

        })();
    }, []);

    return [events, loading, error]
};

export function useGetUpcomingEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const currentDate = new Date().toISOString().split('T')[0];

    useEffect(() => {
        (async () => {
            
            try {
                const result = await eventsAPI.getUpcoming(currentDate);

                setError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                
                setError(err.message)
                setLoading(false)
            }
        })();
    }, []);

    return [events, loading, error]
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
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {                        
            try {
                const result = await eventsAPI.getOne(eventId);

                setError('')
                setEvent(result);
            } catch (err) {                
                setError(err.message)
            }
        })();

    }, [eventId]);

    return [
        event,
        setEvent,
        error
    ]
};

export function useGetUserEvents(userId) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [eventsError, setEventsError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const result = await eventsAPI.getUserEvents(userId);

                setEventsError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                setEventsError(err.message)
                setLoading(false)
            }
        })();
    }, []);

    return [events, loading, eventsError]
};

export function useGetUserCommentedEvents(userId) {
    const [events, setEvents] = useState([]);
    const [loadingCommented, setLoading] = useState(true);
    const [commentedError, setCommentedError] = useState('');

    useEffect(() => {
        (async () => {
            
            try {
                const result = await eventsAPI.getUserCommentedEvents(userId);

                setCommentedError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                setCommentedError(err.message)
                setLoading(false)
            }
        })();
    }, []);

    return [events, loadingCommented, commentedError]
};

export function useGetUserLikedEvents(userId) {
    const [events, setEvents] = useState([]);
    const [loadingLiked, setLoading] = useState(true);
    const [likedError, setLikedError] = useState('');

    useEffect(() => {
        (async () => {
            
            try {
                const result = await eventsAPI.getUserLikedEvents(userId);

                setLikedError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                setLikedError(err.message)
                setLoading(false)
            }
        })();
    }, []);

    return [events, loadingLiked, likedError]
};

export function useCreateEvent() {
    const eventCreateHandler = (eventData) => eventsAPI.create(eventData);

    return eventCreateHandler;
};

export function useGetSearchEvents(search) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const result = await eventsAPI.searchAll(search);

                setError('')
                setLoading(false)
                setEvents(result);
            } catch (err) {
                setError(err.message)
                setLoading(false)

            }
        })();
    }, [search]);

    return [events, loading, error]
};