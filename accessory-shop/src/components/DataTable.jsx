import React, { useRef } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

const DataTable = ({ data, onDelete, onSearch, onSortAscending, onSortDescending }) => {
    const sRef = useRef();

    const handleSearch = () => {
        const keyword = sRef.current.value;
        onSearch(keyword);
    };

    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <input type="text" placeholder="Search..." ref={sRef} className="mr-2" />
                    <Button onClick={handleSearch} className="mr-2">Search</Button>
                    <Button onClick={onSortAscending} className="mr-2">Sort A-Z</Button>
                    <Button onClick={onSortDescending}>Sort Z-A</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table className="table table-striped border dark">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <i 
                                            className="bi bi-trash" 
                                            onClick={() => onDelete(index)}
                                            style={{ cursor: 'pointer' }}
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    );
};

export default DataTable;