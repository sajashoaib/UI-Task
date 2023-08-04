import React from 'react'
import './style.css';
import Container from '../Container';
class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div className="div-about">
            <div className="Aboutus-content">
              <h3 className="about-word">About Us</h3>
              <h2 className="about-header">Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</h2>
              <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit.
                Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
              <button className="about-readmore">Read more</button>
            </div>
            <div className="Aboutus-img">
              <img src={'/assets/food.png'} alt="img" className="about-img" />
            </div>
          </div>
        </Container>


      </div>
    )
  }
}
export default AboutUs;