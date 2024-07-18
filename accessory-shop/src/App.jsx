import { useState, useRef } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import accessoryData from './accessory.json';
import DataTable from './components/DataTable'

function App() {
  const quantityRef = useRef()
  const productRef = useRef()
  const [price, setPrice] = useState(0)
  const [selectedItems, setSelectedItems] = useState([])

  const handleSubmit = (e) => {
    const productId = parseInt(productRef.current.value)
    const product = accessoryData.accessories.find(accessory => accessory.id === productId)
    if (product && quantityRef.current.value) {
      const order = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: parseInt(quantityRef.current.value)
      }
      console.table(order)
      setSelectedItems(prevItems => [...prevItems, order])
      
      // Reset form fields
      productRef.current.value = ''
      quantityRef.current.value = ''
      setPrice(0)
    }
  }

  const updatePrice = (e) => {
    const productId = parseInt(e.target.value)
    const product = accessoryData.accessories.find(accessory => accessory.id === productId)
    setPrice(product ? product.price : 0)
  }

  return (
    <Container>
      <Row className="mb-3">
        <Col xs={2}>
          <span>Product:</span>
        </Col>
        <Col>
          <select ref={productRef} onChange={updatePrice} className="form-control">
            <option value="">Select a product</option>
            {accessoryData.accessories.map((accessory) => (
              <option key={accessory.id} value={accessory.id}>
                {accessory.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2}>
          <span>Price:</span>
        </Col>
        <Col>
          <input type="text" value={`$${price.toFixed(2)}`} readOnly className="form-control" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2}>
          <span>Quantity:</span>
        </Col>
        <Col>
          <input type="number" ref={quantityRef} className="form-control" />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Button variant="secondary" onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable data={selectedItems} />
        </Col>
      </Row>
    </Container>
  )
}

export default App