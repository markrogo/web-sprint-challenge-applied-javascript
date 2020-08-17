// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let articlesArray = [];
let jsArray = [];
let nodeArray = [];
let bootArray = [];
let techArray = [];
let jqArray = [];

let currentTopic = "";
const cards = document.querySelector('.cards-container');

function buildArticles () {
axios 
    .get (`https://lambda-times-api.herokuapp.com/articles`)
    .then ((res) => {
        // console.log ('Here is the res: ', res); // need to see data to figure it out
        // console.log (res.data.articles) // content is in here;
        // object with 5 topic 'keys' and associated arrays of articles
        // grab all the keys
        let keys = Object.keys (res.data.articles);
        console.log (keys);

        // extract 5 arrays from data set (how to do this by using keys??)
        let jsArray = res.data.articles.javascript;
        let bootArray = res.data.articles.bootstrap;
        let techArray = res.data.articles.technology;
        let jqArray = res.data.articles.jquery;
        let nodeArray = res.data.articles.node;

        // tags each array with its topics, surely a way to build the variable names with
        // object.keys but I'm not sure how
        tagArticles (jsArray, 'javascript');
        tagArticles (bootArray, 'bootstrap');
        tagArticles (techArray, 'technology');
        tagArticles (jqArray, 'jquery');
        tagArticles (nodeArray, 'node');
        
        // make one big array from the 5 arrays
        articlesArray = [...jsArray, ...bootArray, ...techArray, ...jqArray, ...nodeArray];
        console.log (articlesArray);

        // addAll (articlesArray);

        let topics = document.querySelectorAll('.tab');

        articlesArray.forEach((element) => {
            makeArticle (element);
        })
        topics.forEach ((t) => {
            
            t.addEventListener ('click', () => {
                currentTopic = (t.textContent);
                 if (currentTopic == 'reset') {
                    currentTopic = '';
                };
                console.log ("current topic ", currentTopic);
                deleteChildren ();
                switch (currentTopic) {
                    case 'javascript':
                        jsArray.forEach((element) => {
                            makeArticle (element);
                        })
                        break;
                    case 'bootstrap':
                        bootArray.forEach((element) => {
                            makeArticle (element);
                        })
                        break;
                    case 'technology':
                        techArray.forEach((element) => {
                            makeArticle (element);
                        })
                        break;
                    case 'jquery':    
                          
                          jqArray.forEach((element) => {
                            makeArticle (element);
                        })
                        break;
                    case 'node.js':
                        nodeArray.forEach((element) => {
                            makeArticle (element);
                        })
                        break;
                    
                    default: 
                            articlesArray.forEach((element) => {
                            makeArticle (element);
                        });
            
                
            }


            });
        });
        
    })

    .catch((err) => {
        // if get fails, run this callback instead
        let errDiv = document.createElement('div');
        errDiv.classList.add ('p');
        errDiv.style.color = ('red');
        errDiv.textContent = (`${err}, unable to retrieve articles`);
        cards.appendChild (errDiv);
    
    
    })

};   


    function deleteChildren () {
        while (cards.firstChild) {
            cards.removeChild(cards.firstChild);
        }
    };

    // tags each array with its topics
    function tagArticles (topicArray, topicName) {
        topicArray.forEach ((art) => {
            art.topic = topicName;
        });
    }

    function makeArticle (article) {
        // add elements
        let newDiv = document.createElement('div');
        let head = document.createElement ('div');
        let author = document.createElement ('div');
        let img = document.createElement ('img');
        let span = document.createElement ('span');
        
        // add styles
        newDiv.classList.add ('card');
        head.classList.add ('headline');
        author.classList.add ('author');
        img.classList.add ('img-container');

        // add content
        head.textContent = article.headline;
        span.textContent = `By ${article.authorName}`;
        img.src = article.authorPhoto;
        


        // append pieces (I went rogue here and just changed the templated HTML)
        // specifically I add the span to the author div so it formats correctly

        author.appendChild(img);
        author.appendChild(span);

        newDiv.appendChild(head);
        newDiv.appendChild(author);

        // append whole article
        cards.appendChild (newDiv);

      


    }
 
buildArticles ();