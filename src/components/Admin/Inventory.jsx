import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InventoryManagement = () => {
  const [inventories, setInventories] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch inventories from the backend
  useEffect(() => {
    fetch("http://localhost:7000/api/inventories")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setInventories(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching inventories:", error));
  }, []);

  // Add a new inventory (Navigate to add page)
  const handleAddInventory = () => {
    navigate("/admin/inventories/add-inventory");
  };

  // Update a inventory (Navigate to update page)
  const handleUpdateInventory = (id) => {
    navigate(`/admin/inventories/update/${id}`);
  };

  // Delete a inventory from the backend
  const handleDeleteInventory = async (id) => {
    if (window.confirm("Are you sure you want to delete this inventory?")) {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `http://localhost:7000/api/delete/inventory//${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          setInventories(
            inventories.filter((inventory) => inventory._id !== id)
          );
        } else {
          console.error("Failed to delete inventory");
        }
      } catch (error) {
        console.error("Error deleting inventory:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  // Filter inventorys based on search term
  const filteredInventories = inventories.filter((inventory) =>
    inventory.inventoryname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <button
          onClick={handleAddInventory}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors border border-green-700"
        >
          Add New Inventory
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Inventory Name"
          className="px-4 py-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">
                Inventory Name
              </th>
              <th className="border border-gray-300 px-4 py-2">
                Inventory Type
              </th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-12 py-2">Supplier</th>
              <th className="border border-gray-300 px-12 py-2">
                Expiery Date
              </th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventories.map((inventory) => (
              <tr key={inventory._id}>
                <td className="border border-gray-300 px-4 py-2">
                  {inventory.inventoryname}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {inventory.inventorytype}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {inventory.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {inventory.price}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {inventory.supplier}
                </td>
                {/* <td className="border border-gray-300 px-4 py-2">{inventory.expierydate}</td> */}
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(inventory.expierydate).toISOString().split("T")[0]}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateInventory(inventory._id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteInventory(inventory._id)}
                      disabled={loading} // Disable button during loading
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      {loading ? "Deleting..." : "Delete"}
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

export default InventoryManagement;
