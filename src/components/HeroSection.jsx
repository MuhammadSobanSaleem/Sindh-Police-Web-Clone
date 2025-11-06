import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    '/src/assets/HeroImg1.jpg',
    '/src/assets/HeroImg2.jpg',
    '/src/assets/HeroImg3.jpg',
    '/src/assets/HeroImg4.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slideshow Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default HeroSection