let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
console.log(countEl)

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count)

}


function save() {
  
  let countStr = count + " - ";
  saveEl.innerHTML += countStr;
  console.log(count);
  countEl.textContent =0;
  count =0;
}
