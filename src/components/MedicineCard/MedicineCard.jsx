import React from "react";
import { Link, useNavigate } from "react-router-dom";
const MedicineCard = ({ medicine }) => {
  const navigate = useNavigate();
  if (!medicine) return null;
  const handleAddToCart = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      alert("Please log in to add items to your cart");
      navigate("/auth/login");
      return;
    }

    const cartKey = `cart_${user.id}`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    const exists = cart.find((m) => m.id === medicine.id);
    if (exists) {
      exists.quantity = (exists.quantity || 1) + 1;
    } else {
      medicine.quantity = 1;
      cart.push(medicine);
    }
    localStorage.setItem(cartKey, JSON.stringify(cart));

    navigate("/cart");
  };

  return (
    <div
      className="card h-100  p-4 "
      style={{
        boxShadow: "0 0 4px 1px rgba(25, 135, 84, 0.4)",
        cursor: "pointer",
      }}
    >
      <h3 className="fw-bold mb-1 fs-3">{medicine.name}</h3>
      <small className="text-success fs-4 d-block ">
        {medicine.activeIngredient} • {medicine.strength}
      </small>
      <p className="text-success fs-4  mb-2 fw-semibold">
        {medicine.med_description}
      </p>
      <span
        className=" bg-success text-light fs-4 px-3 fw-light rounded-pill w"
        style={{ display: "inline-block", width: "fit-content" }}
      >
        EGP {medicine.price}
      </span>
      {medicine.alternatives?.length > 0 && (
        <div className="mt-2">
          <h6 className="fw-bold fs-3">Alternatives:</h6>
          <ul className="text-success fs-4 ms-2">
            {medicine.alternatives.map((alt, index) => (
              <li key={index}>{alt}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-2 d-flex flex-wrap justify-content-between  ">
        <span className="badge bg-success text-light fs-4 px-3 fw-semibold">
          {medicine.forms.join(" , ")}
        </span>

        <span className="badge bg-success fs-4 px-3 fw-semibold ">
          <button
            type="submit"
            className="text-light border-0 bg-transparent"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </span>
      </div>
    </div>
  );
};

export default MedicineCard;
