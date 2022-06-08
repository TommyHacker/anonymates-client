const form = document.querySelector('#main-entry');
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
		.then((res) => {
			window.location.replace(`./single-entry.html?id=${res.data.id}`);
		})
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
		.then((data) =>
			data.forEach((el) => {
				// attempting to display all articles
				// console.log(data);

				const div = document.createElement('div');
				const h1 = document.createElement('h1');
				const p1 = document.createElement('p');

				// textA.classList = 'form-control-lg m-3'
				const divy = document.querySelector('#divy');
				divy.classList = 'd-flex flex-column-reverse align-items-center';
				div.classList = ' w-75 card mt-4 p-3';
				p1.classList = 'card-text form-control';
				h1.classList = 'card-title text-center';

				h1.textContent = el.title;
				p1.textContent = el.body;

				div.appendChild(h1);
				div.appendChild(p1);
				divy.appendChild(div);

				console.log(el.comments[el.comments.length - 1]);

				div.addEventListener('click', (e) => {
					window.location.replace(`./single-entry.html?id=${el.id}`);
				});
			})
		)
		// catch any error
		.catch((err) => console.log(err));
};

function validateField() {
	var docs = document.getElementById('img');
	docs.setAttribute('src', 'images/action/animation/UploadStatus.gif');
}

// get all articles on page load
articlesFetch();
