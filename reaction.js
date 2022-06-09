const emoji1 = document.querySelector('#emoji1');
const emoji2 = document.querySelector('#emoji2');
const emoji3 = document.querySelector('#emoji3');

const emojiCount1 = document.querySelector('.emoji-count1');
const emojiCount2 = document.querySelector('.emoji-count2');
const emojiCount3 = document.querySelector('.emoji-count3');

// const id = window.location.search.split('=')[1];
// ID above is already declared in getArticle.js

emoji1.addEventListener('click', (e) => {
	e.stopPropagation();
	const data = { reaction: 0 };
	// fetch(`https://anonymates.herokuapp.com/articles/${id}/reaction`, {
	fetch(`https://anonymates.herokuapp.com/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((response) => {
			console.log(response);
			emojiCount1.textContent = response.reaction;
		})
		.catch((err) => console.log(err));
});

emoji2.addEventListener('click', (e) => {
	e.stopPropagation();
	const data = { reaction: 1 };
	fetch(`https://anonymates.herokuapp.com/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((response) => (emojiCount2.textContent = response.reaction))
		.catch((err) => console.log(err));
});

emoji3.addEventListener('click', (e) => {
	e.stopPropagation();
	const data = { reaction: 2 };
	fetch(`https://anonymates.herokuapp.com/articles/${id}/reaction`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((response) => (emojiCount3.textContent = response.reaction))
		.catch((err) => console.log(err));
});
