let result;
const id = window.location.search.split('=')[1];
const getSingleArticle = async () => {	
	await fetch(`https://anonymates.herokuapp.com/articles/${id}`)
		.then((res) => res.json())
		.then(async (data) => {
			result = data;

			// render the title

			const title = document.querySelector('#title')
			title.textContent = await result.title;
			// append to a container that isnt the body
			// e.g. const container = document.querySelector(".container")
			// container.append(title)


			// rended the article.body
			const message = document.querySelector('#article-content')
			message.textContent = await result.body;



			// render comments
			for (i = 0; i < result.comments.length; i++) {
				const comment = document.createElement('p');
				comment.textContent = result.comments[i].text;
				document.body.append(comment);
			}

			//Likes
			const countLike = document.querySelector('.count-like');
			countLike.textContent = result.likes;
		
		})
		.catch((err) => console.log(err));
		console.log(result.title);
};

getSingleArticle();


//Like Button
const likeBtn = document.querySelector('.likebtn');

const increaseLike = () => {
	const data = {likes: 1}
	fetch(`https://anonymates.herokuapp.com/articles/${id}/like`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors',
		body: JSON.stringify({data})
	})
	.then(res => res.text())
	.then(res => console.log(res))
	.catch(error => console.log(error))

}

const clickLikeBtn = () => {
	increaseLike()
}

likeBtn.addEventListener('click', clickLikeBtn)

const form = document.getElementById('single-entry')
form.addEventListener('submit', async (e) => {
	// dont refresh the page when form submitted.
	e.preventDefault();
	
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

