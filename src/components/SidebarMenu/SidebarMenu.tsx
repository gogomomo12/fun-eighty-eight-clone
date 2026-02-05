import { useEffect } from 'react';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { label: 'CASINO', hasDropdown: true },
    { label: 'SPORTS BETTING', hasDropdown: true },
    { label: 'MY PROFILE', hasDropdown: true },
    { label: 'USER VERIFICATION', hasDropdown: false },
    { label: 'CASHIER', hasDropdown: true },
    { label: 'FREE BONUS', hasDropdown: false },
    { label: 'REFERRALS', hasDropdown: false, badge: 'EARN UP TO $888' },
    { label: 'SUGGESTIONS', hasDropdown: false, icon: '🎁' },
    { label: 'PROMOTIONS', hasDropdown: false },
    { label: 'SPONSORS', hasDropdown: false },
    { label: 'BLOGS', hasDropdown: false },
    { label: 'NEWS', hasDropdown: false },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6">
          <h2 className="text-primary text-xl font-bold mb-6">WELCOME!</h2>

          {/* Login Button */}
          <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mb-3 hover:bg-primary-dark transition-colors">
            LOGIN
          </button>

          {/* Register Link */}
          <a
            href="#"
            className="block text-center text-primary font-medium underline hover:text-primary-dark"
          >
            REGISTER
          </a>
        </div>

        {/* Menu Items */}
        <nav className="border-t border-gray-200">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <span className="flex items-center gap-2 text-gray-700 font-medium">
                {item.label}
                {item.icon && <span>{item.icon}</span>}
                {item.badge && (
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </span>
              {item.hasDropdown && (
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          ))}
        </nav>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
