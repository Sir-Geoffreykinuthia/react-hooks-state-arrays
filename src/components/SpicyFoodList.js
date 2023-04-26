import React, { useState } from "react";
// import { spicyFoods, getNewRandomSpicyFood } from "../data"

// importing newspicyfoods in the component module
import { spicyFoods, getNewRandomSpicyFood, newSpicyFoods } from "../data";



function SpicyFoodList() {
  // const [foods, setFoods] = useState(spicyFoods);

  // updating the initial food state from the above
  // using spread operator to update the current state
  const [foods, setFoods] = useState([...spicyFoods, ...newSpicyFoods]);

  // defining handleAddFood function 
  function handleAddFood(){
    // wrapping new food in an array to iterate over
    const newFood = [getNewRandomSpicyFood()];
    const newFoodArray =[...foods, ...newFood];
    setFoods(newFoodArray);
  };



//  commenting the code here to try something new with the code but still valid
  // function handleAddFood() {
  //   const newFood = getNewRandomSpicyFood();
  //   console.log(newFood);
  // }

  // will be updating my foodList variable to only map over foods,newspicyfoods already exists
  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));


//since am not adding new foods to the component, will be removing the Add New Food for while
  return (
    <div>
      {/* removing this return statement only complicates the code from adding the food  */}
      {/* only creates room for displaying all the food but the console complains about the process */}
      {/* <button onClick={handleAddFood}>Add New Food</button> */}

{/* the below statement only add the add new food button the screen */}
{/* the add button is helping me communicate with the Dom from the browser to see whats being rendered */}
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;




// the code is able to add fooditems in the menu bar of the browser
// 
// 