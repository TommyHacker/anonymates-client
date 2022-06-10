/***********************Practicing Search Functions**************************
 * *************************************************************************/
 let filterInput = document.getElementById('search-bar');
 //add event listener
 let ul = document.getElementById('names');
 
 let li = document.querySelectorAll('li');
 let nodes;

 const operation_search = async () => {
	const response = await fetch('https://anonymates.herokuapp.com/articles');
	const f_data = await response.json();

	f_data.forEach(async (data) => {

		let a_href = `single-entry.html?id=${data.id}`;
		//li tag creation
		const li_js = document.createElement('li');
		// a tag creation
		const a_js = document.createElement('a');

		//adding bootstrap classes to the li & a-tags
		a_js.classList = 'list-group-item list-group-item-action fs-4';
		a_js.textContent = data.title;
		a_js.href = a_href;
		li_js.style.display = 'none';
		li_js.value = 0;

		// appending the a-tags inside th li-tags
		li_js.append(a_js);

		// appending the li-tags inside the Ul tag with id of names
		ul.append(li_js);

		// grouping the lis into node array so i can use forEach on them 
		nodes = document.querySelectorAll('li');
	});
};

// calling the function
operation_search();

filterInput.addEventListener('keyup', filterNames);


async function filterNames() {
	// get value of input
	let filterValue = await filterInput.value.toUpperCase();
	
	// get names ul
	// get lis from ul
	// loop thru item-list li's
	
	nodes.forEach((l, index) => {
		let a = l.firstElementChild.innerHTML;
		// could of used this instead let a = l.getElementsByTagName('a').firstChild; 

		//if statement , using 'a' and includes to match input value
		//show display if matches
		if (a.toUpperCase().includes(filterValue) && filterValue.length >= 1) {
			//NEW way i addded includes and it works the same!
			// original way i tried =>> a.toUpperCase().indexOf(filterValue) 

			//setting the li child aka a-tags to block to show what matches 
			l.style.display = 'block';
		} else {
			//setting the li child aka a-tags to none to hide
			l.style.display = 'none';
		}
	});
}


// li.forEach((e) => {
// 	e.style.display = 'none';
// 	e.value = '';
// });
