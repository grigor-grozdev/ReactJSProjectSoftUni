import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Details() {
    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-3xl font-semibold leading-7 text-gray-900">Event Information</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-900">
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900">
                        <a href="https://vitosha100km.bg/" target="_blank">Official Website</a>
                    </button>
                </p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <img src='https://th.bing.com/th?q=Untamed+Cycling+Events&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=BG&setlang=en&adlt=moderate&t=1&mw=247' alt="Image race" />
                        </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">VITOSHA 100</dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Location</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">Sofia</dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Date</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">07/25/2024</dd>
                    </div>

                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div>
                    <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Likes</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0">10 people like this event</dd>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="submit"
                            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900"
                        >
                            Like
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900"
                        >
                            Edit
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900"
                        >
                            Delete
                        </button>
                    </div>
                                        
                </dl>
            </div>
        </div>
    )
}
