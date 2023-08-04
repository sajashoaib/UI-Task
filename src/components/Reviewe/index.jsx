import React, { Component } from 'react'
import './style.css'
import Container from '../Container'
class Reviewe extends Component {
   render() {
      return (
         <div>
            <Container>
               <h3 className="special-word">Reviews</h3>
               <h2 className="special-header">words from our food lovers</h2>
               <div className="reviewee">
                  <div className="reviewee1">
                     <div className="person">
                        <div className="img-name">
                           <img src={'/assets/Ellipse 1 (1).png'} alt="img" className="cookings-img" />
                           <div className="name">
                              <p> Alex andrina</p>
                              <img src={'/assets/stars.png'} alt="img" className="star-img" />
                           </div></div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci,
                           egestas eget nulla duis at iaculis nunc, elit. “</p>
                     </div>
                  </div>


                  <div className="reviewee1">
                     <div className="person">
                        <div className="img-name">
                           <img src={'/assets/Ellipse 1.png'} alt="img" className="cookings-img" />
                           <div className="name">
                              <p> Alex andrina</p>
                              <img src={'/assets/stars.png'} alt="img" className="star-img" />
                           </div></div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci,
                           egestas eget nulla duis at iaculis nunc, elit. “</p>
                     </div>
                  </div>


                  <div className="reviewee1">
                     <div className="person">
                        <div className="img-name">
                           <img src={'/assets/Ellipse 1 (1).png'} alt="img" className="cookings-img" />
                           <div className="name">
                              <p> Alex andrina</p>
                              <img src={'/assets/stars.png'} alt="img" className="star-img" />
                           </div></div>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci,
                           egestas eget nulla duis at iaculis nunc, elit. “</p>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
      )
   }
}
export default Reviewe