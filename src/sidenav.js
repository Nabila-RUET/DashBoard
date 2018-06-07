import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
export default class SideNav extends React.Component {
    render() {
        return (
            <div>
          <Nav vertical>
              <NavItem>
                <NavLink href="#"><span>Home<i class="fa fa-angle-down"></i></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Forms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><span>UI Elements<i class="fa fa-angle-down"></i></span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="#">Tables</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  href="#">Data Reprentation</NavLink>
              </NavItem>
            </Nav>
            <hr />
            <p>Live On</p>
            <Nav vertical>
              <NavLink href="#"><span>Additional Pages<i class="fa fa-angle-down"></i></span></NavLink> 
              <NavLink href="#"><span>Extras<i class="fa fa-angle-down"></i></span></NavLink> 
              <NavLink href="#"><span>Landing Pages<i class="fa fa-angle-down"></i></span></NavLink> 
              
            </Nav>  
            </div>
        )
    }
}
  