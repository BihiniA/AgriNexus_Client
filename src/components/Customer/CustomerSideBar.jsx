import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  ShoppingBag,
  Settings,
  BarChart2,
  FileText,
  HelpCircle,
  LogOut
} from 'lucide-react';

const Sidebar = ({ isOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: <Home size={20} />, title: 'Plants', path: '/customer/plant' },
    { icon: <Users size={20} />, title: 'Inquiries', path: '/customer/inquirylist' },
    { icon: <Users size={20} />, title: 'Tasks', path: '/customer/tasks' },
    { icon: <ShoppingBag size={20} />, title: 'Inventory', path: '/customer/inventory' },
    { icon: <BarChart2 size={20} />, title: 'Products', path: '/customer/products' },
    { icon: <BarChart2 size={20} />, title: 'Payments', path: '/customer/payments' },
    { icon: <FileText size={20} />, title: 'Orders', path: '/customer/orders' },
    { icon: <FileText size={20} />, title: 'Delivery', path: '/customer/delivery' },
    { icon: <Settings size={20} />, title: 'Settings', path: '/admin/settings' },
    { icon: <HelpCircle size={20} />, title: 'Help', path: '/admin/help' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      } flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-center h-16 border-b">
        {isOpen ? (
          <h2 className="text-xl font-bold text-blue-600">Dashboard</h2>
        ) : (
          <span className="text-xl font-bold text-blue-600">AP</span>
        )}
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
        <ul>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center px-4 py-3 w-full text-left ${
                    isActive
                      ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="inline-flex items-center justify-center h-6 w-6">
                    {item.icon}
                  </span>
                  {isOpen && <span className="ml-3">{item.title}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-200 p-4">
        <button
          onClick={() => navigate('/logout')}
          className="flex items-center text-red-500 hover:bg-red-50 p-2 rounded-md w-full"
        >
          <LogOut size={20} />
          {isOpen && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
