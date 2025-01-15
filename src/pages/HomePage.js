// src/pages/HomePage.js

import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ExploreStoryPage from './ExploreStoryPage';  // Import ExploreStoryPage component
import FamousDishesPage from './FamousDishesPage'; // Import FamousDishesPage component

const HomePage = () => {
  // Reference for the "Our Story" section to scroll to it
  const storyRef = useRef(null);

  // Reference for the "Famous Dishes" section to scroll to it
  const dishesRef = useRef(null);

  // Function to handle the button click to scroll to "Our Story" section
  const handleExploreStory = () => {
    // Scroll to the "Our Story" section smoothly
    storyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle the button click to scroll to "Famous Dishes" section
  const handleExploreDishes = () => {
    // Scroll to the "Famous Dishes" section smoothly
    dishesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section with Background Image */}
      <section
        className="relative bg-cover bg-center text-white py-32"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683586217802-038985b99189?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay to make the text readable */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content on top of the image */}
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to Aditea</h1>
          <p className="text-lg mb-4">
            At Aditea, we have been serving delicious meals and tea for over 25 years.
            Our legacy of exquisite flavors and warm hospitality continues to this day,
            making every meal a memorable experience.
          </p>
          <button
            onClick={handleExploreStory}
            className="bg-teal-800 px-6 py-3 rounded-lg text-white font-semibold"
          >
            Explore Our Story
          </button>
          <Link to="/menu">
            <button className="bg-teal-800 px-6 py-3 rounded-lg ml-4 text-white font-semibold">
              Explore Full Menu
            </button>
          </Link>
        </div>
      </section>

      {/* Embedded Famous Dishes Section */}
      <div ref={dishesRef}>
        <FamousDishesPage />
      </div>

      {/* Embedded Explore Our Story Section */}
      <div ref={storyRef}>
        <ExploreStoryPage />
      </div>
    </div>
  );
};

export default HomePage;
