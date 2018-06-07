import React from 'react';
import SideNav from './sidenav';
import {CardBody, Card } from 'reactstrap';

export default class User extends React.Component {
  
render(){
        return(
          <div>  
        <Card>
            <CardBody>
            <h3>Nabila Farzana</h3>
            </CardBody>
          </Card>
          <Card>
           <SideNav/> 
  </Card>
          </div>
        )
    }
}