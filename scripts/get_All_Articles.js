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

				// console.log(el.comments[el.comments.length - 1]);

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
