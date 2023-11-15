import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

function App() {
  
  let foodItem = ["chal", "Dal", "Vegitable", "Salad", "Egg", "Milk"];
  // let emptyMessage = foodItem.length === 0 ? <h3>I am Stil Hungry</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}></FoodItems>
    </>
  );
}

export default App;
 