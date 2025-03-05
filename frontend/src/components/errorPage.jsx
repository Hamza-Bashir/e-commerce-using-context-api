import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-10 text-center bg-white rounded-lg">
        <h1 className="mb-6 text-6xl font-extrabold text-blue-600">404</h1>
        <p className="mb-8 text-2xl font-semibold">Page Not Found</p>
        <Link to="/">
          <button className="px-6 py-3 text-xl text-white transition bg-blue-500 rounded-lg hover:bg-blue-400">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
