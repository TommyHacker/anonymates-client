(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


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


const operation_search = async ()=>{
	const response = await fetch('https://anonymates.herokuapp.com/articles')
	const f_data = await response.json()
	// console.log(f_data);
	
	f_data.forEach(async data =>{
		// console.log(data.id);
		
		let a_href = `single-entry.html?id=${data.id}`
		const li_js = document.createElement('li')
		const a_js = document.createElement('a')
		li_js.classList = "list-group-item list-group-item-action"
		a_js.textContent = data.title
		a_js.href = a_href
		li_js.style.display = 'none'
		li_js.value = 0
		li_js.append(a_js)
		ul.append(li_js)
		//   console.log(li);
		//   console.log(ul);
		nodes = document.querySelectorAll('li')
		// console.log(nodes);
		})
	}
	operation_search()
	// console.log(li);
	
	
	filterInput.addEventListener('keyup', filterNames);
	
	
	
	//   ul.style.display = 'none'
	
	li.forEach(e=>{
		
		e.style.display = 'none'
	e.value = ""
  })


// console.log(li);




  async function filterNames(){
      // get value of input
      let filterValue = await filterInput.value.toUpperCase();
    //   let filterValue = getElementById('filterInput').value.toUpperCase();
    //   console.log(filterValue);

	  
	  
      // get names ul
      // get lis from ul 
      // loop thru coolection-item li's
    //   console.log(li);
      nodes.forEach((l, index) =>{

		
          let a =  l.firstElementChild.innerHTML;
		//   console.log(a);
          //let a = l.getElementsByTagName('a').firstChild;

          
          // original way
          //if stat , using 'a' and indexOf to match input value
          //show display if matches
          if( a.toUpperCase().includes(filterValue) && filterValue.length >= 1){
              //NEW way i adddes includes and it works the same!
              //a.toUpperCase().indexOf(filterValue) << original
            //   console.log(a.toUpperCase().indexOf(filterValue));
              l.style.display = 'block';
          } else{
            //   console.log(index)
              l.style.display = 'none';
          }
      })
  }






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
	// console.log(resp);
	// console.log(api_data);
	// console.log(data);

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

},{}]},{},[1]);
