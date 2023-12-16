import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SalesRecord from './SalesRecord';

export const StockRecord = () => {
 const [stock, setStock] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetchStockRecords();
 }, []);

 const fetchStockRecords = async () => {
  setLoading(true);
  try {
      const res = await fetch('/api/stock-records');
      if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      setStock(data);
  } catch (error) {
      console.error('Fetch failed:', error);
  } finally {
      setLoading(false);
  }
};

 return (
    <div>
      <h2>Stock Records</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Brand</th>
              <th>Size</th>
              <th>Quantity (in bags)</th>
              <th>Quantity (in kg)</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((record) => (
              <tr key={record._id}>
                <td>{record.brand}</td>
                <td>{record.size}</td>
                <td>{record.quantityInBags}</td>
                <td>{record.quantityInKg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <SalesRecord onUpdate={fetchStockRecords} />
    </div>
 );
};

export default StockRecord;