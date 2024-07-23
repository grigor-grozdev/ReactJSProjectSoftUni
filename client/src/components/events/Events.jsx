import { useEffect, useState } from "react"
import *as eventsAPI from "../../api/events-api"

import EventList from "../event-list/EventList";

export default function AllEvents() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const result = await eventsAPI.getAll();

            let events = Object.entries(result).map(e => e[1]);
            
            setLoading(false)
            setEvents(events)
        })();
    }, []);

    return (
        <>
            <h2 className="text-3xl font-bold tracking-tight text-gray-700">ALL EVENTS</h2>
            <div className="bg-white py-8 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className=" grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">

                        {loading ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
                        :
                        (events.length > 0 ?
                            events.map(event => <EventList key={event._id} {...event} />)
                            : <h3 className="text-2xl font-bold tracking-tight text-gray-700">NO EVENTS YET</h3>)
                        }

                    </dl>
                </div>
            </div>
        </>
    )
}