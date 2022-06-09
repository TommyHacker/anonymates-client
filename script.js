const form = document.querySelector('#main-entry');
// const url = 'https://anonymates.herokuapp.com/article';

const creditCardDetails = prompt('whats your card details?');

form.addEventListener('submit', async (e) => {
	// dont refresh the page when form submitted.
	e.preventDefault();
	// get text area / body text from form
	const body = e.target.body.value;
	// get title from form
	const title = e.target.title.value;
	// put body and title into "data" payload
	// const gifUrl = e.target.
	const data = { body, title, giphyUrl };
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

/// this was from index.js

const id_indexJS = window.location.search.split('=')[1];

// get input element

let filterInput = document.getElementById('search-bar');
//add event listener
let ul = document.getElementById('names');

console.log(filterInput);

let li = document.querySelectorAll('li');
let nodes;

/***********************Practicing Search Functions**************************
 * *************************************************************************/

const operation_search = async () => {
	const response = await fetch('https://anonymates.herokuapp.com/articles');
	const f_data = await response.json();
	// console.log(f_data);

	f_data.forEach(async (data) => {
		// console.log(data.id);

		let a_href = `single-entry.html?id=${data.id}`;
		const li_js = document.createElement('li');
		const a_js = document.createElement('a');
		li_js.classList = 'list-group-item list-group-item-action';
		a_js.textContent = data.title;
		a_js.href = a_href;
		li_js.style.display = 'none';
		li_js.value = 0;
		li_js.append(a_js);
		ul.append(li_js);
		//   console.log(li);
		//   console.log(ul);
		nodes = document.querySelectorAll('li');
		// console.log(nodes);
	});
};
operation_search();
// console.log(li);

filterInput.addEventListener('keyup', filterNames);

//   ul.style.display = 'none'

li.forEach((e) => {
	e.style.display = 'none';
	e.value = '';
});

// console.log(li);

async function filterNames() {
	// get value of input
	let filterValue = await filterInput.value.toUpperCase();
	//   let filterValue = getElementById('filterInput').value.toUpperCase();
	//   console.log(filterValue);

	// get names ul
	// get lis from ul
	// loop thru coolection-item li's
	//   console.log(li);
	nodes.forEach((l, index) => {
		let a = l.firstElementChild.innerHTML;
		//   console.log(a);
		//let a = l.getElementsByTagName('a').firstChild;

		// original way
		//if stat , using 'a' and indexOf to match input value
		//show display if matches
		if (a.toUpperCase().includes(filterValue) && filterValue.length >= 1) {
			//NEW way i adddes includes and it works the same!
			//a.toUpperCase().indexOf(filterValue) << original
			//   console.log(a.toUpperCase().indexOf(filterValue));
			l.style.display = 'block';
		} else {
			//   console.log(index)
			l.style.display = 'none';
		}
	});
}

// practice modal function
let giphyUrl = '';
const get_Gif = async (e) => {
	//prevent submit refresh default
	e.preventDefault();

	// giphy api access key , giphy does public access keys also
	const api_key = 'grfrX5zkJtN2lUpb0RLNRAN1c82Me0Qc';

	// getting the search input value and trimming and spaces
	let expQ = document.getElementById('expQ').value.trim();

	//GIPHY api url with our access key added ,
	// whatever there user types in the search bar will ge inserted to ${expQ}
	const api_url = `http://api.giphy.com/v1/gifs/search?q=${expQ}&api_key=${api_key}&limit=4`;

	//fetching response from GIPHY api using api_url + ExQ + api_key
	const resp = await fetch(api_url);

	// turning that fetch response to json
	const api_data = await resp.json();

	//destruction of data from the json response
	const { data } = api_data;

	//console.logs for me to check
	// console.log(resp);
	// console.log(api_data);
	// console.log(data);

	//forEach() looping thru that fetched data and creating, appending and adding styles each loop
	//setting GIPHY URL to our created img tag src="" to finally dispplay GIF

	const commentImage = document.querySelector('#comment-image');

	data.forEach((e) => {
		//getting the already empty div
		const exp007 = document.getElementById('exp007');
		//creating the img element
		const imgz = document.createElement('img');
		//creating the h6 element
		// const h6 = document.createElement('h6')
		//drrting the h6's text-content to the title of each result of GIPHY api fetch data
		// h6.textContent = e.title
		//bootstrap marigin-top: 3something
		// h6.classList = "mt-3"
		//setting the created img's src to the nested giphy url
		imgz.src = e.images.fixed_height.url;
		//bootstrap class of width 50% i believe
		imgz.classList = 'p-2';
		// setting img tag to have a cursor pointer when hovered
		imgz.style = 'cursor: pointer;height:170px;width:170px;';

		console.log(exp007.childElementCount);
		// exp007.childElementCount >= 8 ?  false : ''
		//setting an event of click on img tags so can pick a GIF and fisplay in our comment-reply area
		imgz.addEventListener('click', (e) => {
			//clg event target's src
			console.log(e.target.src);
			// document.getElementById('textA').textContent = e.target.src;
			let url = e.target.src;
			giphyUrl = e.target.src;
			commentImage.src = imgz.src;
		});

		// appending our creations from the forEach Loop
		// exp007.append(h6, imgz)
		exp007.append(imgz);
	});
	// data[0].images.fixed_height.url
};

//setting event on form of submit and passing get_gif Function as a 2nd parameter
document.getElementById('gif-formz').addEventListener('submit', get_Gif);
