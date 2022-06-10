/***********************Practicing Search Functions**************************
 * *************************************************************************/


 let filterInput = document.getElementById('search-bar');
 //add event listener
 let ul = document.getElementById('names');
 
 console.log(filterInput);
 
 let li = document.querySelectorAll('li');
 let nodes;


 const operation_search = async () => {
	const response = await fetch('https://anonymates.herokuapp.com/articles');
	const f_data = await response.json();
	// console.log(f_data);

	f_data.forEach(async (data) => {
		// console.log(data.id);

		let a_href = `single-entry.html?id=${data.id}`;
		const li_js = document.createElement('li');
		const a_js = document.createElement('a');
		a_js.classList = 'list-group-item list-group-item-action fs-4';
		a_js.textContent = data.title;
		a_js.href = a_href;
		li_js.style.display = 'none';
		li_js.value = 0;
		li_js.append(a_js);
		ul.append(li_js);
		//   console.log(li);
		//   console.log(ul);
		nodes = document.querySelectorAll('li');
		// console.log(nodes);
	});
};
operation_search();

filterInput.addEventListener('keyup', filterNames);


li.forEach((e) => {
	e.style.display = 'none';
	e.value = '';
});

// console.log(li);

async function filterNames() {
	// get value of input
	let filterValue = await filterInput.value.toUpperCase();
	//   let filterValue = getElementById('filterInput').value.toUpperCase();
	//   console.log(filterValue);

	// get names ul
	// get lis from ul
	// loop thru coolection-item li's
	//   console.log(li);
	nodes.forEach((l, index) => {
		let a = l.firstElementChild.innerHTML;
		//   console.log(a);
		//let a = l.getElementsByTagName('a').firstChild;

		// original way
		//if stat , using 'a' and indexOf to match input value
		//show display if matches
		if (a.toUpperCase().includes(filterValue) && filterValue.length >= 1) {
			//NEW way i adddes includes and it works the same!
			//a.toUpperCase().indexOf(filterValue) << original
			//   console.log(a.toUpperCase().indexOf(filterValue));
			l.style.display = 'block';
		} else {
			//   console.log(index)
			l.style.display = 'none';
		}
	});
}
