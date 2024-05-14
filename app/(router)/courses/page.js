import React from 'react'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {/* left Container */}
        <div className='col-span-2 '>
            {/* Banner */}
            Banner
        </div>
        {/* Right Container */}
        <div>
            Right Section
        </div>
    </div>
  )
}

export default Courses