const fs = require('fs');
const path = require('path');
const homePage = fs.readFileSync(
	path.resolve(__dirname, '../index.html'),
	'utf8'
);
const singleEntry = fs.readFileSync(
	path.resolve(__dirname, '../single-entry.html')
);

describe('index.html', () => {
	beforeEach(() => {
		document.documentElement.innerHTML = homePage.toString();
	});
	describe('head', () => {
		test('it has a title', () => {
			let title = document.querySelector('title');
			expect(title).toBeTruthy();
		});
	});
});

describe('single-entry.html ', () => {
	beforeEach(() => {
		document.documentElement.innerHTML = singleEntry.toString();
	});
	test('it has a title', () => {
		let title = document.querySelector('#title');
		expect(title).toBeTruthy();
	});
});

// describe('body', () => {
// 	describe('form', () => {
// 		let form;
// 		let titleInput, textA, postBtn;
// 		beforeEach(() => {
// 			form = document.querySelector('#main-entry');
// 			titleInput = form.querySelector('#article-title');
// 			textA = form.querySelector('textarea');
// 			postBtn = form.querySelector('[type="submit"]');
// 		});

// 		test('it exists', () => {
// 			expect(form).toBeTruthy();
// 		});
// 	});

// 	describe('title input', () => {
// 		test('it is a text input', () => {
// 			expect(titleInput.getAttribute('type')).toBe('text');
// 		});

// 		test('it has a placeholder', () => {
// 			expect(
// 				document.querySelector('[placeholder="Type your title"]')
// 			).toBeTruthy();
// 		});
// 	});

// 	describe('textarea', () => {
// 		test('it has a max number of words', () => {
// 			expect(textA.getAttribute('maxlength')).toBe('1000');
// 		});
// 	});

// 	describe('post button', () => {
// 		test('it says "Post here!"', () => {
// 			expect(postBtn.value).toBe('Post here!');
// 		});
// 	});

// 	test('it has a GIF form', () => {
// 		expect(document.getElementById('#gif-formz')).toBeTruthy();
// 	});
// });
