let featuredFirst;
let featuredSecond;
let featuredThird;
const fetchit = async () => {
	const res = await fetch(
		'https://anonymates.herokuapp.com/articles/featured/3'
	);
	const data = await res.json();
	console.log(data);
	featuredFirst = data.data[0];
	featuredSecond = data.data[1];
	featuredThird = data.data[2];

	const featuredArticle1 = document.querySelector('#featured-1');
	const featuredArticle2 = document.querySelector('#featured-2');
	const featuredArticle3 = document.querySelector('#featured-3');

	const featuredLink1 = document.querySelector('#featured-1-id');
	const featuredLink2 = document.querySelector('#featured-2-id');
	const featuredLink3 = document.querySelector('#featured-3-id');

	featuredArticle1.textContent = featuredFirst.title;
	featuredArticle2.textContent = featuredSecond.title;
	featuredArticle3.textContent = featuredThird.title;

	featuredLink1.addEventListener('click', () =>
		window.location.replace(`./single-entry.html?id=${featuredFirst.id}`)
	);
	featuredLink2.addEventListener('click', () =>
		window.location.replace(`./single-entry.html?id=${featuredSecond.id}`)
	);
	featuredLink3.addEventListener('click', () =>
		window.location.replace(`./single-entry.html?id=${featuredThird.id}`)
	);
};

fetchit();
