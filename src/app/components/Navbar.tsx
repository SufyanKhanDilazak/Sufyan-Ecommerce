import React from 'react'

const Navbar = () => {
  return (
    <div><header className="text-gray-600 body-font bg-red-950 rounded-sm">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
     
    </div>
  </header>
  </div>
  )
}

export default Navbar