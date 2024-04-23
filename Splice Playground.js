let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexEl = document.getElementById("startIndexInput");
let deleteCountEl = document.getElementById("deleteCountInput");
let itemToAddEl = document.getElementById("itemToAddInput");
let onSpliceEl = document.getElementById("spliceBtn");
let updatedArrayEl = document.getElementById("updatedArray");


onSpliceEl.onclick = function() {
    let startIndex = startIndexEl.value;
    let deleteCount = deleteCountEl.value;
    let itemToAdd = itemToAddEl.value;

    let deleted = arr.splice(startIndex, deleteCount, itemToAdd);
    updatedArrayEl.textContent = arr;
}