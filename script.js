const form = document.querySelector("form")
const formInput = document.querySelector(".form-input")
// const formBtn = document.querySelector(".form-btn")
const errorInputImg = document.querySelector(".error-input-img")
const invalidInputMsg = document.querySelector(".invalid-input-msg")
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const isValid = regexEmail.test(formInput.value);

    if(!isValid) {
        formInput.classList.add("error-input")
        errorInputImg.style.display = "block"
        invalidInputMsg.innerText = "Please provide a valid email"
    } else {
        formInput.classList.remove("error-input")
        errorInputImg.style.display = "none"
        invalidInputMsg.innerText = ""
    }
})

formInput.addEventListener("input", () => {
    formInput.classList.remove("error-input");
    errorInputImg.style.display = "none";
    invalidInputMsg.innerText = "";
});


