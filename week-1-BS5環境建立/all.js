const navbarTogglerBtn = document.querySelector(".js-c-navbarToggler");
const navbarCollapse = document.querySelector(".js-c-collapse");
navbarTogglerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    navbarCollapse.classList.forEach((className, index) => {
      (className == 'js-show') ?
        navbarCollapse.classList.remove('js-show')
        :
        navbarCollapse.classList.add('js-show')
    });
});
