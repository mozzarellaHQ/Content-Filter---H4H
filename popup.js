
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

        const deleteBtn = document.createElement('button');
        const icon = document.createElement('i');
        deleteBtn.className = 'delete-button';
        deleteBtn.textContent = 'x';
        deleteBtn.append(icon);
        deleteBtn.addEventListener('click', () => {
            listel.removeChild(newItem);
        });
        newItem.appendChild(deleteBtn);
    }
});

let selectedValues = [];

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        
        const selectedValue = this.getAttribute('data-value');

        if (!selectedValues.includes(selectedValue)) {
            selectedValues.push(selectedValue);
        }
        
        displayOutput();
    });
});

function displayOutput() {
    const holdOut = document.getElementById('output');
    holdOut.innerHTML = '';

    selectedValues.forEach(value => {
        const valueItem = document.createElement('div');
        valueItem.classList.add('value-item');
        valueItem.textContent = value;

    const deleteBtn = document.createElement('button');
                deleteBtn.classList.add('new-delete');
                deleteBtn.textContent = 'x';
                deleteBtn.addEventListener('click', () => {
                   
                    selectedValues = selectedValues.filter(v => v !== value);
                    displayOutput();
                });
              
                valueItem.appendChild(deleteBtn);
                holdOut.appendChild(valueItem);
            });
        }


// filtering content

const site = window.location.hostname
alert("Clever Content is active on: " + site)


const observer = new MutationObserver(add_words);
const config = { childList: true, subtree: true};
observer.observe(listel, config)

function add_words() {
    filter_words.length = 0;
    const list = listel.querySelectorAll('li');
    list.forEach(item => {
        const keyword = item.textContent.replace('x', '').trim();
        if (keyword) {
            filter_words.push(keyword);
        }
    });
}

const postsObserver = new MutationObserver(block_content);
postsObserver.observe(document.body, { childList: true, subtree: true });

function block_content() {
    const posts = document.querySelectorAll('div[data-testid="post-container"], div[data-testid="comment-container"]'); // Use correct selector for posts/comments
    posts.forEach(post => {
        const postText = post.innerText;
        filter_words.forEach(word => {
            if (postText.includes(word)) {
                post.style.display = 'none';  // Hide post if it matches filter word
            }
        });
    });
}

// Initial population of filter words
add_words();






// General filtering functions

//reddit.com
//if (site.includes("reddit.com")) {

//}