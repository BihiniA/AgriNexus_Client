import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Admin/Header';
import Sidebar from './components/Admin/SideBar';
import Admin from './components/Admin/Admin';
import PlantManagement from './components/Admin/Plant';
import TaskManagement from './components/Admin/Task';
import InventoryManagement from './components/Admin/Inventory';
import PrductManagement from './components/Admin/Product';
import OrderManagement from './components/Admin/Order';
import AddPlant from './components/Admin/AddPlant';
import AddTask from './components/Admin/AddTask';
import AddInventory from './components/Admin/AddInventory';
import AddProduct from './components/Admin/AddProduct';
import AddOrder from './components/Admin/AddOrder';
import UpdatePlant from './components/Admin/UpdatePlant';

// Layout component for user pages
const UserLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

// Layout component for admin pages
const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes with Navbar and Footer */}
        <Route path="/" element={
          <UserLayout>
            <Home />
          </UserLayout>
        } />
        <Route path="/about" element={
          <UserLayout>
            <About />
          </UserLayout>
        } />
        <Route path="/sign-in" element={
          <UserLayout>
            <Login />
          </UserLayout>
        } />
        <Route path="/sign-up" element={
          <UserLayout>
            <SignUp />
          </UserLayout>
        } />
        
        {/* Admin Routes with Admin Layout */}
        <Route path="/admin" element={
          <AdminLayout>
            <Admin />
          </AdminLayout>
        } />
        <Route path="/admin/plants" element={
          <AdminLayout>
            <PlantManagement />
          </AdminLayout>
        } />
        <Route path="/admin/plants/add-plant" element={
          <AdminLayout>
            <AddPlant />
          </AdminLayout>
        } />
        <Route path="/admin/plants/update/:id" element={
          <AdminLayout>
            <UpdatePlant />
          </AdminLayout>
        } />
        <Route path="/admin/tasks" element={
          <AdminLayout>
            <TaskManagement />
          </AdminLayout>
        } />
        <Route path="/admin/tasks/add-task" element={
          <AdminLayout>
            <AddTask />
          </AdminLayout>
        } />
        <Route path="/admin/inventory" element={
          <AdminLayout>
            <InventoryManagement />
          </AdminLayout>
        } />
        <Route path="/admin/inventories/add-inventory" element={
          <AdminLayout>
            <AddInventory />
          </AdminLayout>
        } />
        <Route path="/admin/products" element={
          <AdminLayout>
            <PrductManagement />
          </AdminLayout>
        } />
        <Route path="/admin/products/add-product" element={
          <AdminLayout>
            <AddProduct />
          </AdminLayout>
        } />
        <Route path="/admin/orders" element={
          <AdminLayout>
            <OrderManagement />
          </AdminLayout>
        } />
         <Route path="/admin/orders/add-order" element={
          <AdminLayout>
            <AddOrder />
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;