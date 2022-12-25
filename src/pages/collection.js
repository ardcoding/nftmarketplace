import React from 'react'
import Navv from './navv'
import "./collection.css"
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap'

class Collection extends React.Component {
  render() {
    return (
      <div id='body'>
        <Navv />
        <Row>
          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat Joker</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/1.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat Yoda</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/3.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat Pool</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/2.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Catos</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/4.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/5.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Picatu</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/6.jpg'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/7.png'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="3">
            <Card id='card' body className="text-center">
              <CardTitle id='cardtitle'>Cat</CardTitle>
              <CardBody id='cardbody'>
                <CardImg id='cardimg' src='images/8.png'></CardImg>
                <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</CardText>
                <Button color='success'>30 Eth</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Collection