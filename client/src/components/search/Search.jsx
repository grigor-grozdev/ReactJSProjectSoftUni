const stats = [


  { id: 1, title: '"Varna 24 hours"', location: 'Varna', date: '28.08.2024', imageUrl: 'https://th.bing.com/th/id/OIP.S8HcE8k2D0bJZ20o77cZbgAAAA?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { id: 2, title: '"Vitosha 100"', location: 'Sofia', date: '18.09.2024', imageUrl: 'https://th.bing.com/th?q=Florida+Cycling+Events&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=BG&setlang=en&adlt=moderate&t=1&mw=247' },
  { id: 3, title: '"Dunav ultra"', location: 'Vidin', date: '05.10.2024', imageUrl: 'https://th.bing.com/th?q=Untamed+Cycling+Events&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=BG&setlang=en&adlt=moderate&t=1&mw=247' },

]

export default function Search() {
  return (
    <>
      <form>
        <div className="space-y-3">
          <div className="sm:col-span-full">
            <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
              Search
            </label>
            <div className="mt-2">
              <input
                id="search"
                name="search"
                type="text"
                autoComplete=""
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

      {stats.length == 0 ?
        <h2 className="text-3xl font-bold tracking-tight text-gray-700">THERE ARE NO RESULTS FOR ...</h2>
        :
        <>
        <h2 className="text-3xl font-bold tracking-tight text-gray-700">RESULTS FOR ...</h2>
        <div className="bg-white py-8 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="flex max-w-xl flex-col items-start justify-between">
                  <img src={stat.imageUrl} alt="Image race" />
                  <dt  className="flex max-w-xl flex-col items-start justify-between text-2xl font-semibold text-gray-900 sm:text-4xl">{stat.title}</dt>
                  <dd className="text-base leading-7 text-gray-600">Location: {stat.location}</dd>
                  <dd className="text-base leading-7 text-gray-600">Date: {stat.date}</dd>
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"

                  >
                    Details
                  </button>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </>
      }
    </>
  )
}