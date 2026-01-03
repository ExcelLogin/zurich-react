import { useState } from 'react';



const hamburger = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-12 h-12 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="sr-only">Open menu</span>
        <div className="absolute w-8 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2.5'
            }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
              isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2.5'
            }`}
          />
        </div>
      </button>

  )
}

export default hamburger
