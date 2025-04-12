
export const recipes = [
  {
    id: 1,
    title: 'Cinnamon Chia Seed Pudding',
    description: 'A low-sugar breakfast pudding rich in fiber to help control blood sugar spikes.',
    prepTime: '5 min',
    cookTime: '0 min',
    image: 'https://www.google.com/imgres?q=cinnamon%20chia%20seed%20pudding&imgurl=https%3A%2F%2Fthedeliciousplate.com%2Fwp-content%2Fuploads%2F2021%2F02%2FCinnamon-Chia-Pudding-2.jpg&imgrefurl=https%3A%2F%2Fthedeliciousplate.com%2Fcinnamon-roll-chia-pudding%2F&docid=u5M6aZrJKcUz9M&tbnid=_YeQfefIYk7pfM&vet=12ahUKEwignbST7NKMAxXhwzgGHU14OGEQM3oECBgQAA..i&w=1500&h=1200&hcb=2&ved=2ahUKEwignbST7NKMAxXhwzgGHU14OGEQM3oECBgQAA',
    ingredients: [
      { name: 'chia seeds', amount: '3 tbsp' },
      { name: 'almond milk', amount: '1 cup' },
      { name: 'cinnamon', amount: '1/2 tsp' },
      { name: 'vanilla extract', amount: '1/4 tsp' },
      { name: 'honey or maple syrup', amount: '1 tsp' },
      { name: 'fresh berries (for topping)', amount: '1/4 cup' }
    ],
    instructions: [
      'In a jar or bowl, combine chia seeds, almond milk, cinnamon, vanilla extract, and sweetener.',
      'Stir well to combine, making sure there are no clumps of chia seeds.',
      'Cover and refrigerate for at least 4 hours or overnight.',
      'Before serving, stir again and add more milk if needed to achieve desired consistency.',
      'Top with fresh berries and enjoy!'
    ],
    nutritionInfo: {
      calories: 210,
      protein: 7,
      carbs: 21,
      fat: 11,
      fiber: 15
    },
    healthBenefits: [
      'Rich in soluble fiber that helps stabilize blood sugar levels',
      'Contains omega-3 fatty acids for heart health',
      'Cinnamon has been shown to help improve insulin sensitivity',
      'Low in added sugars, making it suitable for those watching their sugar intake'
    ]
  },
  {
    id: 2,
    title: 'Oatmeal with Berries and Flaxseed',
    description: 'A fiber-rich breakfast that helps lower LDL cholesterol and promote heart health.',
    prepTime: '5 min',
    cookTime: '5 min',
    image: 'https://images.unsplash.com/photo-1576781915079-5c5b20f14681?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    ingredients: [
      { name: 'rolled oats', amount: '1/2 cup' },
      { name: 'water or milk of choice', amount: '1 cup' },
      { name: 'ground flaxseed', amount: '1 tbsp' },
      { name: 'mixed berries', amount: '1/2 cup' },
      { name: 'cinnamon', amount: '1/4 tsp' },
      { name: 'honey or maple syrup (optional)', amount: '1 tsp' }
    ],
    instructions: [
      'Combine oats and liquid in a small pot over medium heat.',
      'Bring to a simmer and cook for 3-5 minutes, stirring occasionally, until oats are soft and liquid is absorbed.',
      'Remove from heat and stir in ground flaxseed and cinnamon.',
      'Transfer to a bowl and top with mixed berries.',
      'Drizzle with honey or maple syrup if desired.'
    ],
    nutritionInfo: {
      calories: 240,
      protein: 8,
      carbs: 40,
      fat: 6,
      fiber: 10
    },
    healthBenefits: [
      'Beta-glucan in oats helps lower LDL cholesterol levels',
      'Flaxseed provides additional fiber and omega-3 fatty acids',
      'Berries add antioxidants that help fight inflammation',
      'Low in added sugars when prepared without sweeteners'
    ]
  },
  {
    id: 3,
    title: 'Creamy Sweet Potato Soup',
    description: 'A gentle, non-irritating soup that soothes the digestive tract and provides essential nutrients.',
    prepTime: '10 min',
    cookTime: '25 min',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ingredients: [
      { name: 'sweet potatoes, peeled and cubed', amount: '2 medium' },
      { name: 'carrots, chopped', amount: '2' },
      { name: 'vegetable broth', amount: '4 cups' },
      { name: 'coconut milk', amount: '1/2 cup' },
      { name: 'ginger, minced', amount: '1 tsp' },
      { name: 'salt', amount: 'to taste' },
      { name: 'black pepper', amount: 'to taste' }
    ],
    instructions: [
      'In a large pot, combine sweet potatoes, carrots, and vegetable broth.',
      'Bring to a boil, then reduce heat and simmer for 20 minutes or until vegetables are tender.',
      'Add ginger and coconut milk.',
      'Using an immersion blender or regular blender, puree the soup until smooth.',
      'Season with salt and pepper to taste.',
      'Serve warm.'
    ],
    nutritionInfo: {
      calories: 180,
      protein: 3,
      carbs: 30,
      fat: 6,
      fiber: 5
    },
    healthBenefits: [
      'Sweet potatoes are rich in beta-carotene, which supports immune function',
      'Ginger has anti-inflammatory properties and can help soothe digestive discomfort',
      'Coconut milk provides healthy fats that help with nutrient absorption',
      'Easy to digest for those with sensitive stomachs or IBS'
    ]
  },
  {
    id: 4,
    title: 'Mediterranean Chickpea Salad',
    description: 'A protein-rich salad with Mediterranean flavors that\'s perfect for lunch or a light dinner.',
    prepTime: '15 min',
    cookTime: '0 min',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    ingredients: [
      { name: 'chickpeas, drained and rinsed', amount: '1 can (15 oz)' },
      { name: 'cucumber, diced', amount: '1/2' },
      { name: 'cherry tomatoes, halved', amount: '1 cup' },
      { name: 'red onion, finely chopped', amount: '1/4' },
      { name: 'feta cheese, crumbled', amount: '1/4 cup' },
      { name: 'fresh parsley, chopped', amount: '2 tbsp' },
      { name: 'olive oil', amount: '2 tbsp' },
      { name: 'lemon juice', amount: '1 tbsp' },
      { name: 'dried oregano', amount: '1/2 tsp' },
      { name: 'salt and pepper', amount: 'to taste' }
    ],
    instructions: [
      'In a large bowl, combine chickpeas, cucumber, tomatoes, red onion, and parsley.',
      'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Pour the dressing over the salad and toss to combine.',
      'Sprinkle with crumbled feta cheese.',
      'Serve immediately or refrigerate for up to 24 hours to let the flavors meld.'
    ],
    nutritionInfo: {
      calories: 320,
      protein: 12,
      carbs: 35,
      fat: 15,
      fiber: 10
    },
    healthBenefits: [
      'Chickpeas provide plant-based protein and soluble fiber to help manage cholesterol',
      'Olive oil contains monounsaturated fats that support heart health',
      'Rich in vegetables that provide a variety of vitamins and minerals',
      'Mediterranean diet pattern is associated with reduced risk of heart disease and improved longevity'
    ]
  },
  {
    id: 5,
    title: 'Potassium-Rich Banana Berry Smoothie',
    description: 'A delicious smoothie packed with potassium to help regulate blood pressure naturally.',
    prepTime: '5 min',
    cookTime: '0 min',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a90bb0b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80',
    ingredients: [
      { name: 'ripe banana', amount: '1' },
      { name: 'frozen mixed berries', amount: '1 cup' },
      { name: 'spinach', amount: '1 cup' },
      { name: 'Greek yogurt', amount: '1/4 cup' },
      { name: 'almond milk or milk of choice', amount: '3/4 cup' },
      { name: 'chia seeds', amount: '1 tsp' },
      { name: 'honey (optional)', amount: '1 tsp' }
    ],
    instructions: [
      'Add all ingredients to a blender.',
      'Blend on high until smooth and creamy.',
      'Add more liquid if needed to reach desired consistency.',
      'Pour into a glass and enjoy immediately.'
    ],
    nutritionInfo: {
      calories: 280,
      protein: 9,
      carbs: 48,
      fat: 7,
      fiber: 12
    },
    healthBenefits: [
      'Bananas are rich in potassium, which helps regulate blood pressure',
      'Berries provide antioxidants that reduce inflammation and oxidative stress',
      'Spinach adds additional potassium, magnesium, and nitrates that support healthy blood pressure',
      'Greek yogurt contributes calcium, which works with potassium to support blood pressure regulation'
    ]
  },
  {
    id: 6,
    title: 'Zucchini Noodles with Turkey Meatballs',
    description: 'A low-carb, protein-rich alternative to traditional pasta dishes that\'s gentle on the stomach.',
    prepTime: '15 min',
    cookTime: '20 min',
    image: 'https://www.google.com/imgres?q=zucchini%20noodles%20with%20turkey%20meatballs&imgurl=https%3A%2F%2Fwww.eatwell101.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fturkey-meatballs-recipe.jpg&imgrefurl=https%3A%2F%2Fwww.eatwell101.com%2Fgarlic-butter-meatballs-with-lemon-zucchini-noodles&docid=jrBv8zvLMk7pxM&tbnid=XehYN_EPFTbg5M&vet=12ahUKEwiHvZXU7NKMAxXJzjQHHdqYGTIQM3oECG4QAA..i&w=1200&h=800&hcb=2&ved=2ahUKEwiHvZXU7NKMAxXJzjQHHdqYGTIQM3oECG4QAA',
    ingredients: [
      { name: 'ground turkey', amount: '1 lb' },
      { name: 'almond flour', amount: '1/4 cup' },
      { name: 'egg', amount: '1' },
      { name: 'Italian seasoning', amount: '1 tsp' },
      { name: 'garlic powder', amount: '1/2 tsp' },
      { name: 'salt', amount: '1/2 tsp' },
      { name: 'pepper', amount: '1/4 tsp' },
      { name: 'large zucchini, spiralized', amount: '4' },
      { name: 'marinara sauce (no-sugar-added)', amount: '2 cups' },
      { name: 'olive oil', amount: '2 tbsp' },
      { name: 'fresh basil, chopped', amount: '2 tbsp' }
    ],
    instructions: [
      'In a bowl, combine ground turkey, almond flour, egg, Italian seasoning, garlic powder, salt, and pepper.',
      'Form the mixture into 1-inch meatballs.',
      'Heat 1 tbsp olive oil in a large skillet over medium heat. Cook meatballs for 10-12 minutes, turning occasionally, until cooked through.',
      'Remove meatballs and set aside. In the same pan, add remaining olive oil and zucchini noodles.',
      'Sauté for 2-3 minutes until slightly tender but still firm.',
      'Add marinara sauce and meatballs back to the pan. Heat through.',
      'Serve topped with fresh basil.'
    ],
    nutritionInfo: {
      calories: 380,
      protein: 32,
      carbs: 18,
      fat: 22,
      fiber: 5
    },
    healthBenefits: [
      'Low in carbohydrates, making it suitable for those with insulin resistance or diabetes',
      'Turkey provides lean protein which supports muscle maintenance and satiety',
      'Zucchini is rich in potassium and vitamin C while being low in FODMAPs for sensitive stomachs',
      'Using almond flour instead of breadcrumbs makes this recipe gluten-free and lower in carbs'
    ]
  },
  {
    id: 7,
    title: 'Avocado and Bacon-Stuffed Chicken Breast',
    description: 'A keto-friendly, high-protein meal that\'s perfect for supporting muscle growth.',
    prepTime: '15 min',
    cookTime: '25 min',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80',
    ingredients: [
      { name: 'chicken breasts', amount: '2 large' },
      { name: 'avocado, diced', amount: '1 medium' },
      { name: 'bacon, cooked and crumbled', amount: '4 slices' },
      { name: 'garlic, minced', amount: '2 cloves' },
      { name: 'shredded cheddar cheese', amount: '1/4 cup' },
      { name: 'olive oil', amount: '1 tbsp' },
      { name: 'paprika', amount: '1/2 tsp' },
      { name: 'salt', amount: '1/2 tsp' },
      { name: 'black pepper', amount: '1/4 tsp' }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Cut a pocket into each chicken breast, being careful not to cut all the way through.',
      'In a bowl, combine avocado, bacon, garlic, and cheese.',
      'Stuff each chicken breast with the avocado mixture and secure with toothpicks if needed.',
      'Place chicken on a baking sheet and brush with olive oil. Season with paprika, salt, and pepper.',
      'Bake for 25-30 minutes, or until chicken reaches an internal temperature of 165°F (74°C).',
      'Let rest for 5 minutes before serving.'
    ],
    nutritionInfo: {
      calories: 450,
      protein: 40,
      carbs: 6,
      fat: 30,
      fiber: 4
    },
    healthBenefits: [
      'High protein content supports muscle maintenance and growth',
      'Avocado provides heart-healthy monounsaturated fats and potassium',
      'Very low in carbohydrates, making it suitable for ketogenic diets',
      'Good source of several B vitamins from both chicken and avocado'
    ]
  },
  {
    id: 8,
    title: 'Iron-Rich Lentil and Spinach Stew',
    description: 'A hearty, nutritious stew that\'s high in iron and plant-based proteins.',
    prepTime: '10 min',
    cookTime: '30 min',
    image: 'https://images.unsplash.com/photo-1604496464355-6e04fcc59291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    ingredients: [
      { name: 'green or brown lentils, rinsed', amount: '1 cup' },
      { name: 'olive oil', amount: '1 tbsp' },
      { name: 'onion, diced', amount: '1 medium' },
      { name: 'carrots, diced', amount: '2' },
      { name: 'garlic, minced', amount: '3 cloves' },
      { name: 'vegetable broth', amount: '4 cups' },
      { name: 'diced tomatoes', amount: '1 can (14 oz)' },
      { name: 'cumin', amount: '1 tsp' },
      { name: 'paprika', amount: '1 tsp' },
      { name: 'fresh spinach', amount: '4 cups' },
      { name: 'lemon juice', amount: '1 tbsp' },
      { name: 'salt and pepper', amount: 'to taste' }
    ],
    instructions: [
      'In a large pot, heat olive oil over medium heat. Add onion and carrots and cook for 5 minutes until softened.',
      'Add garlic and cook for another minute until fragrant.',
      'Add lentils, vegetable broth, diced tomatoes, cumin, and paprika. Bring to a boil.',
      'Reduce heat, cover, and simmer for 25-30 minutes until lentils are tender.',
      'Stir in spinach and cook for another 2-3 minutes until wilted.',
      'Add lemon juice, salt, and pepper to taste.',
      'Serve hot.'
    ],
    nutritionInfo: {
      calories: 280,
      protein: 15,
      carbs: 45,
      fat: 5,
      fiber: 20
    },
    healthBenefits: [
      'Excellent source of plant-based iron, particularly important for those with anemia or women of reproductive age',
      'Vitamin C from tomatoes and lemon juice enhances iron absorption',
      'High in folate from lentils and spinach, important for red blood cell production',
      'Rich in plant-based protein and fiber, supporting digestive health and satiety'
    ]
  }
];
