import React, { useState } from 'react';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    qty: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'qty' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/admin/orders/add-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Reset form after successful submission
        setFormData({ name: '', qty: 0 });
        alert('Order added successfully!');
      } else {
        alert('Failed to add order');
      }
    } catch (error) {
      console.error('Error adding order:', error);
      alert('An error occurred while adding the order');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Add Order</h2>
      
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
        
        <div className="mb-6">
          <label htmlFor="qty" className="block text-gray-700 mb-1">Qty:</label>
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

export default AddOrder;