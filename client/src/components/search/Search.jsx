import { useState } from "react"
import { useGetSearchEvents } from "../../hooks/useEvents";
import EventList from "../event-list/EventList";


export default function Search() {

  const [search, setSearch] = useState('');

  const [events, loading] = useGetSearchEvents(search);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
  }




  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="space-y-3">
          <div className="sm:col-span-full">
            <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
              You can search by event title or location
            </label>
            <div className="mt-2">
              <input
                id="search"
                name="search"
                type="text"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={search}
                onChange={changeHandler}
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
          >
            Search
          </button>
        </div>

      </form>

      

            {loading ? <h3 className="text-2xl font-bold tracking-tight text-gray-700">Loading...</h3>
              :
              events.length > 0
                ?
                <>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-700">RESULTS FOR...{search}</h2>
                  <div className="bg-white py-8 sm:py-16">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className=" grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                  {events.map(event => <EventList key={event._id} {...event} />)}
                  </dl>
                  </div>
                  </div>
                </>

                : <h2 className="text-2xl font-bold tracking-tight text-gray-700">THERE ARE NO RESULTS FOR...{search}</h2>
            }

          
    </>
  )
}