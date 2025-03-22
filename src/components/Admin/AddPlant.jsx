import React, { useState } from 'react';

const AddPlant = () => {
  const [formData, setFormData] = useState({
    plantname: '',
    sciencename: '',
    planttype: '',
    plantcategory: '',
    description: '',
    plantsize: '',
    wateringfeq: '',
    temp: '',
    light: '',
    avalquaantity: '',
    priceunit: '',
    origin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7000/api/plant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          plantname: '',
          sciencename: '',
          planttype: '',
          plantcategory: '',
          description: '',
          plantsize: '',
          wateringfeq: '',
          temp: '',
          light: '',
          avalquaantity: '',
          priceunit: '',
          origin: '',
        });
        alert('Plant added successfully!');
      } else {
        alert('Failed to add plant');
      }
    } catch (error) {
      console.error('Error adding plant:', error);
      alert('An error occurred while adding the plant');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Add New Plant</h2>

      <form onSubmit={handleSubmit}>
        {/* Plant Name */}
        <div className="mb-4">
          <label htmlFor="plantname" className="block text-gray-700 mb-1">Plant Name:</label>
          <input
            type="text"
            id="plantname"
            name="plantname"
            value={formData.plantname}
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
            value={formData.sciencename}
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
            value={formData.planttype}
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
            value={formData.plantcategory}
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
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        {/* Plant Size */}
        <div className="mb-4">
          <label htmlFor="plantsize" className="block text-gray-700 mb-1">Plant Size:</label>
          <select
            id="plantsize"
            name="plantsize"
            value={formData.plantsize}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Select Plant Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Watering Frequency */}
        <div className="mb-4">
          <label htmlFor="wateringfeq" className="block text-gray-700 mb-1">Watering Frequency:</label>
          <select
            id="wateringfeq"
            name="wateringfeq"
            value={formData.wateringfeq}
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
            value={formData.temp}
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
            value={formData.light}
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
            value={formData.avalquaantity}
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
            value={formData.priceunit}
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
            value={formData.origin}
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
    </div>
  );
};

export default AddPlant;
