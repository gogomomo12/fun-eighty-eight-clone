import { useState } from 'react';
import { SidebarMenu } from '../SidebarMenu/SidebarMenu';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        {/* App Download Banner */}
        <div className=" text-white px-4 py-2 flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xs">
              F88
            </div>
            <div className="text-xs">
              <p className="text-primary font-medium">Download the FUN88 app now!</p>
              <p className="text-gray-400 text-[10px]">Fast, fun and reliable FUN88</p>
            </div>
          </div>
          <button className="bg-primary text-white rounded text-xs font-medium flex items-center gap-1 px-3 py-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            GET
          </button>
        </div>

        {/* Main Header */}
        <div className="px-4 py-3 flex items-center justify-between p-3">
          {/* Hamburger Menu */}
          <button
            className="p-2 -ml-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-primary">FUN</span>
              <span className="text-primary">88</span>
            </span>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors px-3 py-2">
              LOGIN
            </button>
            <button className="bg-green-400 text-white rounded-full text-sm font-medium hover:bg-accent-dark transition-colors px-3 py-2">
              REGISTER
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};
