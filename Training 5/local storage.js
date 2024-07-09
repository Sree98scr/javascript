// Function to save the name to localStorage
function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('name', nameInput);
    document.getElementById('output').innerText = `Name saved: ${nameInput}`;
}

// Function to get the name from localStorage
function getName() {
    const name = localStorage.getItem('name');
    if (name) {
        document.getElementById('output').innerText = `Stored name: ${name}`;
    } else {
        document.getElementById('output').innerText = 'No name found in localStorage.';
    }
}

// Function to remove the name from localStorage
function removeName() {
    localStorage.removeItem('name');
    document.getElementById('output').innerText = 'Name removed from localStorage.';
}
