import AirportBooking from './components/AirportBooking'
import Header from './components/Header'
import LoginPage from './components/BookingPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactPage from './components/ContactPage'
import ThankYouPage from './components/ThankyouPage'

const App = () => (
  <BrowserRouter>
      <Header/>
      <Routes>
      <Route exact path='/'Component={AirportBooking}/>
      <Route exact path='/booking'Component={LoginPage}/>
      <Route exact path='/contacts'Component={ContactPage}/>
      <Route exact path='/thankyou'Component={ThankYouPage}/>
      </Routes>
  </BrowserRouter>
)

export default App