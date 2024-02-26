const buttonSubmit = document.querySelector("div.cassaforte button");
const boxInserimentoCombinazione = document.getElementById("combinazione");

const erroreTag = document.querySelector("input + small");
const messageSuccessEl = document.querySelector("div.success-message p");

buttonSubmit.addEventListener("click", gestisciTentativoAperturaCassaforte);

function gestisciTentativoAperturaCassaforte() {
  const tentativo = boxInserimentoCombinazione.value;

  if (
    ((tentativo < 16 || tentativo > 60) && tentativo % 2 === 0) ||
    (tentativo >= 70 && tentativo <= 90 && tentativo % 2 === 1)
  ) {
    //Posso aprire la cassaforte
    messageSuccessEl.textContent = "Complimenti hai aperto la cassaforte";
    messageSuccessEl.classList.add("animate-success-message");
    erroreTag.classList.remove("visualizza-errore");
  } else {
    //Non puoi aprire la cassaforte
    erroreTag.classList.add("visualizza-errore");
    messageSuccessEl.classList.remove("animate-success-message");
    messageSuccessEl.textContent = "";
  }
}
