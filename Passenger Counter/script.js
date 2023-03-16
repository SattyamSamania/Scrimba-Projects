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
  // count += 1;
  let countStr = count + " - ";
  saveEl.innerHTML += countStr;
  console.log(count);
}