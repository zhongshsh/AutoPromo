import { Home, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            isActive("/")
              ? "text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link
          to="/community"
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            isActive("/community")
              ? "text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs mt-1">Community</span>
        </Link>

        <Link
          to="/my"
          className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
            isActive("/my")
              ? "text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">My</span>
        </Link>
      </div>
    </nav>
  );
}