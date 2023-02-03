import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import AllTea from "../tea-data";
import Tea from"../components/Tea";
const HomeScreen = () => {
  return (
    <>
    <Container>
        <Row>
            { AllTea.map(tea=>(
            <Col md={4}>
                <Tea tea={tea} />
            </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default HomeScreen
