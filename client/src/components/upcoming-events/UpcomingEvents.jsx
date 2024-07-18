const stats = [


    { id: 1, title: '"Varna 24 hours"', location: 'Varna', date: '28.08.2024', imageUrl: 'https://th.bing.com/th/id/OIP.S8HcE8k2D0bJZ20o77cZbgAAAA?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, title: '"Vitosha 100"', location: 'Sofia', date: '18.09.2024', imageUrl: 'https://th.bing.com/th?q=Florida+Cycling+Events&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=BG&setlang=en&adlt=moderate&t=1&mw=247' },
    { id: 3, title: '"Dunav ultra"', location: 'Vidin', date: '05.10.2024', imageUrl: 'https://th.bing.com/th?q=Untamed+Cycling+Events&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=BG&setlang=en&adlt=moderate&t=1&mw=247' },

  ]
  
  export default function UpcomingEvents() {
    return (
        <>
        <h2 className="text-3xl font-bold tracking-tight text-gray-700">UPCOMING EVENTS</h2>
      <div className="bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">            
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <img src={stat.imageUrl} alt="Image race"  /> 
                <dt className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{stat.title}</dt>
                <dd className="text-base leading-7 text-gray-600">Location: {stat.location}</dd>
                <dd className="text-base leading-7 text-gray-600">Date: {stat.date}</dd>
                <button
                type="submit"
                className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-900"

              >
                Details
              </button> 
              </div>
            ))}
          </dl>
        </div>
      </div>
      </>
    )
  }