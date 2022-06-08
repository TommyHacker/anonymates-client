const emoji1 = document.querySelector('#emoji1');
const emoji2 = document.querySelector('#emoji2');
const emoji3 = document.querySelector('#emoji3');

// const id = window.location.search.split('=')[1];
// ID above is already declared in getArticle.js

emoji1.addEventListener('click', (e) => {
	const data = { reaction: 0 };
	console.log(data);
	fetch(`http://localhost:3000/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});

emoji2.addEventListener('click', (e) => {
	const data = { reaction: 1 };
	console.log(data);
	fetch(`http://localhost:3000/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});

emoji2.addEventListener('click', (e) => {
	const data = { reaction: 2 };
	console.log(data);
	fetch(`http://localhost:3000/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		.catch((err) => console.log(err));
});
