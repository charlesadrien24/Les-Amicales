document.addEventListener('DOMContentLoaded', (event) => {
    const coll = document.getElementsByClassName("partenaires-title");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.title = "Cliquez pour ouvrir";
        } else {
          content.style.display = "block";
          this.title = "Cliquez pour fermer";
        }
      });
    }
  });