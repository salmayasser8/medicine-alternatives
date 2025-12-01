import React from "react";

const OrderHistory = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

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
        {/* <div className="row"> */}
        {orders.length === 0 ? (
          <p>No orders yet</p>
        ) : (
          <ul className="list-unstyled">
            {/* header: visible on sm+ only (hidden on xs) */}
            <li className="row fs-4 fw-semibold mb-2 ">
              <div className="col-5 col-sm-2 col-md-3 text-center">
                Medicine
              </div>
              <div className="col-5 col-sm-2 col-md-3 text-center">
                Quantity
              </div>
              <div className="col-5 col-sm-2 col-md-3 text-center">Date</div>
              <div className="col-5 col-sm-2 col-md-3 text-center">Total</div>
            </li>

            {orders.flatMap((order, orderIndex) => {
              const items = (order.items || []).map((item, i) => (
                <li
                  key={`${orderIndex}-${i}`}
                  className="row mb-1 text-success fs-4 fw-semibold order-row"
                >
                  <div className="col-5 col-sm-2 col-md-3 text-center">
                    {item.name}
                  </div>
                  <div className="col-5 col-sm-2 col-md-3 text-center">
                    {item.quantity}
                  </div>
                  <div className="col-5 col-sm-2 col-md-3 text-center">
                    {order.date}
                  </div>
                  <div className="col-5 col-sm-2 col-md-3 text-center">
                    EGP {order.total}
                  </div>
                </li>
              ));

              return [...items];
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default OrderHistory;
