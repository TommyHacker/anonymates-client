const fs = require('fs');
// const { TestEnvironment } = require('jest-environment-jsdom');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

global.fetch = require('jest-fetch-mock');
let app;

// describe('app', () => {
//     beforeEach(() => {
//         document.documentElement.innerHTML = html.toString();
//         app = require('../getArticle.js')
//     })

//     describe('render comments', () => {
//         test('it renders comments', () => {
//             ("https://anonymates.herokuapp/articles")
//         })
//     })
// })

describe('app', () => {
	beforeEach(() => {
		document.documentElement.innerHTML = html.toString();
		app = require('../getArticle.js');
	});

	afterEach((done) => {
		fetch.resetMocks();
		done;
	});

	describe('requests', () => {
		describe('getSingleArticle', () => {
			test('it makes a get request to /articles/:id', () => {
				app.getSingleArticle();
				expect(fetch.mock.calls(1)).toBe(`123`);
			});

			test('it makes a post request to /articles with the article data', () => {
				const fakeSubmitArticle = {
					preventDefault: jest.fn(),
					target: {
						title: { value: 'this is the main test article' },
						body: {
							value: 'we can use this to test everything works properly',
						},
					},
				};

				app.articlesFetch(fakeSubmitArticle);
				expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST');
				expect(fetch.mock.calls[0][1]).toHaveProperty(
					'body',
					JSON.stringify({
						title: 'this is the main test article',
						body: 'we can use this to test everything works properly',
					})
				);
			});
		});
	});
});
