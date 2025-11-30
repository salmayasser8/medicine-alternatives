import React from "react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
const MedicineCart = ({ medicine, onDelete }) => {
  const [quantity, setQuantity] = useState(1);
  if (!medicine) return null;
  const handleIncrement = () => setQuantity((q) => q + 1);
  const handleDecrement = () => setQuantity((q) => (q > 0 ? q - 1 : 0));
  return (
    <>
      <div className="d-flex justify-content-between align-items-center rounded-5">
        <div>
          <h3 className="fw-bold mb-1 fs-3">{medicine.name}</h3>
          <small className="text-success fs-5 d-block ">{medicine.form}</small>
          <span
            className=" bg-success text-light fs-4 px-3 fw-light rounded-pill mt-4"
            style={{ display: "inline-block", width: "fit-content" }}
          >
            EGP {medicine.price}
          </span>
        </div>
        <div className="d-flex align-items-center gap-4 ">
          <button
            className="btn btn-outline-success  text-center fs-4 rounded-circle  "
            style={{ width: "3rem", height: "3rem" }}
            onClick={handleIncrement}
          >
            +
          </button>
          <span className="fs-4">{quantity}</span>
          <button
            className="btn btn-outline-success  text-center rounded-circle fs-4 "
            style={{ width: "3rem", height: "3rem" }}
            onClick={handleDecrement}
          >
            -
          </button>
          <RiDeleteBin5Line
            className="fs-3 text-success fw-bold"
            onClick={() => onDelete(medicine.id)}
          />
        </div>
      </div>
    </>
  );
};

export default MedicineCart;
