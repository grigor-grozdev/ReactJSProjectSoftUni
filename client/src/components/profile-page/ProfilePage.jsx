import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetUserCommentedEvents, useGetUserEvents, useGetUserLikedEvents } from "../../hooks/useEvents";

export default function ProfilePage() {

    const { username, email, userId, createdOn } = useAuthContext();

    const [userEvents, loading] = useGetUserEvents(userId);

    const [commentedEvents, loadingCommented] = useGetUserCommentedEvents(userId);

    const [likedEvents, loadingLiked] = useGetUserLikedEvents(userId)

    return (

        <div className="container mx-auto my-10">
            <div>
                <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                    <div className="flex justify-center">
                        <img src="/bike.jpg" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>

                    <div className="mt-12 pb-8">
                        <h1 className="font-bold text-center text-3xl text-gray-900">Username: {username}</h1>
                        <p className="text-center text-sm text-gray-700 font-medium">email: {email}</p>
                    </div>
                </div>

            </div>
            <div className="flex justify-between  my-5 px-6">

                <div className="bg-white relative shadow rounded-lg pt-2 mt-4 ml-2 w-full flex flex-col items-center overflow-hidden text-sm">
                    <h2 className="pb pt-2 font-bold text-center text-2xl text-gray-900">POSTED EVENTS</h2>
                    <div className="bg-white relative shadow rounded-lg mt-2 ml-2 w-full flex flex-col items-center overflow-hidden text-sm overflow-y-scroll h-[180px]">

                        {loading ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
                            :
                            (userEvents.length > 0 ?
                                userEvents.map(event =>
                                    <Link to={`/events/${event._id}`} key={event._id} className="w-full border-t rounded-lg border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="bike.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        <span className="text-gray-800 text-xs">{event.title}</span>
                                    </Link>
                                )
                                : <h3 className="text-1xl mt-10 font-bold tracking-tight text-gray-700">NO POSTED EVENTS YET</h3>)
                        }
                    </div>
                </div>
                
                <div className="bg-white relative shadow rounded-lg pt-2 mt-4 ml-2 w-full flex flex-col items-center overflow-hidden text-sm">
                    <h2 className="pb pt-2 font-bold text-center text-2xl text-gray-900">COMMENTED EVENTS</h2>
                    <div className="bg-white relative shadow rounded-lg mt-2 ml-2 w-full flex flex-col items-center overflow-hidden text-sm overflow-y-scroll h-[180px]">

                        {loadingCommented ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
                            :
                            (commentedEvents.length > 0 ?
                                commentedEvents.map(event =>
                                    <Link to={`/events/${event.eventId._id}`} key={event.eventId._id} className="w-full border-t rounded-lg border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="bike.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        <span className="text-gray-800 text-xs">{event.eventId.title}</span>
                                        <span className="block text-gray-500 text-xs">comment: {event.text}</span>
                                    </Link>
                                )
                                : <h3 className="text-1xl mt-10 font-bold tracking-tight text-gray-700">NO COMMENTED EVENTS YET</h3>)
                        }
                    </div>
                </div>

                <div className="bg-white relative shadow rounded-lg pt-2 mt-4 ml-2 w-full flex flex-col items-center overflow-hidden text-sm">
                    <h2 className="pb pt-2 font-bold text-center text-2xl text-gray-900">LIKED EVENTS</h2>
                    <div className="bg-white relative shadow rounded-lg mt-2 ml-2 w-full flex flex-col items-center overflow-hidden text-sm overflow-y-scroll h-[180px]">

                        {loadingLiked ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
                            :
                            (likedEvents.length > 0 ?
                                likedEvents.map(event =>
                                    <Link to={`/events/${event.eventId._id}`} key={event.eventId._id} className="w-full border-t rounded-lg border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                        <img src="bike.jpg" alt="" className="rounded-full h-6 shadow-md inline-block mr-2" />
                                        <span className="text-gray-800 text-xs">{event.eventId.title}</span>
                                    </Link>
                                )
                                : <h3 className="text-1xl mt-10 font-bold tracking-tight text-gray-700">NO LIKED EVENTS YET</h3>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}