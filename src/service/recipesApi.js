export async function getFoodsByName(name) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getFoodsByFirstLetter(firstLetter) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getFoodsByIngredients(ingredients) {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getDrinksByFirstLetter(firstLetter) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getDinksByName(name) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}

export async function getDrinksByIngredients(ingredients) {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  const request = await fetch(URL);
  const data = await request.json();
  return data;
}
