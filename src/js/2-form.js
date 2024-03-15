const form = document.querySelector(".feedback-form");

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;
const localStorageKey = "feedback-form-state";

inputEmail.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? "";
inputMessage.value = JSON.parse(localStorage.getItem(localStorageKey)).message ?? "";

// form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", addLocalStorageItem);
function addLocalStorageItem() {
  const objFeedback = {
    email: inputEmail.value.trim(),
    message: inputMessage.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(objFeedback));
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmail.value.trim() !== "" && inputMessage.value.trim() !== "") {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    localStorage.removeItem(localStorageKey);
    form.reset();
  } else alert("Заповніть всі поля!");
});
