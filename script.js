document.addEventListener("DOMContentLoaded", function() {
  let outers = document.querySelectorAll(".outer");
  outers.forEach(function(outer) {
    outer.addEventListener("click", function() {
      this.style.borderColor = "#fedcba";
      setTimeout(function() {
        outer.style.borderColor = "";
      }, 1000);
    });
  });
});
