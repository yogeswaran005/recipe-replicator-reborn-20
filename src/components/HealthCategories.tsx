
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const HealthCategories: React.FC = () => {
  // Sample category data
  const categories = [
    {
      id: 1,
      title: 'Diabetes Recipes',
      description: 'Low-glycemic recipes for managing blood sugar',
      image: 'https://images.unsplash.com/photo-1625937759420-26d7e003e04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: false,
      slug: 'diabetes'
    },
    {
      id: 2,
      title: 'Heart Health Recipes',
      description: 'Heart-friendly meals low in sodium and unhealthy fats',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: true,
      slug: 'heart-health'
    },
    {
      id: 3,
      title: 'Ulcer Recipes',
      description: 'Gentle recipes that won\'t irritate sensitive stomachs',
      image: 'https://www.google.com/imgres?q=ulcer%20recipes&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fa6%2Fec%2Ffb%2Fa6ecfb3bd278c287fc3f2e0a077a30c8.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F349803096061243668%2F&docid=yOVL1D7evLcAWM&tbnid=JWpGee2ahRUKnM&vet=12ahUKEwiQ0sW77dKMAxUnklYBHew2OkMQM3oECHEQAA..i&w=632&h=415&hcb=2&ved=2ahUKEwiQ0sW77dKMAxUnklYBHew2OkMQM3oECHEQAA',
      showFavoriteIcon: false,
      slug: 'ulcer'
    },
    {
      id: 4,
      title: 'Blood Pressure Recipes',
      description: 'Low-sodium meals rich in potassium and magnesium',
      image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      showFavoriteIcon: true,
      slug: 'blood-pressure'
    },
    {
      id: 5,
      title: 'Weight Loss Recipes',
      description: 'Low-calorie, nutrient-dense meals for healthy weight loss',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1084&q=80',
      showFavoriteIcon: false,
      slug: 'weight-loss'
    },
    {
      id: 6,
      title: 'Weight Gain Recipes',
      description: 'Calorie-rich, nutritious meals for healthy weight gain',
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsummeryule.com%2Fchocolate-hazelnut-granola-with-raspberries%2F&psig=AOvVaw3O8BMqeHiinddvVSdWjhqd&ust=1744559779152000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjBhOnt0owDFQAAAAAdAAAAABAE',
      showFavoriteIcon: false,
      slug: 'weight-gain'
    },
    {
      id: 7,
      title: 'Keto Diet Recipes',
      description: 'High-fat, low-carb recipes for ketogenic lifestyle',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80',
      showFavoriteIcon: false,
      slug: 'keto'
    },
    {
      id: 8,
      title: 'Pregnancy Recipes',
      description: 'Nutrient-rich meals for expecting mothers',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80',
      showFavoriteIcon: false,
      slug: 'pregnancy'
    },
    {
      id: 9,
      title: 'Gastric Issues Recipes',
      description: 'Easily digestible recipes for sensitive stomachs',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      showFavoriteIcon: false,
      slug: 'gastric'
    },
    {
      id: 10,
      title: 'General Healthy Recipes',
      description: 'Nutritious meals for overall health and wellness',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      showFavoriteIcon: false,
      slug: 'general-healthy'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-10">Health-Focused Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <Link to={`/category/${category.slug}`} key={category.id}>
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
                showFavoriteIcon={category.showFavoriteIcon}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthCategories;
