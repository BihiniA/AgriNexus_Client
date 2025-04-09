import React, { useState } from 'react';

const AddInquiry = () => {
    const [formData, setFormData] = useState({
        plantName: '',
        customerName: '',
        customerEmail: '',
        message: '',
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
            const response = await fetch('http://localhost:7000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    plantName: '',
                    customerName: '',
                    customerEmail: '',
                    message: '',
                });
                alert('Inquiry submitted successfully!');
            } else {
                alert('Failed to submit inquiry.');
            }
        } catch (error) {
            console.error('Error submitting inquiry:', error);
            alert('An error occurred while submitting the inquiry.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white border-2 border-green-500 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Add Inquiry</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="plantName" className="block text-gray-700 mb-1">Plant Name</label>
                    <input
                        type="text"
                        id="plantName"
                        name="plantName"
                        value={formData.plantName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="customerName" className="block text-gray-700 mb-1">Customer Name</label>
                    <input
                        type="text"
                        id="customerName"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="customerEmail" className="block text-gray-700 mb-1">Customer Email</label>
                    <input
                        type="email"
                        id="customerEmail"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
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

export default AddInquiry;
