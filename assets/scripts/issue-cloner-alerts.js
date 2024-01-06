window.addEventListener("DOMContentLoaded", (event) => {
  // get query param for clone issue message/error
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get("message");
  const error = urlParams.get("error");

  // alerts for issue cloning (error/success message)
  const alert = document.querySelector(".c-alert");
  if (!alert) {
    console.error("no alert element found");
    return;
  }
  const alertClose = alert.querySelector(".close");

  if (message) {
    alert.removeAttribute("hidden");
    alert.classList.remove("c-alert--warning");
    alert.classList.add("c-alert--info");
    alert.querySelector(".alert__message").innerHTML = message;
  }

  if (error) {
    alert.removeAttribute("hidden");
    alert.classList.remove("c-alert--info");
    alert.classList.add("c-alert--warning");
    alert.querySelector(".alert__message").innerHTML = error;
  }

  alertClose.addEventListener("click", (event) => {
    alert.setAttribute("hidden", true);
  });
});
