import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PlantManagement = () => {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State to track the search term
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch plants from the backend
    useEffect(() => {
        fetch("http://localhost:7000/api/plants")
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setPlants(data);
                } else {
                    console.error("Invalid data format:", data);
                }
            })
            .catch((error) => console.error("Error fetching Inquiry:", error));
    }, []);

    // Add a Inquiry (Navigate to add Inquiry page)
    const handleAddInquiry = () => {
        navigate("/admin/inquiries/add-inquiry");
    };

    // Filter plants based on search term
    const filteredPlants = plants.filter((plant) =>
        plant.plantname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">

            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Plant Name"
                    className="px-4 py-2 w-full border border-gray-300 rounded-md"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">Plant Name</th>
                            <th className="border border-gray-300 px-4 py-2">Scientific Name</th>
                            <th className="border border-gray-300 px-4 py-2">Plant Type</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-12 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Watering Frequency</th>
                            <th className="border border-gray-300 px-4 py-2">Temperature</th>
                            <th className="border border-gray-300 px-4 py-2">Light</th>
                            <th className="border border-gray-300 px-4 py-2">Available Quantity</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Origin</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPlants.map((plant) => (
                            <tr key={plant._id}>
                                <td className="border border-gray-300 px-4 py-2">{plant.plantname}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.sciencename}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.planttype}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.plantcategory}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.wateringfeq}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.temp}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.light}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.avalquaantity}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.priceunit}</td>
                                <td className="border border-gray-300 px-4 py-2">{plant.origin}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={handleAddInquiry}
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors border border-green-700"
                                        >
                                            Add New Inquiry
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

export default PlantManagement;
