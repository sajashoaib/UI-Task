import React, { Component } from 'react'
import './style.css'
import Container from '../Container'
class Numbers extends Component {
  render() {
    return (
      <div className="number-section">
        <Container>
          <div className="number-content">
            <div className="number1">
              <img src={'/assets/dish 1.png'} alt="img" className="cookings-img" />
              <div className="number">
                <p>250+</p>
                <p>Delicacy</p>
              </div>
            </div>

            <div className="number1">
              <img src={'/assets/chef (1) 1.png'} alt="img" className="cookings-img" />
              <div className="number">
                <p>10+</p>
                <p>renowed chefs</p>
              </div>
            </div>

            <div className="number1">
              <img src={'/assets/team 1.png'} alt="img" className="cookings-img" />
              <div className="number">
                <p>30+</p>
                <p>Members</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
export default Numbers