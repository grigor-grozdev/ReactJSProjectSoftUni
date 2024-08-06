import { useGetUpcomingEvents } from "../../hooks/useEvents";

import EventList from "../event-list/EventList";

export default function UpcpmingEvents() {

  const [events, loading, error] = useGetUpcomingEvents();

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700">UPCOMING EVENTS</h2>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-3 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            
            {loading ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
              : (error ? <p className="text-white border rounded-md bg-red-500 font-semibold px-3 py-1.5">{error}</p>
                : (events.length > 0 ?
                  events.map(event => <EventList key={event._id} {...event} {...error} />)
                  : <h3 className="text-2xl font-bold tracking-tight text-gray-700">NO EVENTS YET</h3>)
              )}

          </dl>
        </div>
      </div>
    </>
  )
}