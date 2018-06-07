import React from 'react';
import './App.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import Image from './image/images.jpg';

    const style={
      avatar :{
        verticalAlign: 'middle',
        width: '25px',
        height: '25px',
        borderRadius: '50%'
    },
    aws:{
      fontSize:'28px'
    }
    }
    export default class Header extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
         
          this.state = {
            isOpen: false,
          
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
       
        render() {
          return (
            <div>
        <Navbar color="light" light expand="md">
        
        <i class="fa fa-align-justify" style={style.aws}></i>
          
          
            <Nav className="ml-auto" navbar>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <NavItem>
                <NavLink href="/components/"><i class="fa fa-cloud-download"></i></NavLink>
              </NavItem>
              <NavItem>
                  <span><img style={style.avatar} src={Image} />John Doe <i class="fa fa-angle-down"></i></span>
             </NavItem>
             </Collapse>
            </Nav>
          
        </Navbar>
      </div>
          );
        }
      }
 