import { createContext, useState } from "react";
import moment from 'moment';

export  const DataContext = createContext(null)

export const DataContextProvider = (props) => {

    const [events, setEvents] = useState([])
    const [showEvent, setShowEvent] = useState(false)
    const [selectDate, setSelectDate] = useState(null)
    const [eventTitle, setEventTitle] = useState('')

    const handleSlot = (slotInfo) => {
        setShowEvent(true);
        setSelectDate(slotInfo.start)
    }

    const saveEvent = (e) => {
        e.preventDefault();
        if (selectDate && eventTitle) {
            const newEvents = {
                title : eventTitle,
                start : selectDate,
                end : moment(selectDate).add(1, "hours").toDate(),
            }
            setEvents([...events, newEvents])
            setShowEvent(false)
            setEventTitle('')
            
        }
    }



    const contextValue = {
        events,
        setEvents,
        eventTitle,
        setEventTitle,
        setShowEvent,
        showEvent,
        handleSlot,
        saveEvent,
        selectDate,
        setSelectDate
    }

    return(
        <DataContext.Provider value={contextValue} >
            {props.children}
        </DataContext.Provider>
    )
}