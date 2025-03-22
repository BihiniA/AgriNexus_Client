import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulating fetching data
    const mockProducts = [
      { id: '1', a: 'Aloe Vera', b: 'Succulent', c: 'Low water' },
      { id: '2', a: 'Monstera', b: 'Tropical', c: 'Medium water' },
    ];
    setProducts(mockProducts);
  }, []);
  
  const handleAddProduct = () => {
    navigate('/admin/products/add-product');
  };
  
  const handleUpdateProduct = (id) => {
    // Implement update logic
    console.log(`Update product with id: ${id}`);
  };
  
  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
    
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <button
          onClick={handleAddProduct}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors border border-green-700"
        >
          Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">A</th>
              <th className="border border-gray-300 px-4 py-2 text-left">B</th>
              <th className="border border-gray-300 px-4 py-2 text-left">C</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 px-4 py-2">{product.a}</td>
                <td className="border border-gray-300 px-4 py-2">{product.b}</td>
                <td className="border border-gray-300 px-4 py-2">{product.c}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateProduct(product.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;