import * as React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Cart from './Cart.png';

const Header = () => (
    <header>
        <div className="OK"></div>
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" style={{ height: 39, marginTop: 5 }} className="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div className="header-title">
                            <p>Deliver to</p>
                            <div className="Go">United Kingdom</div>
                        </div>
                        <div className="search" >
                            <button className="searchbtn2">
                                <NavDropdown title="All" id="basic-nav-dropdown2">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </button>
                            <input type="text" className="search">
                            </input>
                            <button className="searchbtn">🔍</button>
                        </div>
                        <NavDropdown title="🇬🇧" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <div className="header-title">
                            <p>Hello, Sign in</p>
                            <div className="Go">Account & Lists </div>
                        </div>
                        <div className="header-title">
                            <p>Returns</p>
                            <div className="Go">& Orders </div>
                        </div>
                        <div className="header-title" >
                            <img src={Cart} alt="" className="Cart" style={{ width: 60, }} />
                            <h6>0</h6>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Navbar className="Nav2" variant="dark">
            <Nav.Link href="#home">All</Nav.Link>
            <Nav.Link href="#home">Today's Deals</Nav.Link>
            <Nav.Link href="#home">Customer Service</Nav.Link>
            <Nav.Link href="#home">Registry</Nav.Link>
            <Nav.Link href="#home">Gift Cards</Nav.Link>
            <Nav.Link href="#home">Sell</Nav.Link>
        </Navbar>


    </header>

);
export default Header;