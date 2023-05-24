//At first we are going to bring id joke here so that we can give api request to fetch the jokes
//and button bokeBtn to give event listner on that too work

const jokeEL = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);
//This code can be used when we use async await
//since fetch is async we have to await until it is done fetching so we usse await keyword before fecth
//whenwever we use await inside a function we have to label that function async
generateJoke();
async function generateJoke() {
  const config = {
    headers: { Accept: "application/json" },
  };

  const respnse = await fetch("https://icanhazdadjoke.com", config);
  const data = await respnse.json();
  jokeEL.innerHTML = data.joke;
}

//OOr this code can be used by using .thn()
// function generateJoke() {
//   const config = {
//     headers: { Accept: "application/json" },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((respnse) => respnse.json())
//     .then((data) => {
//       jokeEL.innerHTML = data.joke;
//     });
// }
