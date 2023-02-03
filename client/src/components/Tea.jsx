import React,{useState} from 'react'
import {Card,Button,Row,Col,Modal} from 'react-bootstrap'
const Tea = ({tea}) => {
  const [size,setSize]=useState('small')
  const [quantity,setQuantity]=useState(1)
  //for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem',marginTop:"30px"}}>
      <Card.Img variant="top" src={tea.image} style={{height:"360px",cursor:"pointer"}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{tea.name}</Card.Title>
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Size</h6>
                <select value={size} onChange={e=>setSize(e.target.value)}>
                    {tea.size.map(size=>(
                        <option >{size}</option>
                    ))}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select value={quantity} onChange={e=>setQuantity(e.target.value)}>
                   {[...Array(10).keys()].map((v,i)=>(
                    <option value={i+1} >{i+1}</option>
                   ))}
                </select>
            </Col>
          </Row>
        </Card.Text>
        <Row>
          <Col md={6}>
            Price : {tea.prices[0][size]*quantity} /-Rs
          </Col>
          <Col md={6} >
            <Button className="bg-warning text-white">Add to cart</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tea.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
       <Card.Img variant="top" src={tea.image} style={{height:"500px",cursor:"pointer",marginBottom:"10px"}}/>
        </div>
        <div>
        <h4>Description:</h4>
          <h6>{tea.description}</h6>
        </div></Modal.Body>
      </Modal> 
    
    </>
  )
}

export default Tea