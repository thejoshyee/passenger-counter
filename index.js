let count = 0;
const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    const countStr = `${count  } - `;
    saveEl.textContenttStr;
    countEl.textContent = 0;
    count = 0;
}

