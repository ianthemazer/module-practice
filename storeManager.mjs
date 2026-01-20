import { addItem, removeItem, listItems } from "./inventory.mjs";

// Example usage of the functions
addItem("Apple");
addItem("Banana");
console.log("Inventory after adding items:", listItems());

removeItem("Apple");
console.log("Inventory after removing an item:", listItems());