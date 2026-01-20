const inventory = [];

export function addItem(item) {
    inventory.push(item);
}

export function removeItem(item) {
    const index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
    }
}

export function listItems() {
    return inventory;
}