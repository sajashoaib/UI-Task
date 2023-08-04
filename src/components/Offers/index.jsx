import React from 'react'
import './style.css'
class Offers extends React.Component {
  render() {
    return (
      <div className="offer-content">
        <img src={'/assets/Component 4.png'} alt="" className="yellow-img" />
        <div className="offer">
          <h3 className="Offer-word">Come join us for a lunch this weekend and enjoy</h3>
          <h2 className="Offer-header">FLAT 10% OFF</h2>
          <button className="book-tabel">Book Tabel</button>
        </div>

        <img src={'/assets/Component 4.png'} alt="" className="yellow-img" />

      </div>
    )
  }
}
export default Offers