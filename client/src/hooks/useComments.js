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
            try {
                const result = await commentsAPI.getAll(eventId);

                setComments(result);
            } catch (error) {
                throw new Error(error.message);
            }
            
        })();
    }, [eventId])

    return[comments, setComments]
}