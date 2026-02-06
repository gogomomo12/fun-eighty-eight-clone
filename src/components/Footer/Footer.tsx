export const Footer = () => {
  const infoLinks = [
    'About Us',
    'Terms & Conditions',
    'Responsible Gaming',
    'Privacy Notice & Cookies',
    'Affiliate Program',
    'Betting Mechanics',
    'Betting Conditions',
  ];

  const sectionLinks = [
    'Sports',
    'Games',
    'Promotions',
    'Sponsors',
  ];

  const helpLinks = [
    'FAQ',
    'Deposit',
    'Withdraw',
    'Refund Policy',
  ];

  const regionalSites = [
    'Fun88 Vietnam', 'Fun88 Vietnam 1', 'Fun88 Vietnam EN',
    'Fun88 Thailand', 'Fun88 Thailand 1', 'Fun88 Thailand EN',
    'Fun88 China', 'Fun88 Mexico', 'Fun88 Chile',
    'Fun88 Argentina', 'Fun88 Paraguay', 'Fun88 India', 'Fun88 Global',
  ];

  return (
    <footer className="bg-[#0a1628] text-primary pt-8 pb-52">
      {/* Links Section */}
      <div className="px-4 grid grid-cols-2 gap-6 mb-8">
        {/* Information */}
        <div>
          <h3 className="text-primary font-bold mb-3 uppercase text-sm">Information</h3>
          <ul className="space-y-2">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-primary hover:opacity-80 transition-opacity">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Sections */}
        <div>
          <h3 className="text-primary font-bold mb-3 uppercase text-sm">Our Sections</h3>
          <ul className="space-y-2">
            {sectionLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-primary hover:opacity-80 transition-opacity">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-primary font-bold mb-3 uppercase text-sm">Help</h3>
          <ul className="space-y-2">
            {helpLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-primary hover:opacity-80 transition-opacity">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-primary font-bold mb-3 uppercase text-sm">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm text-primary hover:opacity-80 transition-opacity">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* App Download Buttons */}
      <div className="px-4 flex gap-3 mb-8">
        <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white text-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
          App Store
        </button>
        <button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg text-white text-sm">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          Android APK
        </button>
      </div>

      {/* Regional Sites */}
      <div className="px-4 mb-8">
        <div className="flex flex-wrap justify-center gap-2 text-xs text-primary">
          {regionalSites.map((site, index) => (
            <span key={site}>
              <a href="#" className="hover:opacity-80 transition-opacity">
                {site}
              </a>
              {index < regionalSites.length - 1 && <span className="mx-1">|</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="px-4 flex justify-center gap-4 mb-8">
        {/* Telegram */}
        <a href="#" className="w-10 h-10 bg-[#0088cc] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        {/* X/Twitter */}
        <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        {/* TikTok */}
        <a href="#" className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>
        {/* YouTube */}
        <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>

      {/* Partnership Logo */}
      <div className="px-4 flex justify-center items-center gap-4 mb-6">
        <div className="text-primary font-bold text-xl flex items-center gap-2">
          <span className="text-2xl">⚽</span>
          <span className="border-r border-primary pr-4">Newcastle United</span>
          <span>
            <span className="text-primary">FUN</span>
            <span className="text-accent">88</span>
          </span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-4 flex justify-center items-center gap-4 mb-6">
        <span className="text-xs text-primary border border-primary px-2 py-1 rounded">18+</span>
        <span className="text-xs text-primary border border-primary px-2 py-1 rounded">🔒 SSL Secure</span>
      </div>

      {/* Legal Disclaimer */}
      <div className="px-4 text-center">
        <p className="text-xs text-primary leading-relaxed">
          WWW.FUN88.COM - Online gaming platform. Games prohibited for minors,
          play responsibly. Do not forget that the main purpose is recreation,
          fun and entertainment.
        </p>
      </div>

      {/* Spacer for bottom navigation */}
      <div className="h-20" />
    </footer>
  );
};
