let result;
const getSingleArticle = async () => {
	const id = window.location.search.split('=')[1];
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
				const comment = document.createElement('p');
				comment.textContent = result.comments[i].text;
				document.body.append(comment);
			}
		})
		.catch((err) => console.log(err));
	console.log(result.title);
};

getSingleArticle();
