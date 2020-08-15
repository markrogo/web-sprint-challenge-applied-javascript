// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

let topicArray = [];
   // grab container
   const topics = document.querySelector('.topics');

axios
    .get (`https://lambda-times-api.herokuapp.com/topics/`)
    .then ((res) => {
    // if get works, run callback here
    console.log (res.data);
    topicArray = res.data.topics;

    // make a new div, style it, add text, append
    
    topicArray.forEach((element) => {
        let newDiv = document.createElement ('div');
        newDiv.classList.add ('tab');
        newDiv.textContent = element;
        topics.appendChild (newDiv);
        });
    })
    
    .catch((err) => {
    // if get fails, run this callback instead
        let errDiv = document.createElement('div');
        errDiv.classList.add ('p');
        errDiv.style.color = ('red');
        errDiv.textContent = (`${err}, unable to retrieve topics`);
        // mini stretch goal, added error message to page with some nice red text
        topics.appendChild (errDiv);


    })