/*******************************************************
 ***delete file was just sample code for a comment section
 ***************************************************/

// const commentContainer = document.getElementById('allComments');
// document.getElementById('addComments').addEventListener('click', function (ev) {
//    addComment(ev);
// });

// let commentText, wrapDiv;
// function addComment(ev) {
//     const textBox = document.createElement('div');

//     const replyButton = document.createElement('button');

//     replyButton.className = 'reply';
//     replyButton.innerHTML = 'Reply';

//     const likeButton = document.createElement('button');
//     likeButton.innerHTML = 'Like';
//     likeButton.className = 'likeComment';

//     const wrapDiv = document.createElement('div');
//     wrapDiv.className = 'wrapper';
//     wrapDiv.style.marginLeft = 0;

//     commentText = document.getElementById('newComment').value;
//     document.getElementById('newComment').value = '';
//     textBox.innerHTML = commentText;

//     wrapDiv.append(textBox, replyButton, likeButton);
//     commentContainer.appendChild(wrapDiv);

// }

// practice modal function

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
	console.log(resp);
	console.log(api_data);
	console.log(data);

	//forEach() looping thru that fetched data and creating, appending and adding styles each loop
	//setting GIPHY URL to our created img tag src="" to finally dispplay GIF
	let giphyUrl = '';
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
		imgz.style = 'cursor: pointer; height:170px; width:170px;';

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
document.getElementById('formz').addEventListener('submit', get_Gif);
