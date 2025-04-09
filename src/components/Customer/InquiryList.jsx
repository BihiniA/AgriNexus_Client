import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Display Inquiry List
const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch inquiries from the backend
  useEffect(() => {
    fetch("http://localhost:7000/api/getall")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Debug log
        // Check if the response contains the expected array
        if (Array.isArray(data)) {
          setInquiries(data); // Set inquiries if data is an array
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching inquiries:", error));
  }, []);

  // Delete inquiry
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:7000/api/getall/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          setInquiries(inquiries.filter((inq) => inq._id !== id)); // Remove inquiry from the list
        } else {
          console.error("Failed to delete inquiry");
        }
      } catch (error) {
        console.error("Error deleting inquiry:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // Filter inquiries based on search term
  const filteredInquiries = inquiries.filter((inq) =>
    inq.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.customerEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">User Inquiries</h2>

      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Name or Email"
          className="px-4 py-2 w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Plant Name</th>
              <th className="border border-gray-300 px-4 py-2">Customer Name</th>
              <th className="border border-gray-300 px-4 py-2">Customer Email</th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredInquiries.length > 0 ? (
              filteredInquiries.map((inq) => (
                <tr key={inq._id}>
                  <td className="border border-gray-300 px-4 py-2">{inq.plantName}</td>
                  <td className="border border-gray-300 px-4 py-2">{inq.customerName}</td>
                  <td className="border border-gray-300 px-4 py-2">{inq.customerEmail}</td>
                  <td className="border border-gray-300 px-4 py-2">{inq.message}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(inq._id)}
                      disabled={loading}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      {loading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No inquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiryList;
