import { Link } from "react-router-dom";

function Users() {
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
          
          <h1>All Users</h1>

          {/* You can add more sections here */}
        </div>
      </div>
    </div>
  );
}

export default Users;
