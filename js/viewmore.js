document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".job-card");
  cards.forEach(card => {
    let viewmore = card.childNodes[3];
    let details = card.childNodes[5];
    let togl = false;

    card.addEventListener("mouseover", e => {
      viewmore.style.visibility = "visible";
    });

    card.addEventListener("mouseout", e => {
      viewmore.style.visibility = "hidden";
    });

    viewmore.addEventListener("click", e => {
      togl = !togl;
      if (togl) {
        details.style.display = "block";
        viewmore.innerHTML = "View less";
      } else {
        details.style.display = "none";
        viewmore.innerHTML = "View more";
      }
      if (window.innerWidth < 992 && window.innerWidth > 576)
        msnry.layout();
    });
  })
});