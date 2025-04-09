import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNic] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      fullName,
      email,
      type,
      address,
      nic,
      contactNo,
      password,
    };

    try {
      const response = await axios.post('http://localhost:7000/api/user', userData);
      alert('User registered successfully!');

      switch (type) {
        case 'admin':
          navigate('/admin');
          break;
        case 'customer':
          navigate('/customer-dashboard');
          break;
        case 'worker':
          navigate('/worker-dashboard');
          break;
        case 'delivery':
          navigate('/delivery-dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || 'Registration failed';
      alert(errMsg);
    }
  };

  const navigateToSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-md">
            <UserPlus className="h-8 w-8 text-white animate-pulse" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={navigateToSignIn}
              className="font-medium text-green-600 hover:text-green-500 underline"
            >
              Sign in here
            </button>
          </p>
        </div>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <InputField label="Full Name" value={fullName} onChange={setFullName} id="fullname" placeholder="John Doe" />
          <InputField label="Email" value={email} onChange={setEmail} type="email" id="email" placeholder="example@mail.com" />
          
          <div className="relative">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide absolute -top-3 left-2 bg-white px-1">User Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option value="">-- Select Type --</option>
              <option value="customer">Customer</option>
              <option value="worker">Worker</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>

          <InputField label="Address" value={address} onChange={setAddress} id="address" placeholder="123, Street Name" />
          <InputField label="NIC" value={nic} onChange={setNic} id="nic" placeholder="123456789V" />
          <InputField label="Contact No" value={contactNo} onChange={setContactNo} id="contact" placeholder="0771234567" />
          <InputField label="Password" value={password} onChange={setPassword} type="password" id="password" placeholder="••••••••" />
          <InputField label="Confirm Password" value={confirmPassword} onChange={setConfirmPassword} type="password" id="confirm-password" placeholder="••••••••" />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">Terms of Service</a> and{' '}
              <a href="#" className="font-medium text-green-600 hover:text-green-500">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transform hover:-translate-y-1 shadow-lg"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <UserPlus className="h-5 w-5 text-green-100 group-hover:text-white" />
            </span>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, id, type = 'text', placeholder }) {
  return (
    <div className="relative">
      <label htmlFor={id} className="text-xs font-semibold text-gray-500 uppercase tracking-wide absolute -top-3 left-2 bg-white px-1">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all sm:text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
