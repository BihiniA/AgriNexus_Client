import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Shared components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Admin components
import AdminHeader from './components/Admin/Header';
import AdminSidebar from './components/Admin/SideBar';
import Admin from './components/Admin/Admin';
import PlantManagement from './components/Admin/Plant';
import TaskManagement from './components/Admin/Task';
import InventoryManagement from './components/Admin/Inventory';
import ProductManagement from './components/Admin/Product';
import OrderManagement from './components/Admin/Order';
import AddPlant from './components/Admin/AddPlant';
import AddTask from './components/Admin/AddTask';
import AddInventory from './components/Admin/AddInventory';
import AddProduct from './components/Admin/AddProduct';
import AddOrder from './components/Admin/AddOrder';
import UpdatePlant from './components/Admin/UpdatePlant';

// Customer components
import CustomerDashboard from './components/Customer/CusDashboard';
import CustomerSidebar from './components/Customer/CustomerSideBar';
import CustomerHeader from './components/Customer/Header';
import AddInquiry from './components/Customer/AddInquiry';
import InquiryList from "./components/Customer/InquiryList";

// Worker components
import WorkerDashboard from './components/Worker/workerDashboard';
import WorkerSidebar from './components/Worker/WorkerSideBar';
import WorkerHeader from './components/Worker/WorkerHeader';

// Delivery components
import DeliveryDashboard from './components/Delivery/deliveryDashboard';
import DeliverySidebar from './components/Delivery/DeliverySideBar';
import DeliveryHeader from './components/Delivery/DeliveryHeader';

// Layout component for user pages
const UserLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow">{children}</div>
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
      <AdminSidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <AdminHeader onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

// Layout component for customer pages
const CustomerLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-green-50">
      <CustomerSidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <CustomerHeader onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

// Layout component for worker pages
const WorkerLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-blue-50">
      <WorkerSidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <WorkerHeader onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

// Layout component for delivery pages
const DeliveryLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-yellow-50">
      <DeliverySidebar isOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DeliveryHeader onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* User Routes */}
        <Route
          path="/"
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path="/about"
          element={
            <UserLayout>
              <About />
            </UserLayout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <UserLayout>
              <Login />
            </UserLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <UserLayout>
              <SignUp />
            </UserLayout>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Admin />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/plants"
          element={
            <AdminLayout>
              <PlantManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/plants/add-plant"
          element={
            <AdminLayout>
              <AddPlant />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/plants/update/:id"
          element={
            <AdminLayout>
              <UpdatePlant />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/tasks"
          element={
            <AdminLayout>
              <TaskManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/tasks/add-task"
          element={
            <AdminLayout>
              <AddTask />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/inventory"
          element={
            <AdminLayout>
              <InventoryManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/inventories/add-inventory"
          element={
            <AdminLayout>
              <AddInventory />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminLayout>
              <ProductManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/products/add-product"
          element={
            <AdminLayout>
              <AddProduct />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <AdminLayout>
              <OrderManagement />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/orders/add-order"
          element={
            <AdminLayout>
              <AddOrder />
            </AdminLayout>
          }
        />

        {/* Customer Routes */}
        <Route
          path="/customer"
          element={
            <CustomerLayout>
              <CustomerDashboard />
            </CustomerLayout>
          }
        />
        <Route
          path="/customer/addinquiry"
          element={
            <CustomerLayout>
              <AddInquiry />
            </CustomerLayout>
          }
        />
        <Route
          path="/customer/inquirylist"
          element={
            <CustomerLayout>
              <InquiryList />
            </CustomerLayout>
          }
        />

        {/* Worker Routes */}
        <Route
          path="/worker"
          element={
            <WorkerLayout>
              <WorkerDashboard />
            </WorkerLayout>
          }
        />

        {/* Delivery Routes */}
        <Route
          path="/delivery"
          element={
            <DeliveryLayout>
              <DeliveryDashboard />
            </DeliveryLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
