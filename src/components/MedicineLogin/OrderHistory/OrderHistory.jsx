import React from "react";

const OrderHistory = () => {
  return (
    <>
      <div
        className="card col-12 col-md-10 p-4 rounded-3"
        style={{
          boxShadow: "0 0 4px 3px rgba(25, 135, 84, 0.4)",
        }}
      >
        <h3 className="fw-bold fs-1">Order History</h3>
        <p className="fs-4 text-success">
          Track the status of your previous orders and payments
        </p>
        <ul className="list-unstyled">
          <li>
            <span>Date</span>
            <span>Total</span>
            <span>Status</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OrderHistory;
