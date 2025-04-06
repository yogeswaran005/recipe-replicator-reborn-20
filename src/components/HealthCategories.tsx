
import React from 'react';
import CategoryCard from './CategoryCard';

const HealthCategories: React.FC = () => {
  // Sample category data
  const categories = [
    {
      id: 1,
      title: 'Diabetes Recipes',
      description: 'Low-glycemic recipes for managing blood sugar',
      image: 'https://images.unsplash.com/photo-1625937759420-26d7e003e04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: false
    },
    {
      id: 2,
      title: 'Heart Health Recipes',
      description: 'Heart-friendly meals low in sodium and unhealthy fats',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: true
    },
    {
      id: 3,
      title: 'Ulcer Recipes',
      description: 'Gentle recipes that won\'t irritate sensitive stomachs',
      image: 'https://images.unsplash.com/photo-1579636158916-04e9d1b1a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      showFavoriteIcon: false
    },
    {
      id: 4,
      title: 'Blood Pressure Recipes',
      description: 'Low-sodium meals rich in potassium and magnesium',
      image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      showFavoriteIcon: true
    },
    {
      id: 5,
      title: 'Weight Loss Recipes',
      description: 'Low-calorie, nutrient-dense meals for healthy weight loss',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80',
      showFavoriteIcon: false
    },
    {
      id: 6,
      title: 'Weight Gain Recipes',
      description: 'Calorie-rich, nutritious meals for healthy weight gain',
      image: 'https://images.unsplash.com/photo-1582542080991-03f50ace6dcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: false
    },
    {
      id: 7,
      title: 'Keto Diet Recipes',
      description: 'High-fat, low-carb recipes for ketogenic lifestyle',
      image: '',
      showFavoriteIcon: false
    },
    {
      id: 8,
      title: 'Pregnancy Recipes',
      description: 'Nutrient-rich meals for expecting mothers',
      image: '',
      showFavoriteIcon: false
    },
    {
      id: 9,
      title: 'Gastric Issues Recipes',
      description: 'Easily digestible recipes for sensitive stomachs',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      showFavoriteIcon: false
    },
    {
      id: 10,
      title: 'General Healthy Recipes',
      description: 'Nutritious meals for overall health and wellness',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Health-Focused Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              showFavoriteIcon={category.showFavoriteIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCategories;
