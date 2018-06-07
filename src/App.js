import React, { Component } from 'react';
import Header from './header';
import User from './User';
import './App.css';
import { Container, Row, Col} from 'reactstrap';
const style={
  cont:{
    paddingLeft:'0px',
    paddingRight:'0px',
    marginLeft:'0px',
    marginRight:'0px',
  },
  col:{
    paddingLeft:'0px',
    paddingRight:'0px',
    marginLeft:'0px',
    marginRight:'0px',
    width:'5vw'
  }

}
class App extends Component {
  render() {
    return (
      <Container style={style.cont} fluid>
        <Row>
          <Col style={style.col} sm={{ size: 2}} lg={{ size: 2}} xl={{ size: 2}} md={{ size: 2}}>
       <User/>
       </Col >
       <Col style={style.cont} sm={{ size: 10}} lg={{ size: 10}} xl={{ size: 10}} md={{ size: 10}}>
       <Header/>
       </Col >
       </Row>
      </Container> 
        
      
    );
  }
}

export default App;
