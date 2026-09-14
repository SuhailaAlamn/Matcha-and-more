
function getItemPrice(item) {
    switch (item) {
        case "Classic Matcha": return 18;
        case "Matcha Latte": return 22;
        case "Iced Matcha Lemonade": return 20;
        case "Matcha Frappe": return 25;
        case "Matcha Affogato": return 28;
        case "Matcha Cheesecake": return 32;
        case "Matcha Tiramisu": return 30;
        case "Matcha Smoothie Bowl": return 35;
        case "Cold Brew Matcha": return 24;
        case "Matcha Croissant": return 20;
        case "Matcha Pancakes": return 38;
        case "Matcha Bubble Tea": return 26;
        case "Matcha Ice Cream": return 18;
        case "Matcha Energy Balls": return 15;
        case "Matcha Chocolate": return 25;
        default: return 0; 
    }
}

function calculateTotal() {
    let selectedItem = document.getElementById("menuItem").value;
    let quantity = parseInt(document.getElementById("quantity").value);

    if (!selectedItem) {
        alert("Please select a menu item.");
        return;
    }

    if (quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    let price = getItemPrice(selectedItem);
    let total = price * quantity;

   
    const desserts = ["Matcha Cheesecake", "Matcha Tiramisu", "Matcha Ice Cream", "Matcha Chocolate"];
    for (let i = 0; i < desserts.length; i++) {
        if (selectedItem === desserts[i]) {
            total *= 1.1; 
        }
    }

    if (total > 50) {
        total *= 0.9; 
    }

    document.getElementById("totalPrice").innerText = `Total: ${total.toFixed(2)} AED`;
}


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let selectedItem = document.getElementById("menuItem").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let finalTotal = document.getElementById("totalPrice").innerText;

    alert(`Order Confirmed! \n Item: ${selectedItem} \n Quantity: ${quantity} \n ${finalTotal} \n Thank you for ordering at Matcha and More!`);
});

