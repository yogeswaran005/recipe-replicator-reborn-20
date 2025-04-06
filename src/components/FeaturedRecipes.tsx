
import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import { Button } from '@/components/ui/button';
import { recipes } from '@/data/recipes';

const FeaturedRecipes: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.slice(0, 8).map(recipe => (
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
