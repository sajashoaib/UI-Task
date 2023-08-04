import React from 'react'
import './style.css';
import Container from '../Container';
class Landing extends React.Component {
    render() {
        return (
            <div className='section-one'>
                <div className="overlay"></div>
                <Container>
                    <div className='contain'>
                        <div className="logo">
                            <img src={'/assets/logo.png'} />
                        </div>
                        <nav class="navbar">
                            <ul className="ul-nav">
                                <li><a href="#about">Home</a></li>
                                <li><a href="#home">About Us</a></li>
                                <li><a href="#special">Special</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#search"><img src={'/assets/search.png'} alt="Search Icon" /></a></li> </ul>
                        </nav>
                        <a href="#" className="book">--- Book Now ---</a>
                    </div>
                    <div className="contant">
                        <h1 className="text-header">Welcome To <br />Golden View Dine </h1>
                        <p className="para-header">Explore the authentic vegan dishes with your friends and family</p>
                        <button className="home-readmore"> Read more</button>

                    </div>
                </Container>
            </div>
        )
    }
}
export default Landing;