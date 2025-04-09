import React, { useState } from 'react';

// Add Inquiry Reply
const AddInquiryReply = () => {
    const [formData, setFormData] = useState({
        plantname: '',
        reply: '',
        planttype: '',
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
                    reply: '',
                    planttype: '',
                });
                alert('Inquiry reply added successfully!');
            } else {
                alert('Failed to add inquiry reply');
            }
        } catch (error) {
            console.error('Error adding inquiry reply:', error);
            alert('An error occurred while adding the inquiry reply');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Add Inquiry Reply</h2>

            <form onSubmit={handleSubmit}>
                {/* Inquiry reply */}
                <div className="mb-4">
                    <label htmlFor="reply" className="block text-gray-700 mb-1">Inquiry reply:</label>
                    <input
                        type="text"
                        id="reply"
                        name="reply"
                        value={formData.reply}
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

export default AddInquiryReply;
