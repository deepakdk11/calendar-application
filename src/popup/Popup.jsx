import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Popup = () => {
    const { setShowEvent, setEventTitle, eventTitle, saveEvent } = useContext(DataContext)
  return (
    <div className='flex flex-col rounded-md border-2 w-fit p-5 my-10 mx-auto bg-gray-200'>
        <div className='flex justify-between my-2 mx-2'>
            <h1 className='text-2xl'>Add Events</h1>
            <button className='font-bold' onClick={()=>setShowEvent(false)}>X</button>
        </div>
        
        <div className='flex flex-col my-3 px-2 py-5 border-y-2 border-gray-400'>
        <label htmlFor="title" className='text-xl mb-2'>Title:</label>
        <input className='border-2 w-96 p-1 focus:outline-none rounded-sm ' type="text" name="" value={eventTitle} id="title" onChange={(e)=>setEventTitle(e.target.value)} />
        </div>
        <button onClick={saveEvent}className='border-2 self-end bg-sky-500 text-white py-1 px-4 rounded-md' type='submit'>Save Changes</button>
    </div>
  )
}

export default Popup
