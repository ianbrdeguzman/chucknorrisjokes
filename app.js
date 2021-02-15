// add event listener
window.addEventListener('click', (e) => {

    // assign value of select element
    const value = document.querySelector('select').value

    // if id is equal to generate;
    if (e.target.id === 'generate') {

        // call getJoke and pass value
        getJoke(value);
    }
});

// getJoke function
const getJoke = async (category) => {

    // assign API with category
    const API_CAT = `https://api.chucknorris.io/jokes/random?category=${category}`;

    // assign random API
    const API = `https://api.chucknorris.io/jokes/random`;

    // declare variables
    let response, data;

    // if category is present
    if (category) {

        // fetch category API
        response = await fetch(API_CAT);
        data = await response.json();

    // else fetch random API
    } else {
        response = await fetch(API)
        data = await response.json();
    }
    
    // call display joke
    displayJoke(data);
};

// displayJoke function
const displayJoke = (data) => {

    // get HTML DOM element
    const container = document.querySelector('.joke-container');

    // change text content to data value
    container.textContent = data.value;
};

// getCategories function
const getCategories = async () => {

    // assign categories api
    const API = `https://api.chucknorris.io/jokes/categories`;

    // fetch api
    const response = await fetch(API);
    const data = await response.json();

    // call showCategories and pass data
    showCategories(data);
}

// showCategories function
const showCategories = (data) => {

    // get HTML DOM element
    const container = document.querySelector('.input');

    // create a select html element
    const select = document.createElement('select');

    // append select element to container
    container.appendChild(select);
    
    // loop over all items in data
    data.forEach( (item) => {

        // create option html element
        const option = document.createElement('option');
        
        // assign the value of item to option html element
        option.innerHTML = item;

        // append option to select html element
        select.appendChild(option);
    })

    // create button html element
    const button = document.createElement('button')

    // set button id equal to generate
    button.setAttribute('id', 'generate');

    // change innerHTML of button
    button.innerHTML = 'Generate &#128514;';

    // append button to container html element
    container.appendChild(button);
};

// call getCategories
getCategories();

// call getJoke
getJoke();
