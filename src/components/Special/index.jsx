import React from 'react'
import Container from '../Container'
import './style.css'
class Special extends React.Component {
    render() {
        return (
            <div className="body-back">
                <div className="special-container">
                    <Container>
                        <h3 className="special-word">Special</h3>
                        <h2 className="special-header">What makes us special</h2>
                        <div className="specail-food">

                            <div className="freshfood specialdiv">
                                <img src={'/assets/orange-juice .png'} alt="" className="food-img" />
                                <h5>Fresh food</h5>
                                <p className="fresh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. </p>
                            </div>

                            <div className="skilledchef specialdiv">
                                <img src={'/assets/chef 2.png'} alt="" className="food-img" />
                                <h5>skilled Chef</h5>
                                <p className="fresh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. </p>
                            </div>

                            <div className="dishes specialdiv">
                                <img src={'/assets/restaurant 1.png'} alt="" className="food-img" />
                                <h5>Exotic dishes</h5>
                                <p className="fresh">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. </p>
                            </div>
                        </div>
                    </Container>

                </div>
            </div>
        )
    }
}
export default Special