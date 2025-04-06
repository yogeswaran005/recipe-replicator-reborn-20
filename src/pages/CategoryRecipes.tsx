
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
  
  // Filter recipes by category (for now using first 5 recipes)
  // In a real app, you would implement actual category filtering logic
  const categoryRecipes = recipes.slice(0, 5).map(recipe => {
    // Ensure image URLs are valid and have a fallback
    let validatedImage = recipe.image;
    
    // Check if URL is valid
    if (!validatedImage || !validatedImage.startsWith('http')) {
      // Provide category-appropriate food image fallbacks
      const fallbackImages = [
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',  // General food
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000',  // Healthy breakfast
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',  // Meal plate
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000'   // Soup/stew
      ];
      
      // Use consistent fallback based on recipe ID
      const fallbackIndex = (recipe.id % fallbackImages.length);
      validatedImage = fallbackImages[fallbackIndex];
    }
    
    return { ...recipe, image: validatedImage };
  });
  
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
