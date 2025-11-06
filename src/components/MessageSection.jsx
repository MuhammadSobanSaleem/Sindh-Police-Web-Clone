import React from 'react';
import { Button } from './ui/button';
import DGIP from '../assets/DGIP.jpg';

const MessageSection = () => {
  return (
    <div className="bg-linear-to-br from-[#8b9dc3] via-[#b8a3c5] to-[#dfa7b8] py-16 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto flex gap-10 items-start flex-col lg:flex-row">
        {/* Officer Image */}
        <div className="shrink-0">
          <img 
            src={DGIP}
            alt="DIGP Syed Peer Muhammad Shah" 
            className="w-[350px] h-auto border-8 border-white rounded-lg shadow-lg"
          />
        </div>
        
        {/* Message Content */}
        <div className="flex-1 relative">
          <h1 className="text-[#c41e3a] text-4xl font-bold mb-8 leading-tight">
            Message Of DIGP Syed Peer Muhammad Shah, PSP, QPM, & Bar, PPM, T.st
          </h1>
          
          <div className="text-[#2c3e50]">
            <h2 className="text-2xl font-bold mt-6 mb-4">
              To the General Public and Police Officials,
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-5">
              As the DIGP Traffic Karachi, I extend my warm regards to all citizens and dedicated police officials of our 
              vibrant city. Our collective goal is to create a safer and more efficient traffic system that benefits 
              everyone. Achieving this requires cooperation, adherence to traffic laws, and a shared commitment to 
              improving our city's roads.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">
              To the General Public:
            </h2>
            <p className="text-lg leading-relaxed text-justify mb-5">
              Your role is crucial in making Karachi's roads safer. By following traffic rules, driving responsibly, and 
              being considerate of other road users, you contribute significantly to reducing accidents and traffic congestion. 
              Simple actions like obeying speed limits, using seat belts, and avoiding mobile phone use while driving can make 
              a substantial difference. Remember, road safety is a shared responsibility, and your cooperation is essential 
              for the well-being of our community.
            </p>
            
            <h2 className="text-2xl font-bold mt-6 mb-4">
              To the Police Officials:...
            </h2>
          </div>
          
          <Button variant="readmore" className="absolute -bottom-5 right-0 px-9 py-3">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;