import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
   const filteredArray = numbersArray.filter(elem=> elem%2===0);
filteredArray.forEach(elem=>{
  const li = document.createElement('li');
  li.innerText=elem;
  ul.appendChild(li);
});
});
