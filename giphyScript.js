// const gifBtn = document.querySelector('#gif-btn');
// const gifModal = document.querySelector('#gif-modal');
// gifModal.style.display = 'none';
// // make modal appear / dissapear
// gifModal.addEventListener('click', (e) => {
// 	e.stopPropagation();
// });
// let gifModalState = false;

// gifBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	// e.stopPropagation();
// 	gifModalState = !gifModalState;
// 	switch (gifModalState) {
// 		// if state is true, add reveal class and remove hide class from css
// 		// switch state from true or false
// 		case true:
// 			gifModal.style.display = 'flex';
// 			gifModal.classList = 'gif-modal reveal';
// 			gifBtn.textContent = 'X';
// 			break;
// 		case false:
// 			gifModal.classList = 'gif-modal hide';
// 			gifBtn.textContent = 'GIF';
// 			break;
// 		default:
// 			break;
// 	}
// });

// // this makes it so you can click anywhere on the screen and the gif modal will dissapear
// window.addEventListener('click', (e) => {
// 	console.log(gifModalState);
// 	if (gifModalState) {
// 		gifModalState = false;
// 		gifModal.classList = 'gif-modal hide';
// 		gifBtn.textContent = 'GIF';
// 	}
// });

// // .giphy-search-input
// // .giphy-search-btn
// const searchInput = document.querySelector('#giphy-search-input');
// const searchBtn = document.querySelector('#giphy-search-btn');
// const gif1 = document.querySelector('#gif1');
// const gif2 = document.querySelector('#gif2');
// const gif3 = document.querySelector('#gif3');

// searchBtn.addEventListener('click', (e) => {
// 	e.stopPropagation();
// 	const api_key = 'qkHJRINHutZAVA8f5WJpG2xOTRIxjGOE';
// 	const query = searchInput.value;
// 	let gif1Url = '';
// 	let gif2Url = '';
// 	let gif3Url = '';
// 	fetch(
// 		`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=3`,
// 		{
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		// }
// 	)
// 		.then((res) => res.json())
// 		.then((res) => {
// 			console.log(res);
// 			gif1.src = res.data[0].images.fixed_height.url;
// 			gif2.src = res.data[1].images.fixed_height.url;
// 			gif3.src = res.data[2].images.fixed_height.url;
// 		})
// 		.catch((err) => console.log(err));
// 	searchInput.value = '';
// });
// let chosenGif = '';
// const saveChosenGif = (url) => {
// 	chosenGif = url;
// 	gifModalState = false;
// 	gifModal.classList = 'gif-modal hide';
// 	gifBtn.textContent = 'GIF';
// };

// gif1.addEventListener('click', (e) => {
// 	saveChosenGif(e.target.src);
// });
// gif2.addEventListener('click', (e) => {
// 	saveChosenGif(e.target.src);
// });
// gif3.addEventListener('click', (e) => {
// 	saveChosenGif(e.target.src);
// });
