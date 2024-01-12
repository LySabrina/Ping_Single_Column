const form = document.querySelector(".email-form");

const input = form.querySelector(".email-form__email");

const button = form.querySelector(".email-form__btn");

/**
 *
 * @param {String} email Email that needs testing validation
 * @returns boolean true or false if it's valid
 */
const emailValid = (email) => {
  const regex = /[A-Za-z][A-Za-z0-9][A-Za-z0-9]+@[A-Za-z]+\.(com|org)/;
  return regex.test(email);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const error_message = document.querySelector(".error");
  if (!emailValid(input.value)) {
    // const error_message = document.createElement("p");
    // error_message.textContent = "Please provide a valid email address";
    // error_message.classList.add("error");
    // form.insertAdjacentElement("afterend",error_message);

    error_message.classList.remove("hide");
    input.classList.add('email-form__email-error');
  } else {
    error_message.classList.add("hide");
    input.classList.remove('email-form__email-error');
    alert("Sucess sign up");
  }
});
