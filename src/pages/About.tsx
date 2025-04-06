
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ChatBubble from '@/components/ChatBubble';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">About Foodie Craft</h1>
            <p className="text-lg text-gray-600">
              Your hub for healthy, customized recipes for every dietary need.
            </p>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Foodie Craft, we believe everyone deserves access to delicious, 
                  health-conscious recipes tailored to their specific needs. Our mission 
                  is to empower people to take control of their health through food without 
                  sacrificing taste or enjoyment.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're managing diabetes, heart disease, or simply looking to 
                  maintain a balanced diet, our extensive recipe collection has been 
                  curated by nutritionists and chefs to ensure both health benefits 
                  and amazing flavor.
                </p>
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                  <Link to="/categories">Explore Our Recipes</Link>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Healthy food preparation" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Health-Focused</h3>
                <p className="text-gray-700">
                  All recipes are designed with specific health conditions in mind, ensuring 
                  you can find meals that suit your dietary requirements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Personalized</h3>
                <p className="text-gray-700">
                  Our AI assistant helps you discover recipes tailored to your specific 
                  health needs and taste preferences.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Delicious</h3>
                <p className="text-gray-700">
                  We believe healthy food should never compromise on taste. All our 
                  recipes are created to be both nutritious and delicious.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default About;
