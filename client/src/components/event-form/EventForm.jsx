import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { useForm } from '../../hooks/useForm'
import { useCreateEvent } from '../../hooks/useEvents'

import styles from "../event-form/EventForm.module.css";


const initialValues = {
  title: '',
  location: '',
  date: '',
  website: '',
  imageUrl: '',
  description: '',
  likes: []
}

export default function EventForm() {
  const createEvent = useCreateEvent();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const focusHandler = (e) => {
    e.target.setAttribute('focused', 'true')
  };

  const createHandler = async (values) => {

    try {
      const { _id: eventId } = await createEvent(values);
      setError('')
      navigate(`/events/${eventId}`)
    } catch (err) {
      setError(err.message)
    }

  }


  const {
    values,
    changeHandler,
    submitHandler
  } = useForm(initialValues, createHandler)


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
      <form onSubmit={submitHandler}>
        <div className="space-y-3">
          <div className="border-b border-gray-900/10 pb-6">
            <h2 className="text-base font-semibold leading-12 text-gray-900">Add Event Form</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600 pb-6">
              Pls fill in information about upcoming cycling event.
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
                  onChange={changeHandler}
                  onBlur={focusHandler}
                  focused="false"
                  required
                  minLength={2}
                  maxLength={100}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.title}
                />
                <span className={styles.error}>Title should be 2-100 characters!</span>
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
                  onBlur={focusHandler}
                  focused="false"
                  required
                  minLength={2}
                  maxLength={100}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.location}
                  onChange={changeHandler}
                />
                <span className={styles.error}>Location should be 2-100 characters!</span>
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
                  required
                  onBlur={focusHandler}
                  focused="false"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.date}
                  onChange={changeHandler}
                />
                <span className={styles.error}>Date should be selected!</span>
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
                  required
                  onBlur={focusHandler}
                  pattern='(ftp|http|https):\/\/[^ "]+'
                  focused="false"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.website}
                  onChange={changeHandler}
                />
                <span className={styles.error}>Enter a valid website!</span>
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
                  alt='event image'
                  required
                  onBlur={focusHandler}
                  focused="false"
                  pattern='https?:\/\/.*\/.*\.\??.*'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.imageUrl}
                  onChange={changeHandler}
                />
                <span className={styles.error}>Enter a valid image URL!</span>
              </div>
            </div>

            <div className="col-span-full py-1">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  rows={2}
                  required
                  onBlur={focusHandler}
                  focused="false"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.description}
                  onChange={changeHandler}
                />
                <span className={styles.error}>Description should be filled in!</span>
              </div>

        {error && <p className="text-white border rounded-md bg-red-500 font-semibold px-3 py-1.5">{error}</p>}

            </div>

          </div>
        </div>


        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={() => navigate('/')}
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
  )
}