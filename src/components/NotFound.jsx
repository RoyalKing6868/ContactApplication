import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div>
            <img src="/Images/noContact.png" alt="No_Contacts" />
        </div>
        <h3 className='text-white text-2xl font-semibold'>No Contacts Found</h3>
    </div>
  )
}

export default NotFound