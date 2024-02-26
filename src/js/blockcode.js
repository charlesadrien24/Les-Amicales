
  document.addEventListener("DOMContentLoaded", function() {
    var summaries = document.querySelectorAll("details > summary");
    summaries.forEach(function(summary) {
      summary.parentNode.addEventListener("toggle", function() {
        if (this.open) {
          summary.title = "Cliquez pour fermer";
        } else {
          summary.title = "Cliquez pour ouvrir";
        }
      });
    });
  });
