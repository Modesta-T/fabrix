import React, { useState, useEffect } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, ResponsiveContainer 
} from 'recharts';
import { 
  Plus, Edit, Trash2, Package, DollarSign, 
  AlertTriangle, ShoppingCart 
} from 'lucide-react';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch products
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));

    // Mock sales data
    const mockSalesData = [
      { month: 'Jan', sales: 4000, inventory: 240 },
      { month: 'Feb', sales: 3000, inventory: 198 },
      { month: 'Mar', sales: 5000, inventory: 167 },
      { month: 'Apr', sales: 2780, inventory: 189 },
    ];
    setSalesData(mockSalesData);
  }, []);

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const SummaryCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
          <DollarSign className="h-4 w-4 text-gray-500" />
        </div>
        <div className="text-2xl font-bold">$45,231.89</div>
        <p className="text-xs text-gray-500">+20.1% from last month</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Products</h3>
          <Package className="h-4 w-4 text-gray-500" />
        </div>
        <div className="text-2xl font-bold">{products.length}</div>
        <p className="text-xs text-gray-500">+12 new products</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Low Stock</h3>
          <AlertTriangle className="h-4 w-4 text-gray-500" />
        </div>
        <div className="text-2xl font-bold">8</div>
        <p className="text-xs text-gray-500">Requires attention</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">Active Orders</h3>
          <ShoppingCart className="h-4 w-4 text-gray-500" />
        </div>
        <div className="text-2xl font-bold">25</div>
        <p className="text-xs text-gray-500">+2 shipping today</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <button 
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>

      <SummaryCards />

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="inventory" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Management Section */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Product Management</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 text-gray-600">Product</th>
                  <th className="text-left p-2 text-gray-600">Category</th>
                  <th className="text-left p-2 text-gray-600">Price</th>
                  <th className="text-left p-2 text-gray-600">Stock</th>
                  <th className="text-left p-2 text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-8 h-8 object-cover rounded"
                        />
                        <span className="text-sm">{product.title}</span>
                      </div>
                    </td>
                    <td className="p-2 text-sm">{product.category}</td>
                    <td className="p-2 text-sm">${product.price}</td>
                    <td className="p-2 text-sm">120</td>
                    <td className="p-2">
                      <div className="flex gap-2">
                        <button
                          className="p-1 hover:bg-gray-100 rounded"
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsEditing(true);
                          }}
                        >
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                        <button
                          className="p-1 hover:bg-gray-100 rounded"
                          onClick={() => handleDelete(product.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;