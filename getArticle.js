let result;
const id = window.location.search.split('=')[1];
const getSingleArticle = async () => {
	await fetch(`https://anonymates.herokuapp.com/articles/${id}`)
		.then((res) => res.json())
		.then(async (data) => {
			result = data;

			// render the title

			const title = document.querySelector('#title');
			title.textContent = await result.title;
			// append to a container that isnt the body
			// e.g. const container = document.querySelector(".container")
			// container.append(title)

			// rended the article.body
			const message = document.querySelector('#article-content');
			message.textContent = await result.body;

			// render comments
			for (i = 0; i < result.comments.length; i++) {
				const comment = document.createElement('p')
				const comment_Div = document.getElementById('comment-append')
				comment.classList = " m-3 "
				comment.textContent = result.comments[i].text;
				comment_Div.append(comment)
			}
		})
		.catch((err) => console.log(err));
	console.log(result.title);
};

getSingleArticle();

//Like Button
const likeBtn = document.querySelector('.likebtn');

const increaseLike = () => {
	const data = { likes: 1 };
	fetch(`https://anonymates.herokuapp.com/articles/${id}/like`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		body: JSON.stringify({ data }),
	})
		.then((res) => res.text())
		.then((res) => console.log(res))
		.catch((error) => console.log(error));
};

const clickLikeBtn = () => {
	increaseLike();
};

likeBtn.addEventListener('click', clickLikeBtn);

//LEAVE A COMMENT BUTTON

const commentForm = document.querySelector('#comment-form');
const textA = document.querySelector('#textA');
const commentImage = document.querySelector('#comment-image');

commentForm.addEventListener('submit', async (e) => {
	e.preventDefault();
	const text = textA.value;
	console.log('text = ', text);
	const giphyUrl = commentImage.src;
	console.log('giphyUrl = ', giphyUrl);
	await fetch(`https://anonymates.herokuapp.com/articles/${id}/comment`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			mode: 'no-cors',
		},
		body: JSON.stringify({ text, giphyUrl }),
	})
		.then((res) => res.json())
		.then((data) => console.log(data))
		// .then(async (data) => {
		// 	const comment = data;

		// })
		.catch((error) => console.log(error));
});
