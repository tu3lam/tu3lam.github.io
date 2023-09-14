const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("info-email");
  const btn = document.getElementById("info-submit");
  const form = document.getElementById("info-form");
  const info = document.querySelector(".info");
  btn.addEventListener("click", () => {
    if (!regex.test(email.value))
    {
      alert("Email không hợp lệ!");
      return;
    }
    form.style.display = "none";
    info.style.display = "block";
  });
});