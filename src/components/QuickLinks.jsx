import React from 'react';
import shieldIcon from '../assets/sheild_icon.png';
import announceIcon from '../assets/orders_notification_icon.png';
import QuickBg from '../assets/QuickLinksBg.jpg';

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      title: 'Press Release',
    },
    {
      id: 2,
      title: 'Tenders',
    },
    {
      id: 3,
      title: 'Transfer Posting',
    },
    {
      id: 4,
      title: 'Gallery',
    },
  ];

  return (
    <div className="bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 py-16 px-5 relative">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${QuickBg})` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          - QUICK LINKS -
        </h2>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {links.map((link) => (
            <div
              key={link.id}
              className="bg-white hover:bg-[#2B4FA0]
                rounded-lg shadow-lg p-8 flex flex-col items-center justify-center
                cursor-pointer transform transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                group"
            >
              {/* Shield Icon with Megaphone */}
              <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                {/* Shield Background */}
                <img 
                  src={shieldIcon} 
                  alt="Shield"
                  className="w-full h-full object-contain"
                />
                
                {/* Megaphone Icon */}
                <img 
                  src={announceIcon} 
                  alt="Announce"
                  className="absolute w-16 h-16 object-contain"
                />
              </div>

              {/* Link Title */}
              <h3 className="text-xl font-semibold text-center text-[#2B4FA0] group-hover:text-white transition-colors duration-300">
                {link.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;