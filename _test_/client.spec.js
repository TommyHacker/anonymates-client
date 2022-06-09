const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('index.html', () => {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
	});
	describe('head', () => {
		test('it has a title', () => {
			let title = document.querySelector('title');
			expect(title).toBeTruthy();
		});
	});
});

	describe('body', () => {
		describe('form', () => {
			let form;
			let titleInput, textA, postBtn;
			beforeEach(() => {
				form = document.getElementById('#main-entry');
				titleInput = document.getElementById('#article-title');
				textA = document.querySelector('textarea');
				postBtn = document.querySelector('[type="submit"]');
			})
			test('it exists', () => {
				expect(form).toBeTruthy()
			});
		});
		
			describe('title input', () => {
				test('it is a text input', () => {
					expect(titleInput.getAttribute('type')).toBe('text')
				})

				test('it has a placeholder', () => {
					expect(document.querySelector('[placeholder="Type your title"]')).toBeTruthy();
				})
			});


	});
