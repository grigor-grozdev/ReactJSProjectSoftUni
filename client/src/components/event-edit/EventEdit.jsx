import { useNavigate, useParams } from 'react-router-dom'

import { useForm } from '../../hooks/useForm'
import { useGetOneEvent } from '../../hooks/useEvents'
import eventsAPI from '../../api/events-api';

export default function EventEdit() {
    const navigate = useNavigate();
    const {eventId} = useParams();
    const [event] = useGetOneEvent(eventId)
  
    const editHandler = async (values) => { 

        try {
        await eventsAPI.update(eventId, values);
  
        navigate(`/events/${eventId}`)
      } catch (err){
        //todo: set error state
        console.log(err.message)
      }
  
    }
  
    const {
      values,
      changeHandler,
      submitHandler
    } = useForm(event, editHandler)

return (
<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
    <form onSubmit={submitHandler}>
      <div className="space-y-3">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-base font-semibold leading-12 text-gray-900">Edit Event Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 pb-6">
            Edit information about cycling event.
          </p>
          
            <div className="sm:col-span-full py-1">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.title}
                  onChange={changeHandler}
                />
              </div>
            </div>        
            
            <div className="sm:col-span-full py-1">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.location}
                  onChange={changeHandler}
                />
              </div>
            </div>
                        
            <div className="sm:col-span-full py-1">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Date
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.date}
                  onChange={changeHandler}
                />
              </div>
            </div>
                        
            <div className="sm:col-span-full py-1">
              <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
                Official Website
              </label>
              <div className="mt-2">
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.website}
                  onChange={changeHandler}
                />
              </div>
            </div>
                        
            <div className="sm:col-span-full py-1">
              <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                Image URL
              </label>
              <div className="mt-2">
                <input
                  id="imageUrl"
                  name="imageUrl"
                  type="text"
                  autoComplete=""
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.imageUrl}
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="col-span-full py-1">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.description}
                  onChange={changeHandler}
                />
              </div>
              
              
            </div>
           
            </div>
            </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button 
        type="button" 
        className="text-sm font-semibold leading-6 text-gray-900"
        onClick={() => navigate(`/events/${eventId}`)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800">
          Save
        </button>
      </div>
    </form>
    </div>
);
}