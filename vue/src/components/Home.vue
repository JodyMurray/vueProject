<template>
  <div class="home">
    <div class="overlay">
      <div class="content">
        <h1>Welcome to Recipe Rave!</h1>
        <div v-for="(recipe, index) in recipes" :key="index" class="recipe">
          <h2>{{ recipe.name }}</h2>
          <p>{{ recipe.description }}</p>
          <img :src="recipe.image" alt="Recipe Image" />
          <button class="read-more">Read more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PastaImage from '../assets/pasta.jpg'

export default {
  name: 'Home',
  data() {
    return {
      recipes: [
        {
          name: 'Veggie Pasta Primavera',
          description: 'A delightful pasta dish packed with fresh vegetables and herbs.',
          image: PastaImage,
          ingredients: [
            '8 oz. penne pasta',
            '1 cup cherry tomatoes, halved',
            '1 cup broccoli florets',
            '1 cup bell peppers, sliced',
            '1/2 cup zucchini, sliced',
            '1/2 cup mushrooms, sliced',
            '2 cloves garlic, minced',
            '1/4 cup fresh basil, chopped',
            '2 tbsp olive oil',
            'Salt and pepper to taste',
            'Grated Parmesan cheese for garnish'
          ],
          instructions: [
            'Cook penne pasta according to package instructions. Drain and set aside.',
            'In a large skillet, heat olive oil over medium heat.',
            'Add garlic and sauté for a minute until fragrant.',
            'Add all the vegetables and sauté for about 5-7 minutes or until they are tender.',
            'Add cooked pasta and fresh basil. Toss to combine.',
            'Season with salt and pepper to taste.',
            'Serve hot, garnished with grated Parmesan cheese.'
          ]
        }
      ]
    }
  }
}
</script>

<style>
.home {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('src/assets/recipehome.jpeg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  height: auto;
  width: auto;
}

.read-more {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.read-more:hover {
  background-color: #45a049;
}

.recipe {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}
.recipe p {
  width: 100%;
}

.recipe img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
}

.content {
  text-align: center;
  color: white;
}

.content h1 {
  padding: 10px;
}
</style>
