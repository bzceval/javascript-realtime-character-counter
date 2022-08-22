const textareaEl = document.getElementById("textarea");

//içine yazılan karakterleri takip edeceğiz
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

//updateCounter Function "total counter" and "remaining counter"
const totalCounterEl = document.getElementById("totalCounter");
const remainingCounterEl = document.getElementById("remaining-total");
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
