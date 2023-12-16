import React, { useState } from "react";
import './StockInput.css';

export const StockInput = () => {
 const [brand, setBrand] = useState("");
 const [size, setSize] = useState("");
 const [unitOfMeasure, setUnitOfMeasure] = useState("bag");
 const [quantity, setQuantity] = useState("");

 return (
    <div>
      <section>
        <form>
          <label>
            Select Brand:
            <select onChange={(e) => setBrand(e.target.value)}>
              <option value="">Select</option>
              <option value="blecrown">Blecrown</option>
              <option value="ecofloat">Ecofloat</option>
              <option value="ace">Ace</option>
              <option value="aller-aqua">Aller Aqua</option>
              <option value="vital">Vital</option>
              <option value="coppens">Coppens</option>
              <option value="alpha">Alpha</option>
              <option value="ovulin">Ovulin</option>
            </select>
          </label>

          <label>
            Select Size:
            <select onChange={(e) => setSize(e.target.value)}>
              <option value="">Select</option>
              {brand === "blecrown" &&
                [2, 3, 4, 6, 9].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "ecofloat" &&
                [3, 4, 6, 9].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "ace" &&
                [3, 4, 6, 8].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "aller-aqua" &&
                [0.2, 0.4, 0.5, 0.9, 1.3, 2, 3, 4].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "vital" &&
                [2, 3, 4, 6, 9].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "coppens" &&
                [0.2, 0.3, 0.5, 0.8, 1.2, 1.5, 2].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
              {brand === "alpha" &&
                [4, 6, 8].map((size) => (
                 <option key={size} value={size}>
                    {size}mm
                 </option>
                ))}
            </select>
          </label>

          <label>
            Select Unit of Measure:
            <select onChange={(e) => setUnitOfMeasure(e.target.value)}>
              <option value="bag">Bag</option>
              <option value="kg">Kg</option>
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
 );
};

export default StockInput;