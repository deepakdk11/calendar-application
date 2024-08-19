import React, { useContext } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DataContext } from '../context/DataContext';
import Popup from '../popup/Popup';

const localizer = momentLocalizer(moment)

const MyCalendar = () => {

    const { events, showEvent, handleSlot} = useContext(DataContext)

  return (
    <div>
        {showEvent ? <Popup /> : <></> }
        
        <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectSlot={handleSlot}
        />
        
    </div>
  )
}

export default MyCalendar
