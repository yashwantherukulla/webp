document.addEventListener("DOMContentLoaded", function () {
    const clickableItems = document.querySelectorAll(".clickable");
  
    let currentlyOpen = null;
  
    clickableItems.forEach((item) => {
      item.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
  
        if (targetElement === currentlyOpen) {
          targetElement.classList.add("hidden");
          this.classList.remove("active");
          currentlyOpen = null;
        } else {
          if (currentlyOpen) {
            currentlyOpen.classList.add("hidden");
            document.querySelector(`.clickable[data-target="${currentlyOpen.id}"]`).classList.remove("active");
          }
  
          targetElement.classList.remove("hidden");
          this.classList.add("active");
          currentlyOpen = targetElement;
        }
      });
    });
  
    const animateHeading = () => {
      const heading = document.querySelector("h1");
      const text = heading.innerHTML;
      heading.innerHTML = "🤓 ";
      let i = 0;
  
      const typing = setInterval(() => {
        if (i < text.length) {
          heading.innerHTML += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    };
  
    animateHeading();
  });