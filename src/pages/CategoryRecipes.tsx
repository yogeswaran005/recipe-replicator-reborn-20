
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import ChatBubble from '@/components/ChatBubble';
import { recipes } from '@/data/recipes';

const CategoryRecipes = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Map slugs to category titles
  const categoryTitles: Record<string, string> = {
    'diabetes': 'Diabetes Recipes',
    'heart-health': 'Heart Health Recipes',
    'ulcer': 'Ulcer Recipes',
    'blood-pressure': 'Blood Pressure Recipes',
    'weight-loss': 'Weight Loss Recipes',
    'weight-gain': 'Weight Gain Recipes',
    'keto': 'Keto Diet Recipes',
    'pregnancy': 'Pregnancy Recipes',
    'gastric': 'Gastric Issues Recipes',
    'general-healthy': 'General Healthy Recipes'
  };
  
  // Get category title based on slug
  const categoryTitle = categoryTitles[slug || ''] || 'Recipes';
  
  // Filter recipes by category (using the first 5 recipes for all categories for now)
  // In a real app, you would implement actual category filtering logic
  const categoryRecipes = recipes.slice(0, 5);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-12">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">{categoryTitle}</h1>
            <p className="text-lg text-gray-600">
              Browse our collection of {categoryTitle.toLowerCase()} designed for your specific health needs.
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryRecipes.map(recipe => (
                <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                  <RecipeCard
                    title={recipe.title}
                    description={recipe.description}
                    prepTime={recipe.prepTime}
                    cookTime={recipe.cookTime}
                    image={recipe.image}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default CategoryRecipes;
