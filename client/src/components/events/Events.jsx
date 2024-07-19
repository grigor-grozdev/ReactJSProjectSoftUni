import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import *as eventsAPI from "../../api/events-api"

export default function AllEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getAll();

            let events = Object.entries(result).map(e => e[1]);

            setEvents(events)
        })();
    }, []);

    return (
        <>
            <h2 className="text-3xl font-bold tracking-tight text-gray-700">ALL EVENTS</h2>
            <div className="bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {events.map((event) => (
                            <div key={event._id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <img src={event.imageUrl} alt="Image race" />
                                <dt className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{event.title}</dt>
                                <dd className="text-base leading-7 text-gray-600">Location: {event.location}</dd>
                                <dd className="text-base leading-7 text-gray-600">Date: {event.date}</dd>

                                <Link to={`/events/${event._id}`}
                                    className="flex-none rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
                                >
                                    Details
                                </Link>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    )
}