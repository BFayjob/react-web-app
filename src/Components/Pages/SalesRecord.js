import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SalesRecord.css";

const SalesRecord = () => {
 const [salesRecord, setSalesRecord] = useState([]);

 useEffect(() => {
    fetchSalesRecordData();
 }, []);

 const fetchSalesRecordData = async () => {
    try {
      const response = await axios.get("your-api-url");
      setSalesRecord(response.data);
    } catch (error) {
      console.error("Error fetching sales record data:", error);
    }
 };

 const deleteSalesRecordEntry = async (id) => {
    try {
      if (!id) {
        throw new Error("ID is required for deleting a sales record entry.");
      }

      await axios.delete(`your-api-url/${id}`);

      setSalesRecord(salesRecord.filter((entry) => entry.id !== id));
    } catch (error) {
      console.error("Error deleting sales record entry:", error);
    }
 };

 return (
    <section className={"styles.container"}>
      <table className="styles.table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Remarks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {salesRecord.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.date}</td>
              <td>{entry.item}</td>
              <td>{entry.quantity}</td>
              <td>{entry.unitPrice}</td>
              <td>{entry.totalPrice}</td>
              <td>{entry.remarks}</td>
              <td className="Styles.action">
                <button
                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 onClick={() => deleteSalesRecordEntry(entry.id)}
                >
                 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
 );
};

export default SalesRecord;