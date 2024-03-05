// efek hover pada navbar

document.addEventListener("DOMContentLoaded", function () {
    const portfolioLink = document.querySelector(".navbar-brand");
  
    portfolioLink.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2)";
      this.style.transition = "transform 0.3s ease";
    });
  
    portfolioLink.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
      this.style.transition = "transform 0.3s ease";
    });
  });
  