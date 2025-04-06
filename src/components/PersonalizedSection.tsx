
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const PersonalizedSection: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <section className="bg-dark-section py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Personalized Recommendations</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Chat with our AI assistant to discover recipes tailored to your specific health needs
        </p>
        {!user ? (
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6" asChild>
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        ) : (
          <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">
            Start Chat Now
          </Button>
        )}
      </div>
    </section>
  );
};

export default PersonalizedSection;
