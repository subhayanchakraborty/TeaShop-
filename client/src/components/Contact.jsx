import React from 'react'
import {Container,Row,Col,Table,Image} from 'react-bootstrap';
import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
const Contact = () => {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
        <Row>
            <Col md={6}>
                <h1>Assam tea shop</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                 It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            
            
            <Table striped bordered hover text-center>
      <thead>
        <tr>
          <th className='bg-warning text-center' colSpan={4}>Contact details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><AiFillPhone/></td>
          <td>Phone no.</td>
          <td>8011402484</td>
        </tr>
        <tr>
          <td><MdEmail/></td>
          <td>Email</td>
          <td>subhayan2904@gmail.com</td>
        </tr>
      </tbody>
    </Table>
            </Col>
            <Col md={6}>
                <Image src="images/teaLeaf.jpg"/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contact