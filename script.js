const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = e.target.body.value;
    const title = e.target.title.value;
    const data = { body, title }

    fetch('https://anonymates.herokuapp.com/articles', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));

    //console.log(e.target.title.value);
})



const articlesFetch = () => {
    fetch('https://anonymates.herokuapp.com/articles')
    .then(res => res.json())
    .then(response => console.log(response))
}

articlesFetch();
