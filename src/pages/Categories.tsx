
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HealthCategories from '@/components/HealthCategories';
import ChatBubble from '@/components/ChatBubble';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">Recipe Categories</h1>
            <p className="text-lg text-gray-600">
              Browse our collection of health-focused recipes designed for specific health conditions and dietary preferences.
            </p>
          </div>
        </div>
        <HealthCategories />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Categories;
