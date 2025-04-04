const inputName = document.getElementById("nameUser");
const inputEmail = document.getElementById("emailUser");
const inputMessage = document.getElementById("message");
const inputURL = document.getElementById("imageURL");
const submitBtn = document.getElementById("submitBtn");

function onSubmit(event) {
  event.preventDefault();

  const nameUserValue = inputName.value;
  const inputEmailValue = inputEmail.value;
  const inputMessageValue = inputMessage.value;
  const inputURLValue = inputURL.value;

  const contactInformation = {
    name: nameUserValue,
    mail: inputEmailValue,
    message: inputMessageValue,
    image: inputURLValue,
  };

  localStorage.setItem(
    "contactInformation",
    JSON.stringify(contactInformation)
  );
  printInformation();
}

function printInformation() {
  const information = JSON.parse(localStorage.getItem("contactInformation"));

  const myH2 = document.createElement("h2");
  const namePerson = document.createElement("p");
  const mailPerson = document.createElement("p");
  const messagePerson = document.createElement("p");
  const pimage = document.createElement("p");
  const imagePerson = document.createElement("img");

  myH2.textContent = "Información del usuario";
  namePerson.textContent = `Nombre: ${information.name}`;
  mailPerson.textContent = `email: ${information.mail}`;
  messagePerson.textContent = `Mensaje: ${information.message}`;
  pimage.textContent = "Imagen del usuario:";
  imagePerson.src = information.image;

  document.body.appendChild(myH2);
  document.body.appendChild(namePerson);
  document.body.appendChild(mailPerson);
  document.body.appendChild(messagePerson);
  document.body.appendChild(pimage);
  document.body.appendChild(imagePerson);
}

submitBtn.addEventListener("click", onSubmit);
