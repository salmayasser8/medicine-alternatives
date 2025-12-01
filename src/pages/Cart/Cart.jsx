import React from "react";
import MedicineCart from "../../components/MedicineCart/MedicineCart";
import { useEffect, useState } from "react";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = cartItems.length > 0 ? 20 : 0;
  const total = subtotal + shipping;
  useEffect(() => {
    if (user) {
      const cartKey = `cart_${user.id}`;
      const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCartItems(storedCart);
    }
  }, [user]);
  const handleDelete = (id) => {
    const cartKey = `cart_${user.id}`;
    const deletedItem = cartItems.find((item) => item.id === id);
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    alert(`${deletedItem.name} removed from cart!`);
  };
  const handleQtyChange = (id, newQty) => {
    const cartKey = `cart_${user.id}`;
    // If qty is 0, remove item; otherwise update qty
    const updatedCart =
      newQty <= 0
        ? cartItems.filter((item) => item.id !== id)
        : cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
          );
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };
  const proceedToCheckout = () => {
    const confirmed = window.confirm(
      `Proceed to checkout?\nItems: ${cartItems.length}\nTotal: EGP ${total}`
    );
    if (!confirmed) return;

    // Clear the cart
    const cartKey = `cart_${user.id}`;
    localStorage.removeItem(cartKey);
    setCartItems([]);

    alert("Order placed ✅");
  };
  // useEffect(() => {
  //   fetch("/data/medicines.json")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       const found = data.find((m) => m.id.toLowerCase() === id.toLowerCase());
  //       setMedicine(found);
  //     })
  //     .catch(() => setMedicine(null));
  // }, [id]);
  return (
    <>
      <section className="container-lg mt-5 min-vh-100">
        <div className="row gap-4  justify-content-center justify-content-lg-between ">
          <h1 className="fs-1 fw-bold mb-5">Your Shipping Cart</h1>
          <div
            className={`${
              cartItems.length === 0
                ? "col-12"
                : "col-10 col-md-6 col-lg-5 h-100 p-4 d-flex flex-column"
            } `}
            style={{
              cursor: "pointer",
            }}
          >
            {cartItems.length === 0 ? (
              <div className="alert alert-success text-center fs-4 fw-semibold text-center">
                Cart is Empty
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 p-4  rounded-3"
                  style={{
                    boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
                  }}
                >
                  <MedicineCart
                    medicine={item}
                    onDelete={handleDelete}
                    onQtyChange={handleQtyChange}
                  />
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div
              className="col-8 col-md-6 col-lg-5 p-4 h-75  rounded-3  "
              style={{
                boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
                cursor: "pointer",
              }}
            >
              <h3 className="mb-4">Order Summary</h3>
              <div className=" d-flex justify-content-between mb-3 text-success fs-3">
                <small>Subtotal</small>
                <small>EGP {subtotal}</small>
              </div>
              <div className=" d-flex justify-content-between text-success fs-3 pb-3 border-bottom border-success">
                <small>Shipping</small>
                <small>EGP {shipping}</small>
              </div>
              <div className="d-flex justify-content-between mt-4 text-success ">
                <h3 className="fs-4 fw-bold">Total</h3>
                <span className="fs-4 fw-bold"> EGP {total}</span>
              </div>
              <button
                type="button"
                className="btn btn-success d-block mx-auto fs-3 fw-semibold p-2 rounded-3 mt-3"
                onClick={proceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
