import React from 'react'
import Container from '../Container'
import './style.css'
class Menua extends React.Component {
    render() {
        return (
            <div className="body-back">
                <Container>
                    <h3 className="Menua-word">Straight From Kitchen</h3>
                    <h2 className="Menua-header">Our Menu</h2>
                    <div className="menua-contant">
                        <div className="menu-item-left">
                            <div className="menua-item">
                                <img src={'/assets/one.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Lorem ipsum dolor sit amet</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" className="yellow-line" />
                                <span>Rs 222</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/two.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Vivamus sodales augue vita</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 590</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/three.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Pellentesque semper semper</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 130</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/four.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Vestibulum est turpis</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 135</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/five.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Phasellus convallis maximus</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 148</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/six.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Nullam elementum magna</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 200</span>

                            </div>
                        </div>


                        <div className="menua-item-right">
                            <div className="menua-item">
                                <img src={'/assets/seven.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Phasellus convallis maximus</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 148</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/eight.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Vestibulum est turpis</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 135</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/nine.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Vivamus sodales augue vita</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 590</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/ten.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Lorem ipsum dolor sit amet</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 222</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/eleven.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Nullam elementum magna</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 200</span>

                            </div>

                            <div className="menua-item">
                                <img src={'/assets/twelve.png'} alt="" />
                                <div className="foodnames">
                                    <h3 className="names">Pellentesque semper semper</h3>
                                    <p className="desc-food">Lorem ipsum dolor sit amet</p>
                                </div>
                                <img src={'/assets/line.png'} alt="" />
                                <span>Rs 130</span>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default Menua