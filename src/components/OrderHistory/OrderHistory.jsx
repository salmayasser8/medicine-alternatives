import React from "react";

const OrderHistory = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const ordersKey = `orders_${user?.id}`;
  const orders = JSON.parse(localStorage.getItem(ordersKey)) || [];

  return (
    <div
      className="card col-12 col-md-10 p-4 rounded-3"
      style={{ boxShadow: "0 0 4px 3px rgba(25, 135, 84, 0.4)" }}
    >
      <h3 className="fw-bold fs-1">Order History</h3>
      <p className="fs-4 text-success">
        Track the status of your previous orders and payments
      </p>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <table className="table text-center align-middle">
          <thead className="fs-5">
            <tr>
              <th>Medicine</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, orderIndex) =>
              (order.items || []).map((item, i) => (
                <tr key={`${orderIndex}-${i}`} className="fs-5">
                  <td className="text-success">{item.name}</td>
                  <td className="text-success">{item.quantity}</td>
                  <td className="text-success">{order.date}</td>
                  <td className="text-success">EGP {order.total}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
