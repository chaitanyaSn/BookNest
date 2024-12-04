import React, { useEffect } from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const sidebar = document.getElementById("sidebar");
      if (sidebar && !sidebar.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white shadow-sm transition-all duration-300 z-40
          sm:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 p-2 rounded-lg hover:bg-gray-100 sm:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-4">
          <h2 className="font-semibold mb-4">Filters</h2>

          <form className="space-y-4">
        

            <div>
              <label className="block text-sm font-medium mb-1">Branch</label>
              <select className="w-full px-3 py-2 border rounded-lg">
                <option>All Branch</option>
                <option>Computer</option>
                <option>Electrical</option>
                <option>Mechanical</option>
                <option>Civil</option>
                <option>Chemical</option>
                <option>ENTC</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <select className="w-full px-3 py-2 border rounded-lg">
                <option>Year</option>
                <option>1st year</option>
                <option>2nd year</option>
                <option>3rd year</option>
                <option>4th year</option>
              </select>
            </div>

           
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
