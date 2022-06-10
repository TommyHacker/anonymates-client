const fs = require('fs');
<<<<<<< HEAD
=======
// const { TestEnvironment } = require('jest-environment-jsdom');
>>>>>>> abfe7fd01b56e54a47a7a8ce8919ab7f62177582
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


<<<<<<< HEAD
describe('script.js', () => {
    // beforeEach(() => {
    //     document.documentElement.innerHTML = html.toString();
    // })
    describe('head', () => {
        test('it has a title', () => {
            let title = document.querySelector('title');
            expect(title).toBeTruthy();
        })
    })

})
=======
global.fetch = require('jest-fetch-mock');
let app;

describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require('../getArticle.js')
    })

    describe('render comments', () => {
        test('it renders comments')
    })
})



// describe('app', () => {
//     beforeEach(() => {
//         document.documentElement.innerHTML = html.toString();
//         app = require('../getArticle.js')
//     })

//     afterEach(() => {
//         fetch.resetMocks();
//     })

//     describe('requests', () => {
//         describe('getSingleArticle', () => {
//             test('it makes a get request to /articles/:id', () => {
//                 app.getSingleArticle();
//                 expect(fetch.mock.calls[0][0]).toMatch(`/articles/${id}`)
//             })
        
        
            // test('it makes a post request to /articles with the article data', () => {
            //     const fakeSubmitArticle = {
            //         preventDefault: jest.fn(),
            //         target: {
            //             title: { value: 'this is the main test article' },
            //             body: { value: 'we can use this to test everything works properly' }
            //         }
            //     }

            //     app.articlesFetch(fakeSubmitArticle);
            //     expect(fetch.mock.calls[0][1]).toHaveProperty('method', 'POST');
            //     expect(fetch.mock.calls[0][1]).toHaveProperty(
            //         'body', 
            //         JSON.stringify({ 
            //             title: "this is the main test article", 
            //             body: "we can use this to test everything works properly"
            //         }));
            // })

//         })
//     })
// })   


>>>>>>> abfe7fd01b56e54a47a7a8ce8919ab7f62177582
