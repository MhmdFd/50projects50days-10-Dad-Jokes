const joke = document.querySelector('#jokes');
const btn = document.querySelector('#btn');

changeJoke();
btn.addEventListener('click', changeJoke);


function changeJoke(){
    fetch('https://icanhazdadjoke.com/',
    { headers : {
            "Accept" : "application/json"
        }
    })
    .then((res) => res.json())
    .then((data) => joke.textContent = data.joke)
}