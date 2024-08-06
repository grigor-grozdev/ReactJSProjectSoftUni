
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import styles from "../details/Details.module.css";

import { useAuthContext } from '../../contexts/AuthContext';
import { useGetOneEvent } from '../../hooks/useEvents';
import { useGetAllComments } from '../../hooks/useComments';
import { useCreateComment } from "../../hooks/useComments";
import { useGetAllLikes } from '../../hooks/useLikes';

import { useForm } from "../../hooks/useForm";

import eventsAPI from '../../api/events-api';
import likesAPI from '../../api/likes-api';

const initialValues = { comment: '' }

export default function Details() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, {error: eventError}] = useGetOneEvent(eventId);
    const [comments, setComments] = useGetAllComments(eventId);
    const createComment = useCreateComment();
    const [likes, setLikes] = useGetAllLikes(eventId);
    const [error, setError] = useState('');

    const [showConfirmation, setShowConfirmation] = useState(false);



    const { isAuthenticated, username, userId } = useAuthContext();

    const isOwner = userId == event._ownerId;
    let isLiked = likes.some(like => like._ownerId == userId)


    const {
        changeHandler,
        submitHandler,
        values
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(eventId, comment);

            setComments(oldComments => [...oldComments, { ...newComment, author: { username } }])

        } catch (err) {
            setError(err.message); 
        }
    })

    const eventDeleteHandler = () => {
        setShowConfirmation(true)
    }

    const handleConfirm = async (e) => {
        e.preventDefault();
        try {
            await eventsAPI.remove(eventId);
            console.log('Deleting...')
            setShowConfirmation(false)
            setError(''); 
            navigate('/');
        } catch (err) {
            setError(err.message); 
        }
    }

    const handleCancel = () => {
        setShowConfirmation(false)
    }

    const likeHandler = async (e) => {
        e.preventDefault();
        try {
            const like = await likesAPI.create(eventId, userId);
            isLiked = likes.some(like => like._ownerId == userId);
            setLikes(oldLikes => [...oldLikes, like])
            setError(''); 
        } catch (err) {
            setError(err.message); 
        }

    }

    return (
        <div>
            {(error || eventError)  && <p className="text-white border rounded-md bg-red-500 font-semibold px-3 py-1.5">{error}/{eventError}</p>}
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
                        <dd className="flex mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            {likes.length > 0
                                ? `${likes.length} people like this event`
                                : 'No likes for this event yet'
                            }
                            {isAuthenticated &&
                                ((!isOwner && !isLiked) &&
                                    (<button
                                        type="submit"
                                        className="rounded-md bg-gray-800 ml-5 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                                        onClick={likeHandler}
                                    >
                                        Like
                                    </button>))
                            }
                            {isLiked && <span className="flex ml-10 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">You liked this event.</span>}
                        </dd>
                    </div>

                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Comments:</dt>
                        <dd className=" mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">

                            <section className={styles.sectionComments}>
                                <div className={styles.scrollableDiv}>
                                    <ul className={styles.comments}>
                                        {comments.map(comment => (<li key={comment._id} className="block mb-1 pl-2 pr-2 rounded-lg border-2 border-grey-700 ">
                                            <div className="font-medium text-grey-800">{comment.author.username}:</div>
                                            <div className="text-grey-800">{comment.text}</div>
                                            <div className="text-xs text-gray-400">Posted on: {(new Date(comment._createdOn)).toISOString().split('T')[0]} </div>
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


                        {isOwner && (
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button
                                    type="submit"
                                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                                    onClick={() => navigate(`/events/${eventId}/edit`)}
                                >
                                    Edit
                                </button>

                                <button
                                    type="submit"
                                    className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                                    onClick={eventDeleteHandler}
                                >
                                    Delete
                                </button>
                            </div>)
                        }
                    </div>

                </dl>
            </div>
            {showConfirmation && (
            <div className={styles.modaloverlay}>
                <div className={styles.modal}>
                    <h2 className="flex">Confirm Delete</h2>
                    <p>Are you sure you want to delete this event?</p>
                    <button className={styles.modalButton} onClick={handleCancel}>Cancel</button>
                    <button className={styles.modalButton} onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
            )}
        </div >
    )
}
