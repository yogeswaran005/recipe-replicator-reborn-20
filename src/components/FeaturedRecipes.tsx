
import React from 'react';
import RecipeCard from './RecipeCard';
import { Button } from '@/components/ui/button';

const FeaturedRecipes: React.FC = () => {
  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: 'Cinnamon Chia Seed Pudding',
      description: 'A low-sugar breakfast pudding rich in fiber to help control blood sugar spikes.',
      prepTime: '5 min',
      cookTime: '0 min',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    },
    {
      id: 2,
      title: 'Oatmeal with Berries and Flaxseed',
      description: 'A fiber-rich breakfast that helps lower LDL cholesterol and promote heart health.',
      prepTime: '5 min',
      cookTime: '5 min',
      image: 'https://images.unsplash.com/photo-1576781915079-5c5b20f14681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
    },
    {
      id: 3,
      title: 'Creamy Sweet Potato Soup',
      description: 'A gentle, non-irritating soup that soothes the digestive tract and provides essential nutrients.',
      prepTime: '10 min',
      cookTime: '25 min',
      image: ''
    },
    {
      id: 4,
      title: 'Mediterranean Chickpea Salad',
      description: 'A protein-rich salad with Mediterranean flavors that\'s perfect for lunch or a light dinner.',
      prepTime: '15 min',
      cookTime: '0 min',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      title: 'Potassium-Rich Banana Berry Smoothie',
      description: 'A delicious smoothie packed with potassium to help regulate blood pressure naturally.',
      prepTime: '5 min',
      cookTime: '0 min',
      image: ''
    },
    {
      id: 6,
      title: 'Zucchini Noodles with Turkey Meatballs',
      description: 'A low-carb, protein-rich alternative to traditional pasta dishes that\'s gentle on the stomach.',
      prepTime: '15 min',
      cookTime: '20 min',
      image: ''
    },
    {
      id: 7,
      title: 'Avocado and Bacon-Stuffed Chicken Breast',
      description: 'A keto-friendly, high-protein meal that\'s perfect for supporting muscle growth.',
      prepTime: '15 min',
      cookTime: '25 min',
      image: ''
    },
    {
      id: 8,
      title: 'Iron-Rich Lentil and Spinach Stew',
      description: 'A hearty, nutritious stew that\'s high in iron and plant-based proteins.',
      prepTime: '10 min',
      cookTime: '30 min',
      image: ''
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.slice(0, 8).map(recipe => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              prepTime={recipe.prepTime}
              cookTime={recipe.cookTime}
              image={recipe.image}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            View All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
