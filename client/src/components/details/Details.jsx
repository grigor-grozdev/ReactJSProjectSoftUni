
import { useParams, Link } from 'react-router-dom'
import styles from "../details/Details.module.css";

import { useGetOneEvent } from '../../hooks/useEvents';
import { useGetAllComments } from '../../hooks/useComments';
import { useAuthContext } from '../../contexts/AuthContext';

import {useCreateComment} from "../../hooks/useComments";
import { useForm } from "../../hooks/useForm";

import { put } from "../../api/requester"

const initialValues = {comment: ''}

export default function Details() {
    const { eventId } = useParams();
    const [event, setEvent] = useGetOneEvent(eventId);
    const [comments, setComments] = useGetAllComments(eventId);
    const createComment = useCreateComment();
    const { isAuthenticated, username, userId } = useAuthContext();    
    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({comment}) => {
        try {
           const newComment = await createComment(eventId, comment);

           setComments(oldComments => [...oldComments, {...newComment, author:{username}}])
           
        } catch (err) {
            console.log(err.message)
        }
    })

    const isOwner = userId == event._ownerId;

   
    const likeHandler = async (e) => {
        e.preventDefault();

        const newLike = event.likes.push(event._id);


        setEvent(prevState => ({
            ...prevState,
            [event.likes]: newLike
        }));

        const response = await put(`http://localhost:3030/data/cyclingEvents/${event._id}`, event);
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

                            <section className={styles.sectionComments}>
                                <div className={styles.scrollableDiv}>
                                    <ul className="pt-0 flex mt-4">
                                        {comments.map(comment => (<li key={comment._id} className="pl-2 pr-2 rounded-lg border-2 border-grey-700 ">
                                            <div className="font-medium text-grey-800">{comment.author.username}:</div>
                                            {/*<div className="text-gray-600">Posted on: {(comment._createdOn)} </div>*/}
                                            <div className="mt-2 text-grey-800">{comment.text}</div>
                                        </li>))
                                        }
                                        {comments.length == 0 && <p>No comments.</p>}
                                    </ul>
                                </div>
                            </section>

                            {isAuthenticated && (
                               
                                <form className="mt-4" onSubmit={submitHandler}>
                    
                                    <div className="mb-4">
                                        <label htmlFor="comment" className="block text-grey-800 font-medium">Comment</label>
                                        <textarea 
                                        id="comment" 
                                        name="comment" 
                                        className="border-2 border-grey-600 p-2 w-full rounded" 
                                        required 
                                        onChange={changeHandler}
                                        value={values.comment}
                                        ></textarea>
                                    </div>
                    
                                    <button type="submit"
                                        className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800">
                                        Post Comment
                                    </button>
                                </form>
                            
                            )}
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

                        {isOwner && (
                        <>
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
                        </>)
                        }
                    </div>

                </dl>
            </div>
        </div >
    )
}
