import React from 'react';

const DataTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    return (
        <table className="table table-striped border dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;