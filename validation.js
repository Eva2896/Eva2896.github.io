const submit = document.querySelector("#submit")
submit.addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const emailHelp = document.querySelector("#emailHelp");

  console.log(email);

  if(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)) {
    emailHelp.textContent = "Email Enviado!";
  } 

  if(!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email)) {
    emailHelp.textContent = "Email erroneo!";
  } 

});