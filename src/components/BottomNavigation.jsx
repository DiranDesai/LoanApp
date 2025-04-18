import {
    HomeIcon,
    BanknotesIcon,
    UserCircleIcon,
    ClipboardDocumentListIcon,
  } from "@heroicons/react/24/outline";

import { Link, useLocation } from "react-router-dom";
  
  function BottomNavigation() {
    const location = useLocation();

    const navItems = [
      { to: "/", label: "Home", icon: HomeIcon },
      { to: "/loan", label: "Get Loan", icon: BanknotesIcon },
      { to: "/loan-profile", label: "Loan Profile", icon: ClipboardDocumentListIcon },
      { to: "/profile", label: "Profile", icon: UserCircleIcon },
    ];

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t border-gray-200 z-50">
        <div className="flex justify-around items-center py-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link to={to} key={label}>
            <NavItem
              icon={<Icon className="h-7 w-7" />}
              label={label}
              active={location.pathname === to}
            />
          </Link>
        ))}
        </div>
      </div>
    );
  }
  
  function NavItem({ icon, label, active }) {
    return (
      <div
        className={`flex flex-col items-center ${
          active ? "text-blue-500" : "text-gray-600"
        } hover:text-blue-500 cursor-pointer transition`}
      >
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </div>
    );
  }
  
  export default BottomNavigation;
  