const avatar = document.getElementById("avatar");
const button = document.getElementById ("button");
const background = document.querySelector('.pink-bg');
const presentation = document.querySelector('.description pink-bg');
const texte = document.querySelector('.pink-text');

avatar.onclick = function () {
  avatar.src = "image/avatar.svg";
};


button.addEventListener("click", () => {
  const name = document.getElementById("name");

  let change = prompt ("Choose the name");
  name.innerHTML = change;
  name.style.color = "#FFF"
  background.style.backgroundColor = "#750ff7";
  presentation.style.backgroundColor ="#750ff7";
  texte.style.color ="#750ff7";
});
