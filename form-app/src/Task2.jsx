import { useState, useEffect } from "react";

function Task2() {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("addresses")) || [];
    setAddresses(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editIndex !== null) {

      const updated = [...addresses];
      updated[editIndex] = formData;
      setAddresses(updated);
      setEditIndex(null);
    } else {
      setAddresses([...addresses, formData]);
    }

    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  }

  function handleEdit(index) {
    setFormData(addresses[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const updated = addresses.filter((item, i) => i !== index);
    setAddresses(updated);
  }

  return (
  <div className="card">
    <h2>Address Form</h2>

    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="street" value={formData.street} onChange={handleChange} placeholder="Street" />
      <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
      <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
      <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Zip Code" />

      <button type="submit">
        {editIndex !== null ? "Update Address" : "Add Address"}
      </button>
    </form>

    {addresses.length > 0 && (
      <div>
        <h3>Saved Addresses</h3>

        {addresses.map((addr, index) => (
          <div className="address-card" key={index}>
            <p><b>{addr.name}</b></p>
            <p>{addr.street}</p>
            <p>{addr.city}</p>
            <p>{addr.state}</p>
            <p>{addr.zip}</p>

            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default Task2;