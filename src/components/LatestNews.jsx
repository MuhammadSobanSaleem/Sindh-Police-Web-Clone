import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import rulesImage from '../assets/rules.jpg';
import newsImg1 from '../assets/NewsImg1.jpg';
import newsImg2 from '../assets/1377489503_69098b812ef98.jpeg';
import newsImg3 from '../assets/936628030_690a2aff74062.jpeg';

const LatestNews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      id: 1,
      type: 'image',
      image: rulesImage,
      title: 'ای ٹیکنگ کی جوابی سے شکایات کے ازالے کے لئے کراچی شہری سے مخت۔',
      date: '2025-10-31 10:32:57',
    },
    {
      id: 2,
      type: 'video',
      videoSrc: 'https://sindhpolice.gov.pk/storage/gallery/2004759805_69006662889e6.mp4',
      poster: 'https://sindhpolice.gov.pk/front_end/logos/sp_logo.png',
      title: 'نظام کے ذریعے اب چالان بوگاتوب کے ساتھ اور پہنچے گا آپ کے۔',
      date: '2025-10-28 11:44:50',
    },
    {
      id: 3,
      type: 'video',
      videoSrc: 'https://sindhpolice.gov.pk/storage/gallery/347031783_68ff0453285b1.mp4',
      poster: 'https://sindhpolice.gov.pk/front_end/logos/sp_logo.png',
      title: 'نظام کے ذریعے اب چالان بوگا نبوب کے ساتھ اور پہنچے گا آپ کے۔',
      date: '2025-10-27 10:34:11',
    },
    {
      id: 4,
      type: 'image',
      image: newsImg1,
      title: 'ڈی آئی جی پی ٹریفک کراچی کی زیر صدارت دفتریندا میں ایک اہم...',
      date: '2025-11-04 21:34:07',
    },
    {
      id: 5,
      type: 'image',
      image: newsImg2,
      title: 'شہر قائد میں ای چالان نظام کے نفاذ کے بعد موثر کارروائیاں',
      date: '2025-11-04 10:33:01',
    },
    {
      id: 6,
      type: 'image',
      image: newsImg3,
      title: 'تمام شہریوں کو مطلع کیا جاتا ہے کہ آپ سندھ پولیس کی آفیشل وی...',
      date: '2025-11-04 10:13:37',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % newsItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          - LATEST NEWS & EVENTS -
        </h2>

        {/* News Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8 text-gray-700" />
          </button>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Media Container */}
                <div className="relative bg-gray-200 aspect-video">
                  {item.type === 'image' ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video 
                        width="100%" 
                        height="100%" 
                        controls 
                        poster={item.poster}
                        className="w-full h-full object-cover"
                      >
                        <source src={item.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 text-right leading-relaxed min-h-[60px]">
                    {item.title}
                  </h3>

                  <button className="w-full bg-pink-100 hover:bg-pink-200 text-red-600 font-semibold py-3 rounded-md transition-colors duration-300 mb-4">
                    Click to explore more
                  </button>

                  <div className="text-gray-600 text-sm">
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;