// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create elements
    const div = document.createElement ('div');
    const date = document.createElement ('span');
    const head = document.createElement ('h1');
    const temp = document.createElement ('span');

    // append elemnts
    div.appendChild (date);
    div.appendChild (head);
    div.appendChild (temp);

    // style elemnts
    div.classList.add ('header');
    date.classList.add ('date');
    temp.classList.add ('temp');

    //add content
    date.textContent = "MARCH 28, 2020";
    head.textContent = 'Lambda Times';
    temp.textContent = '98';

    // grab container and append
    const headerCon = document.querySelector ('.header-container');
    headerCon.appendChild (div);
}

Header ();