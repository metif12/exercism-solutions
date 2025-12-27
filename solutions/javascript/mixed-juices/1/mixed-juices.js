// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const Times = {
  'Pure Strawberry Joy':0.5,
  'Energizer':1.5,
  'Green Garden':1.5,
  'Tropical Island':3,
  'All or Nothing':5,
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  return Times?.[name] ?? 2.5;
}


const wedges = {
  'small':6,
  'medium':8,
  'large':10,
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let total = 0;
  let count = 0;
  let index = 0;
  
  while (index < limes.length) {
    
    if(wedgesNeeded <= total)
      break;
    
    total += wedges[limes[index]]

    count++;
    index++;

  } 
  return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;

  do {
    const order = orders[i];
    const take = Times[order] ?? 2.5;
    
    i++;
    
    if(timeLeft < take) break;

    timeLeft -= take;
  } while (timeLeft > 0 && i < orders.length)

  return orders.slice(i)
}
