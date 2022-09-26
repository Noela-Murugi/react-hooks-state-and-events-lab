import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [categoryselect, setcategory] = useState("All");
  function categoryChange(event) {
    let setcateg = event.target.value;
    setcategory(setcateg);
  }

  const displayItems = items.filter((item) => {
    if (categoryselect === "All") return true;
    return item.category === categoryselect;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (<Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
