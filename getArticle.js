let result;
const id = window.location.search.split('=')[1];
let commentAmount = 0;
//let newCommentAmount = 0;

// this is to display the number of likes that the article has.
const likesNum = document.querySelector('.count-like');

const renderComments = () => {
	console.log(result.comments.length);
	if (result.comments.length > commentAmount && result.comments.length > 1) {
		for (i = commentAmount; i < result.comments.length; i++) {
			if (i != 0) {
				let e = result.comments[i];
				const reply_card_div = document.createElement('div');
				const reply_gif_img = document.createElement('img');
				const reply_text_div = document.createElement('div');
				const reply_Para = document.createElement('p');
				const comment_Div = document.getElementById('comment-append');

				console.log(e.giphyUrl);

				reply_card_div.classList = 'card p-3 mt-3';
				reply_card_div.style.width = '18rem';

				reply_gif_img.classList = 'card-img-top ';
				reply_gif_img.src = e.giphyUrl;
				reply_text_div.classList = 'card-body';

				reply_Para.classList = 'card-body';
				reply_Para.textContent = e.text;
				reply_text_div.append(reply_Para);
				reply_card_div.append(reply_gif_img, reply_text_div);

				e.giphyUrl ? comment_Div.append(reply_card_div) : '';
			}

			// console.log(i);
		}
		commentAmount = result.comments.length;
	}
};

//about.html doesnt need this
const getSingleArticle = async () => {
	await fetch(`https://anonymates.herokuapp.com/articles/${id}`)
		.then((res) => res.json())
		.then(async (data) => {
			result = data;
			// console.log(result.giphyUrl);
			// console.log(data);

			likesNum.textContent = data.likes;
			emojiCount1.textContent = data.reactions[0].count;
			emojiCount2.textContent = data.reactions[1].count;
			emojiCount3.textContent = data.reactions[2].count;

			// render the title

			const title = document.querySelector('#title');
			title.textContent = await result.title;
			// append to a container that isnt the body
			// e.g. const container = document.querySelector(".container")
			// container.append(title)

			// rended the article.body
			const message = document.querySelector('#article-text');
			message.textContent = await result.body;
			const articleContent = document.querySelector('#article-content');

			const imij = document.createElement('img');
			imij.src = result.giphyUrl;
			imij.id = 'article-gif';

			articleContent.append(imij);

			renderComments();
		})
		// for (i = 0; i < result.comments.length; i++) {
		// 	const comment = document.createElement('p')
		// 	//not sure if keeping this
		// 	comment.classList = " m-3 "
		// 	comment.textContent = result.comments[i].text;
		// 	//add this
		// 	comment_Div.append(comment)

		// for (i = 0; i < result.comments.length; i++) {
		// 	const comment = document.createElement('p');
		// 	comment.textContent = result.comments[i].text;
		// 	document.body.append(comment);

		// }
		.catch((err) => console.log(err));
	console.log(result.title);
	console.log(result.giphyUrl);
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
			mode: 'no-cors',
		},
		mode: 'cors',
		body: JSON.stringify({ data }),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			likesNum.textContent = data.likes;
		})
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
	let text = textA.value;
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
		.then((data) => {
			result.comments = data.data;
			//console.log(data);
			renderComments();
		})
		.catch((error) => console.log(error));
	textA.value = '';
	commentImage.src = '';
});

module.exports = getArticle;
