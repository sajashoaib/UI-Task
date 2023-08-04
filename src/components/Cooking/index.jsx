import React from 'react'
import Container from '../Container';
import './style.css'
class Cooking extends React.Component {
  render() {
    return (
      <div >

        <Container>
          <div className="div-cooking">
            <div className="cooking-content">
              <h3 className="about-word">Cooking ingredients</h3>
              <h2 className="about-header">What goes in</h2>
              <p className="cooking-para">Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis.
                Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.</p>
              <button className="about-readmore">Read more</button>
            </div>
            <div className="cooking-img">
              <img src={'/assets/rr.png'} alt="img" className="cookings-img" />
            </div>
          </div>
        </Container>


      </div>
    )
  }
}
export default Cooking