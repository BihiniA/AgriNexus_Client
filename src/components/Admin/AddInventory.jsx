import React, { useState } from "react";

const AddInventory = () => {
  const [formData, setFormData] = useState({
    inventoryname: "",
    inventorytype: "",
    quantity: "",
    price: "",
    supplier: "",
    expierydate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:7000/api/inventory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          inventoryname: "",
          inventorytype: "",
          quantity: "",
          price: "",
          supplier: "",
          expierydate: "",
        });
        alert("Plant added successfully!");
      } else {
        alert("Failed to add plant");
      }
    } catch (error) {
      console.error("Error adding plant:", error);
      alert("An error occurred while adding the plant");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Update Inventory
      </h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleUpdate}>
          {/* Inventory Name */}
          <div className="mb-4">
            <label htmlFor="inventoryname" className="block text-gray-700 mb-1">
              Inventory Name:
            </label>
            <input
              type="text"
              id="inventoryname"
              name="inventoryname"
              value={inventory.inventoryname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Inventory Type */}
          <div className="mb-4">
            <label htmlFor="inventorytype" className="block text-gray-700 mb-1">
              Inventory Type:
            </label>
            <select
              id="inventorytype"
              name="inventorytype"
              value={inventory.inventorytype}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Inventory Type</option>
              <option value="Garden_Tools">Garden Tools</option>
              <option value="Fertilizer">Fertilizer</option>
              <option value="Seeds">Seeds</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-700 mb-1">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={inventory.quantity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 mb-1">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={inventory.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Supplier */}
          <div className="mb-4">
            <label htmlFor="supplier" className="block text-gray-700 mb-1">
              Supplier:
            </label>
            <input
              type="text"
              id="supplier"
              name="supplier"
              value={inventory.supplier}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Expierydate */}
          <div className="mb-4">
            <label htmlFor="expierydate" className="block text-gray-700 mb-1">
              Expiery date:
            </label>
            <input
              type="date"
              id="expierydate"
              name="expierydate"
              value={inventory.expierydate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default AddInventory;
