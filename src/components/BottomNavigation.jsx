import {
    HomeIcon,
    BanknotesIcon,
    UserCircleIcon,
    ClipboardDocumentListIcon,
  } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
  
  function BottomNavigation() {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
          <Link to="/">
            <NavItem icon={<HomeIcon className="h-6 w-6" />} label="Home" />
          </Link>
          <Link to="/loan">
            <NavItem icon={<BanknotesIcon className="h-6 w-6" />} label="Get Loan" />
          </Link>
          <Link>
            <NavItem icon={<ClipboardDocumentListIcon className="h-6 w-6" />} label="Loan Profile" />
          </Link>
          <Link to="/profile">
            <NavItem icon={<UserCircleIcon className="h-6 w-6" />} label="Profile" />
          </Link>
        </div>
      </div>
    );
  }
  
  function NavItem({ icon, label }) {
    return (
      <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer transition">
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </div>
    );
  }
  
  export default BottomNavigation;
  