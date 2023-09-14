var msnry;
document.addEventListener("DOMContentLoaded", () => { 
  const container = document.querySelector("#job-info .row");
  let toggle = false;
  window.addEventListener("resize", () => {
    if ((window.innerWidth < 992 && window.innerWidth > 576) && !toggle)
    {
      msnry = new Masonry(container, {percentPosition: true, resizable: false, gutter: 50});
      toggle = true;
    }
    else if ((window.innerWidth >= 992 || window.innerWidth <= 576) && toggle)
    {
      msnry.destroy();
      toggle = false;
    }
  })
});