import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Update Plant details
const UpdatePlant = () => {
  const { id } = useParams(); // Get plant ID from the URL
  const navigate = useNavigate();
  const [plant, setPlant] = useState({
    plantname: "",
    sciencename: "",
    planttype: "",
    plantcategory: "",
    description: "",
    wateringfeq: "",
    temp: "",
    light: "",
    avalquaantity: "",
    priceunit: "",
    origin: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch plant details based on the ID
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:7000/api/plants/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setPlant(data);
        } else {
          console.error("Plant not found");
        }
      })
      .catch((error) => console.error("Error fetching plant details:", error))
      .finally(() => setLoading(false));
  }, [id]);

  // Handle plant update
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:7000/api/update/plant/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(plant),
      });

      if (response.ok) {
        alert("Plant updated successfully");
        navigate("/admin/plants"); // Redirect back to plant list
      } else {
        console.error("Failed to update plant");
      }
    } catch (error) {
      console.error("Error updating plant:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlant((prevPlant) => ({
      ...prevPlant,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Update Plant</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleUpdate}>
          {/* Plant Name */}
          <div className="mb-4">
            <label htmlFor="plantname" className="block text-gray-700 mb-1">Plant Name:</label>
            <input
              type="text"
              id="plantname"
              name="plantname"
              value={plant.plantname}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Science Name */}
          <div className="mb-4">
            <label htmlFor="sciencename" className="block text-gray-700 mb-1">Science Name:</label>
            <input
              type="text"
              id="sciencename"
              name="sciencename"
              value={plant.sciencename}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Plant Type */}
          <div className="mb-4">
            <label htmlFor="planttype" className="block text-gray-700 mb-1">Plant Type:</label>
            <select
              id="planttype"
              name="planttype"
              value={plant.planttype}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Plant Type</option>
              <option value="Herb">Herb</option>
              <option value="Shrub">Shrub</option>
              <option value="Tree">Tree</option>
              <option value="Flower">Flower</option>
            </select>
          </div>

          {/* Plant Category */}
          <div className="mb-4">
            <label htmlFor="plantcategory" className="block text-gray-700 mb-1">Plant Category:</label>
            <select
              id="plantcategory"
              name="plantcategory"
              value={plant.plantcategory}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Plant Category</option>
              <option value="Medicinal">Medicinal</option>
              <option value="Culinary">Culinary</option>
              <option value="Aromatic">Aromatic</option>
              <option value="Ornamental">Ornamental</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-1">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={plant.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Watering Frequency */}
          <div className="mb-4">
            <label htmlFor="wateringfeq" className="block text-gray-700 mb-1">Watering Frequency:</label>
            <select
              id="wateringfeq"
              name="wateringfeq"
              value={plant.wateringfeq}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Watering Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-weekly">Bi-weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Temperature */}
          <div className="mb-4">
            <label htmlFor="temp" className="block text-gray-700 mb-1">Temperature:</label>
            <input
              type="text"
              id="temp"
              name="temp"
              value={plant.temp}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Light */}
          <div className="mb-4">
            <label htmlFor="light" className="block text-gray-700 mb-1">Light:</label>
            <select
              id="light"
              name="light"
              value={plant.light}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select Light Requirement</option>
              <option value="Full Sun">Full Sun</option>
              <option value="Partial Shade">Partial Shade</option>
              <option value="Shade">Shade</option>
            </select>
          </div>

          {/* Available Quantity */}
          <div className="mb-4">
            <label htmlFor="avalquaantity" className="block text-gray-700 mb-1">Available Quantity:</label>
            <input
              type="number"
              id="avalquaantity"
              name="avalquaantity"
              value={plant.avalquaantity}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Price Unit */}
          <div className="mb-4">
            <label htmlFor="priceunit" className="block text-gray-700 mb-1">Price Unit:</label>
            <input
              type="text"
              id="priceunit"
              name="priceunit"
              value={plant.priceunit}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Origin */}
          <div className="mb-4">
            <label htmlFor="origin" className="block text-gray-700 mb-1">Origin:</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={plant.origin}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update Plant"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UpdatePlant;
