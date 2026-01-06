/// <reference path="./global.d.ts" />
// @ts-check


export function cookingStatus(remainingTime) {
  if(remainingTime == undefined) return 'You forgot to set the timer.';
  if(remainingTime == 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
}

export function preparationTime(layers, avgTimePerLayer=2) {
  return layers.length * avgTimePerLayer
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if(layer == 'noodles') noodles += 50;
    if(layer == 'sauce') sauce += 0.2;
  }

  return {noodles, sauce}
}

export function addSecretIngredient(friendLayers,layers) {
  layers.push(friendLayers.at(-1))
}


export function scaleRecipe(recipe,numberOfPortions) {
  const recipeObj = {};

  for (const [k,v] of Object.entries(recipe)) {
    recipeObj[k] = (v/2) * numberOfPortions;
  }

  return recipeObj;
}
