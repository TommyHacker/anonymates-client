const form = document.querySelector('form');
// const url = 'https://anonymates.herokuapp.com/article';

form.addEventListener('submit', async (e) => {
    // dont refresh the page when form submitted.
    e.preventDefault();
    // get text area / body text from form
    const body = e.target.body.value;
    // get title from form
    const title = e.target.title.value;
    // put body and title into "data" payload
    const data = { body, title };
    // for heroku
    const url = 'https://anonymates.herokuapp.com/articles';
    // for localhost
    const localUrl = 'http://localhost:3000/articles';

    const result = fetch('https://anonymates.herokuapp.com/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // destructure data into string
        body: JSON.stringify({ data }),
        // ignore cors policy
        cors: 'no-cors', 
    })
        // parse response
        .then((res) => res.json())
        // return data once parsed
        .then((res) => {window.location.replace(`./single-entry.html?id=${res.data.id}`)})
        // catch any errors
        .catch((err) => console.log(err));
});

// this gets an Array of all articles!
const articlesFetch = async () => {
    // fetch the array string
    fetch('https://anonymates.herokuapp.com/articles')
        // parse to javascript
        .then((res) => res.json())
        // do something with the data
        .then((data) => console.log(data))
        // catch any error
        .catch((err) => console.log(err));
};

// get all articles on page load
articlesFetch();
