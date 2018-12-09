import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

class AppNavbar extends Component {

//  constructor(props) {
//    super(props) // constructor not needed tx to toggle

//    this.
  state = {
    isOpen: false
  }

    // binding lifecycle method like render() componentDidMount()
    // this.toggle = this.toggle.bind(this) // or use callback

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="https://www.google.com">ggl</NavLink>
               </NavItem>
             </Nav> 
          </Collapse>

        </Container>
      </Navbar>
    </div>
    )
  }

}
export default AppNavbar
