import Link from "next/link"

export default function Card() {
  return (
    <div className='relative flex items-center w-full h-48 flex-row rounded-md bg-white bg-clip-border text-gray-700 shadow-md'>
      <img
        src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80'
        alt='image'
        className='aspect-square rounded-full h-4/5 object-cover p-5'
      />
      <div className='p-3'>
        <h6 className='mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-600 antialiased'>
          startups
        </h6>
        <h4 className='mb-1 block font-sans text-md md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
          Lyft launching cross-platform service this week
        </h4>
        <p className='mb-1 lg:block hidden overflow-clip font-sans text-base font-normal leading-relaxed text-gray-700 antialiased'>
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <Link className='inline-block' href='#'>
          <button
            className='flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-600 transition-all hover:bg-blue-600/10 active:bg-blue-600/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
            type='button'
          >
            Más detalles
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              ariaHidden='true'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}
