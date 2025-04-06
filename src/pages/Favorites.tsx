
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RecipeCard from '@/components/RecipeCard';
import { useAuth } from '@/contexts/AuthContext';
import { recipes as allRecipes } from '@/data/recipes';

interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  image: string;
}

const Favorites = () => {
  const { user } = useAuth();
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      setIsLoading(true);
      try {
        if (user) {
          // Get user favorites from localStorage
          const favoriteIds = JSON.parse(localStorage.getItem(`favorites-${user.id}`) || '[]');
          
          // Filter recipes to get favorites
          const favorites = allRecipes.filter(recipe => favoriteIds.includes(recipe.id));
          setFavoriteRecipes(favorites);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Please log in to view your favorites</h1>
            <Link to="/login" className="text-red-600 hover:text-red-700">Sign in</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-16 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-center mb-10">My Favorite Recipes</h1>
          
          {isLoading ? (
            <div className="text-center">
              <p className="text-xl">Loading your favorites...</p>
            </div>
          ) : favoriteRecipes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600 mb-4">You haven't saved any favorite recipes yet.</p>
              <Link to="/" className="text-red-600 hover:text-red-700">
                Browse recipes
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteRecipes.map(recipe => (
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
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
