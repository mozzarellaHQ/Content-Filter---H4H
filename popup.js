
// const btnel = document.querySelector('button');
const btnel = document.getElementById('add'); //changed line above to this to get the button to properly work
const inputel = document.getElementById('keyword'); //changed from input to keyword
const listel = document.getElementById('inputList');

// btnel.addEventListener('click', () => {
//     const inputValue = inputel.value;
//     listel.innerHTML = `<li>${inputValue}</li>`;
// });
        
//this is attempt to get the add button working 
btnel.addEventListener('click', (event) => {
    event.preventDefault(); 
    const inputValue = inputel.value.trim();
    if (inputValue) {
        const newItem = document.createElement('li');
        newItem.textContent = inputValue;
        listel.appendChild(newItem);
        inputel.value = '';
    }
});

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
link.addEventListener('click', function(event) {
    event.preventDefault();
        
    const selectedValue = this.getAttribute('data-value');
        
    document.getElementById('output').innerText = 'You selected: ' + selectedValue;
});
    });