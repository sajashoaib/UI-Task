import React, { Component } from 'react'
import './style.css'
import Container from '../Container'
export default class Footer extends Component {
    render() {
        return (
            <div className='footer-content'>
                <Container>
                    <p> Copyright &copy; 2022 Golden Dine website.</p>
                    <p>All rights reserved.</p>
                </Container>
            </div>
        )
    }
}
