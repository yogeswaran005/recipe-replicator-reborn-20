
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { recipes as allRecipes } from '@/data/recipes';

interface Ingredient {
  name: string;
  amount: string;
}

interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
}

interface Recipe {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutritionInfo: NutritionInfo;
  healthBenefits: string[];
}

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, this would fetch from an API
    const fetchRecipe = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (id) {
          const recipeId = parseInt(id);
          const foundRecipe = allRecipes.find(r => r.id === recipeId);
          
          if (foundRecipe) {
            setRecipe(foundRecipe);
            
            // Check if this recipe is in user favorites
            if (user) {
              const favorites = JSON.parse(localStorage.getItem(`favorites-${user.id}`) || '[]');
              setIsFavorite(favorites.includes(recipeId));
            }
          }
        }
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id, user]);

  const toggleFavorite = () => {
    if (!user) {
      toast({
        title: 'Not logged in',
        description: 'Please log in to save favorites',
        variant: 'destructive',
      });
      return;
    }
    
    const favorites = JSON.parse(localStorage.getItem(`favorites-${user.id}`) || '[]');
    
    if (recipe) {
      if (isFavorite) {
        // Remove from favorites
        const updatedFavorites = favorites.filter((favId: number) => favId !== recipe.id);
        localStorage.setItem(`favorites-${user.id}`, JSON.stringify(updatedFavorites));
        setIsFavorite(false);
        toast({
          title: 'Removed from favorites',
          description: `${recipe.title} has been removed from your favorites`,
        });
      } else {
        // Add to favorites
        favorites.push(recipe.id);
        localStorage.setItem(`favorites-${user.id}`, JSON.stringify(favorites));
        setIsFavorite(true);
        toast({
          title: 'Added to favorites',
          description: `${recipe.title} has been added to your favorites`,
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <p className="text-xl">Loading recipe...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Recipe not found</h1>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96 bg-gray-200">
              {recipe.image ? (
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <span className="text-gray-400">No image available</span>
                </div>
              )}
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full h-10 w-10"
                onClick={toggleFavorite}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">{recipe.title}</h1>
                <div className="flex space-x-4 text-sm text-gray-500">
                  <div>Prep: {recipe.prepTime}</div>
                  <div>Cook: {recipe.cookTime}</div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-2 mb-6">{recipe.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-2 mb-8">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex">
                        <span className="font-medium">{ingredient.amount}</span>
                        <span className="ml-2">{ingredient.name}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h2 className="text-xl font-bold mb-4">Instructions</h2>
                  <ol className="space-y-4 mb-8 list-decimal pl-5">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="pl-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                  
                  <h2 className="text-xl font-bold mb-4">Health Benefits</h2>
                  <ul className="space-y-2 list-disc pl-5 mb-8">
                    {recipe.healthBenefits.map((benefit, index) => (
                      <li key={index} className="pl-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Nutrition Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Calories:</span>
                        <span>{recipe.nutritionInfo.calories} kcal</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Protein:</span>
                        <span>{recipe.nutritionInfo.protein}g</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Carbs:</span>
                        <span>{recipe.nutritionInfo.carbs}g</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Fat:</span>
                        <span>{recipe.nutritionInfo.fat}g</span>
                      </div>
                      <div className="grid grid-cols-2">
                        <span className="font-medium">Fiber:</span>
                        <span>{recipe.nutritionInfo.fiber}g</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipeDetail;
