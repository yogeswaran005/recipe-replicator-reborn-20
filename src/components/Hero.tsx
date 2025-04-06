
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div 
      className="relative bg-cover bg-center min-h-[500px] flex items-center"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
      }}
    >
      <div className="container-custom text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">FOODIE CRAFT</h1>
        <p className="text-xl md:text-2xl mb-8">Your food, your way... Craft your perfect meal anytime!</p>
        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
