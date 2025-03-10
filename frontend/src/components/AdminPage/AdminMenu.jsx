import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 p-6 border-r border-gray-300">
          <h1 className="mb-6 text-2xl font-bold text-gray-800">Admin Menu</h1>
          <div className="space-y-4">
            <Link to="/admin/create-category">
              <div className="p-4 transition duration-300 rounded-lg cursor-pointer hover:bg-gray-100">
                Create Category
              </div>
            </Link>
            <Link to="/admin/create-product">
              <div className="p-4 transition duration-300 rounded-lg cursor-pointer hover:bg-gray-100">
                Create Product
              </div>
            </Link>
            <Link to="/admin/users">
              <div className="p-4 transition duration-300 rounded-lg cursor-pointer hover:bg-gray-100">
                Users
              </div>
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 p-6 space-y-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">Admin Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Admin Name:</span>
                <span className="text-gray-800">admin</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Admin Email:</span>
                <span className="text-gray-800">admin@admin.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Admin Contact:</span>
                <span className="text-gray-800">123456789</span>
              </div>
            </div>
          </div>

          {/* You can add more sections here */}
        </div>
      </div>
    </div>
  );
}

export default AdminMenu;
