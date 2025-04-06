
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedRecipes from '@/components/FeaturedRecipes';
import HealthCategories from '@/components/HealthCategories';
import PersonalizedSection from '@/components/PersonalizedSection';
import Footer from '@/components/Footer';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  const heroImage = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero backgroundImage={heroImage} />
      <main>
        <HealthCategories />
        <FeaturedRecipes />
        <PersonalizedSection />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
