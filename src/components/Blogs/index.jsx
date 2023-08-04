import React, { Component } from 'react'
import './style.css'
import Container from '../Container'
class Blogs extends Component {
  render() {
    return (
      <div>
        <Container>
          <h3 className="special-word">Blogs</h3>
          <h2 className="special-header">words from our food lovers</h2>
          <div className="blog-content">
            <div className="blog1">
              <img src={'/assets/Homos.png'} alt="img" className="star-img" />
              <div className="detail">


                <h4 className="header-foodblog">Cooking Dining Experience</h4>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button className="blog-readmore">Read More</button></div>
            </div>


            <div className="blog1">
              <div className="detail">
                <h4 className="header-foodblog">Cooking Dining Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button className="blog-readmore">Read More</button></div>
              <img src={'/assets/vegtabels.png'} alt="img" className="star-img" />
            </div>


            <div className="blog1">
              <img src={'/assets/cake.png'} alt="img" className="star-img" />
              <div className="detail">
                <h4 className="header-foodblog">Cooking Dining Experience</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin </p>
                <button className="blog-readmore">Read More</button></div>
            </div>
          </div>
        </Container>

      </div>
    )
  }
}
export default Blogs