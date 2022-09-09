console.log("Let's get this party started!");
async function getGif(term){
    const url = `https://api.giphy.com/v1/gifs/search?api_key=YJsrNv3Yw0Let3DHjnbEVUk0d6lEiQye&q=${term}&limit=100&offset=0&rating=g&lang=en`
    const res = await axios.get(url);
    // the math functions are to pull up a random gif, so you could use the same search term multiple times
    const newGif = (res.data.data[Math.floor(Math.random() * 10)]);
    insertImg(newGif.images.fixed_width.url);
    console.log(newGif.images);
}

function insertImg(img) {
    // this function is for HTML
    const imgContainer = document.querySelector('.images');
    const newGif = document.createElement('img');
    newGif.src = img;
    imgContainer.append(newGif);
}

const delButton = document.querySelector('#delete');
delButton.addEventListener('click', function(e) {
    e.preventDefault();
    const imgContainer = document.querySelector('.images');
    imgContainer.innerHTML = '';

})


const form = document.querySelector('#search-form');
form.addEventListener('submit', function(e) {
    const input = document.querySelector('#search');
    if (!(input.value)) {
        alert('please type something')
        return
    }
    e.preventDefault();
    getGif(input.value);
    input.value = '';
})