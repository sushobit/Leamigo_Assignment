import {BsArrowDownUp, BsCalendarEvent} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import './index.css'

const BookingData = props => {
  const {details} = props
  const {from, to, time, date} = details

  return (
    <li className="list">
      <div className="route-details-card">
        <div className="route-details">
          <BsArrowDownUp className="return-arrow" />
          <h1 className="details-head">Route Details</h1>
        </div>
        <hr />
        <h1 className="trip-details">Trip Details</h1>
        <div className="from-details">
          <MdLocationPin size={20} className="location" />
          <h1 className="from">From: {from}</h1>
        </div>
        <div className="from-details">
          <MdLocationPin size={20} className="location" />
          <h1 className="from">To: {to}</h1>
        </div>
        <div className="from-details">
          <BsCalendarEvent size={20} className="location" />
          <h1 className="from">{date}</h1>
        </div>
        <div className="from-details">
          <BiTimeFive size={20} className="location" />
          <h1 className="from">{time}</h1>
        </div>
        <button type="button" className="book">
          Book Ticket
        </button>
      </div>
    </li>
  )
}

export default BookingData