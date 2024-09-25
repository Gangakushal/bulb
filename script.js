// Get the bulb and buttons by their IDs
const bulb = document.getElementById('bulb');
const onButton = document.getElementById('onButton');
const offButton = document.getElementById('offButton');

// Add event listener for the ON button
onButton.addEventListener('click', function() {
    // Ask user for a color
    const color = prompt("Please enter a color for the bulb (e.g., red, blue, green):");
    
    if (color) {
        bulb.style.backgroundColor = color;
    }
});

offButton.addEventListener('click', function() {
    // Set the bulb color back to white when OFF is clicked
    bulb.style.backgroundColor = 'white';
});
