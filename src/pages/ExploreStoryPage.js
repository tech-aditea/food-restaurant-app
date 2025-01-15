 

import React from 'react';

const ExploreStoryPage = () => {
  return (
    <section className="py-16 bg-gray-100  ml-7 mr-7">
      <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-left px-6">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <p className="text-lg mb-4">
            Welcome to Aditea, a place that’s more than just a restaurant. Aditea is a timeless journey through history, culture, and flavor. For over 25 years, our establishment has been a welcoming hub where generations of tea lovers, food enthusiasts, and cultural explorers gather to experience a blend of culinary traditions passed down through the ages.
          </p>
          <p className="text-lg mb-4">
            Located in a historical building that has been carefully preserved, our restaurant is home to an incredible collection of vintage artifacts. These treasures, which range from old violins to early audio players, are an ode to the rich cultural heritage of our nation. Walking through the restaurant, you'll find yourself surrounded by relics that span several generations, offering a glimpse into the past while you savor the delicious dishes we prepare with love.
          </p>
          <p className="text-lg mb-4">
            But it’s not just the artifacts that make Aditea special – it's the ambiance. The walls echo with the stories of a bygone era, beautifully preserved to keep the charm of the place alive. From the old wooden beams to the intricate carvings, the atmosphere at Aditea is steeped in history. The lighting, carefully chosen décor, and vintage furnishings transport you to a time when life was slower, but every moment was lived with intention and joy. Our walls have witnessed conversations and laughter from visitors dating back to pre-independence India, where stories of freedom and cultural revival were told over tea and delicious food.
          </p>
          <p className="text-lg mb-4">
            Our connection to pre-independence India is deep. Aditea has long been a gathering place for those who dreamed of a free and united India. The building itself was once a meeting ground for thinkers, revolutionaries, and artists who gathered here to discuss their hopes for the future. Today, we honor that legacy by not only serving traditional foods but by creating an environment where every guest can feel a connection to the past and experience the future of India through its cuisine.
          </p>
          <p className="text-lg mb-4">
            Every time you step into Aditea, you're stepping into history. You’re becoming a part of our story, and we welcome you to continue this journey with us. Our place is not just about food, it's about experiencing something timeless.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col space-y-4 px-6">
          <img
            src="https://i.pinimg.com/736x/09/ca/e3/09cae36eb1be01629d72a434322a1685.jpg"
            alt="Historical Artifact"
            className="w-full h-90% object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ExploreStoryPage;
