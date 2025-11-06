import React from 'react'

const WelcomeSection = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          Welcome to Traffic Police Karachi
        </h2>

        {/* red underline */}
        <div className="h-1 w-16 bg-red-600 rounded mx-auto mt-3 mb-8"></div>

        <p className="text-xl md:text-3xl leading-relaxed w-[70vw] mx-auto text-gray-700">
          The Sindh Police in pursuit of its mission, believes in providing
          quality service with the highest possible degree of excellence,
          based upon the principles
        </p>
      </div>
    </section>
  )
}

export default WelcomeSection