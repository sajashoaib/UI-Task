import React, { Component } from 'react'
import './style.css'
import Container from '../Container'
class Subscribe extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className="subscribe-content">
            <div className="mailsubscribe">
              <img src={'/assets/mail.png'} alt="img" className="social-img" />
              <p>Subscribe to our Newsletter</p>
            </div>
            <form action="" method="">
              <input type="text" placeholder='Your Email id' />
              <button className='subscribe'>Subscribe</button>
            </form>

          </div>
        </Container>
      </div>
    )
  }
}
export default Subscribe