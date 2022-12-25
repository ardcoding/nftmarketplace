import React from "react"
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "reactstrap"
import Navv from './navv'
import "./introduction.css"
const Introduction = () => {

  return (
    <div>
      <Navv />
      <h1 id="h1">The Cool Cats</h1>
      <Card id="contain" style={{backgroundColor:"transparent", width:"80%", marginLeft:"10%",marginTop:"3%"}}>
      <Card className="box" inverse style={{ width: '30%'}}>
        <CardHeader>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            What is NFT?
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
        </CardBody>
      </Card>
      
      <Card className="boxleft box" inverse style={{ width: '30%', marginLeft:"70%"}}>
        <CardHeader>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            How Do I Buy A NFT?
          </CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
        </CardBody>
      </Card>

      <Card className="box" inverse style={{ width: '30%'}}>
        <CardHeader>
        </CardHeader>
        <CardBody>
          <CardTitle tag="h5">
            The NFT Features:
          </CardTitle>
          <CardText>
            - With supporting <br/>
            - text below as a <br/>
            - natural lead-in to <br/>
            - additional content.
          </CardText>
        </CardBody>
      </Card>
      </Card>
      <CardImg id="cardimgg" className="img2" src="images/1.jpg"></CardImg>
      <CardImg id="cardimgg2" className="img2" src="images/2.jpg"></CardImg>
      <CardImg id="cardimgg2" className="img2" src="images/3.jpg"></CardImg><br></br>
      <CardImg id="cardimgg3" className="img2" src="images/4.jpg"></CardImg>
      <CardImg id="cardimgg2" className="img2" src="images/5.jpg"></CardImg>
      <CardImg id="cardimgg2" className="img2" src="images/6.jpg"></CardImg>
    </div>
  )
}
export default Introduction