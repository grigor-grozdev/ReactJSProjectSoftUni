import { useEffect, useState } from 'react';
import likesAPI from '../api/likes-api'

export function useCreateLike() {
    const createHandler = (eventId, userId) => likesAPI.create(eventId, userId);

    return createHandler;
}

export function useGetAllLikes(eventId) {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await likesAPI.getAll(eventId);
                setLikes(result);
            } catch (error) {
                throw new Error(error.message);
            }

        })();
    }, [])

    return[likes, setLikes]
}