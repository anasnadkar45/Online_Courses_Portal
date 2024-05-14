import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    return (
        <div className='flex gap-5 items-center bg-white rounded-xl px-5 py-3'>
            <Image src='study.svg' width={200} height={200} />
            <div>
                <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary'>CourseTake</span> Academy</h2>
                <h2 className='text-gray-500'>Explore, Learn and Build All Real Life Projects</h2>
            </div>
        </div>
    )
}

export default WelcomeBanner