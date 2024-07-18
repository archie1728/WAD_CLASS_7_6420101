import React from 'react';

const DataTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;