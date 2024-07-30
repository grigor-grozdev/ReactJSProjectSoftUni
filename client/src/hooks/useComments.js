import { useEffect, useState } from 'react';
import commentsAPI from '../api/comments-api'

export function useCreateComment() {
    const createHandler = (eventId, comment) => commentsAPI.create(eventId, comment);

    return createHandler;
}

export function useGetAllComments(eventId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(eventId);

            setComments(result);
        })();
    }, [eventId])

    return[comments, setComments]
}