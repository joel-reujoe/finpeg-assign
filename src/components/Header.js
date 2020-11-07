import {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component{
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Brand href="#home">Invest</Navbar.Brand>
                <Navbar.Brand>
                    <i className="fa fa-shopping-cart"></i>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header