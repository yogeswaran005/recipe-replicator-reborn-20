
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  title, 
  description, 
  prepTime, 
  cookTime, 
  image 
}) => {
  const { user } = useAuth();
  const [imageError, setImageError] = React.useState(false);

  // Default food placeholder based on recipe title to ensure relevance
  const getFoodPlaceholder = () => {
    // These are carefully selected food-related placeholder images
    const foodPlaceholders = [
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1000',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000'
    ];
    
    // Use the first letter of the title to select a consistent placeholder
    const index = title.charCodeAt(0) % foodPlaceholders.length;
    return foodPlaceholders[index];
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {!imageError && image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <img 
            src={getFoodPlaceholder()} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <div>Prep: {prepTime}</div>
          <div>Cook: {cookTime}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
