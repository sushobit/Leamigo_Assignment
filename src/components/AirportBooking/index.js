import {Component} from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import BookingData from '../BookingData'

import './index.css'

class AirportBooking extends Component {
  state = {list: [], from: '', to: '', searchBtn: false}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const url = 'https://mocki.io/v1/2cc0bc73-734d-448e-9038-7c2b3ffcbd58'
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    this.setState({list: data})
    console.log(data)
  }

  fromPlace = event => {
    this.setState({from: event.target.value})
  }

  toPlace = event => {
    this.setState({to: event.target.value})
  }

  searchResults = () => {
    const {from, to, list, searchBtn} = this.state
    const filterData = list.filter(item => item.from === from && item.to === to)
    return (
      searchBtn &&
      (filterData.length === 0 ? (
        <h1 className="no-data">No Data Found</h1>
      ) : (
        <ul>
          {filterData.map(each => (
            <BookingData key={each.time} details={each} />
          ))}
        </ul>
      ))
    )
  }

  search = () => {
    this.setState({searchBtn: true})
  }

  render() {
    return (
      <div className="main-container">
        <div className='second_container'>
          <h1 className="heading">Fly high, dream big. Your journey begins with us.</h1>
          <p className="para">You have come to the right place</p>
          <div className="details-card">
            <input
              type="search"
              onChange={this.fromPlace}
              className="input"
              placeholder="From:Start typing your pickup location"
            />
            <AiOutlineArrowRight size={25} className="arrow" />
            <input
              type="search"
              onChange={this.toPlace}
              className="input"
              placeholder="To:Start typing your dropoff location"
            />
            <button type="button" onClick={this.search} className="button">
              Search
            </button>
          </div>
          {this.searchResults()}
        </div>
      </div>
    )
  }
}

export default AirportBooking