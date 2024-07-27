import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from "../details/Details.module.css";

import {put} from "../../api/requester"
import Comments from '../comments/Comments';


export default function Details() {
    const [event, setEvent] = useState({});
    const { eventId } = useParams();
    

    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3030/jsonstore/cyclingEvents/${eventId}`);
            const result = await response.json();

            setEvent(result);
        })();
    }, []);

    const likeHandler = async (e) => {
        e.preventDefault();
        
        const newLike = event.likes.push(event._id);
        
                
        setEvent(prevState => ({
            ...prevState,
            [event.likes]: newLike
        }));
        
        const response = await put(`http://localhost:3030/jsonstore/cyclingEvents/${event._id}`, event);
        const result = await response;
        
        }

    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-7 text-gray-900">Event Information</h3>
                
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <img className={styles.imageDetails} src={event.imageUrl} alt="Image race" />
                        </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                        <dd className="mt-1 text-2xl font-semibold leading-7 text-gray-900 sm:col-span-2 sm:mt-0 ">
                            {event.title}
                            <p className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                                <button
                                    className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900">
                                    <Link to={event.website} target="_blank">Official Website</Link>
                                </button>
                            </p>
                        </dd>

                    </div>

                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Location:</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{event.location}</dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Date:</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{event.date}</dd>
                    </div>

                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description:</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">{event.description}</dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Likes:</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            {event.likes && (event.likes.length == 0 ? 'No likes for this event yet' : `${event.likes.length} people like this event`)}
                        </dd>
                    </div>

                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Comments:</dt>
                        <dd className=" mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            <Comments />
                        </dd>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                            onClick={likeHandler}
                        >
                            Like
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"

                        >
                            Edit
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                        >
                            Delete
                        </button>
                    </div>

                </dl>
            </div>
        </div >
    )
}
