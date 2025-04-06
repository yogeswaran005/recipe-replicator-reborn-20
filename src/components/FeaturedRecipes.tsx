
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { Button } from '@/components/ui/button';
import { recipes } from '@/data/recipes';

const FeaturedRecipes: React.FC = () => {
  // Validate recipe images before rendering
  const validatedRecipes = recipes.slice(0, 8).map(recipe => {
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
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {validatedRecipes.map(recipe => (
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
        <div className="text-center mt-10">
          <Button className="bg-red-600 hover:bg-red-700 text-white" asChild>
            <Link to="/categories">View All Recipes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;
