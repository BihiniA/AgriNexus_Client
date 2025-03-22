import React, { useState } from 'react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    qty: 0,
    Price: 0,
    image: null, // image should be handled as a file
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Store the first file selected
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === 'qty' || name === 'Price' ? parseInt(value) || 0 : value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data to verify if it's correct
    console.log('Form Data:', formData);

    // Check if category is selected
    if (!formData.category) {
      setErrorMessage('Please select a category.');
      return;
    }

    // Prepare form data for sending to the backend
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('qty', formData.qty);
    formDataToSend.append('Price', formData.Price);
    formDataToSend.append('image', formData.image);

    try {
      const response = await fetch('http://localhost:7000/api/product', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Reset the form data and show success message
        setFormData({ name: '', category: '', qty: 0, Price: 0, image: null });
        setSuccessMessage('Product added successfully!');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      setErrorMessage('An error occurred while adding the product');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Add Product</h2>
      
      {/* Display success or error messages */}
      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}
      
      // Add name
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-1">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          >
            <option value="">Select Category</option>
            <option value="seeds">Seeds</option>
            <option value="tools">Tools</option>
            <option value="product">Product</option>
            <option value="fertilizer">Fertilizer</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="qty" className="block text-gray-700 mb-1">Quantity:</label>
          <input
            type="number"
            id="qty"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="Price" className="block text-gray-700 mb-1">Price:</label>
          <input
            type="number"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 mb-1">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
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

export default AddProduct;
