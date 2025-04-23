import React from "react";
import { Link } from "react-router-dom";
import admin from "../assets/fr-03.jpg";
import user1 from "../assets/user1.png";

import { BellAlertIcon } from "@heroicons/react/24/outline";

function ProfileBanner() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Link to="/profile">
          <img src={admin} className="rounded-full user-avatar w-[60px] h-[60px]" alt="" />
        </Link>
        <div>
          <p className="text-[#6f7b87]">Happy Monday!</p>
          <h2 className="font-medium text-xl text-[rgb(41,51,63)]">
            Diran Sai
          </h2>
        </div>
      </div>
      <div className="relative inline-block">
        <BellAlertIcon className="w-10 h-10 text-gray-700" />
        <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          3
        </span>
      </div>
    </div>
  );
}

export default ProfileBanner;
